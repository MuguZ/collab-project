import { useState, useEffect } from "react";
import { initialProfile } from "../data/defaultProfile";

const STORAGE_KEY = "devhub_profile_data_v3";

export function useProfileState() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialProfile;
    } catch (e) {
      console.error("Failed to load local storage state:", e);
      return initialProfile;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error("Failed to save local storage state:", e);
    }
  }, [data]);

  const updateProfile = (fields) => {
    setData((prev) => ({
      ...prev,
      profile: { ...prev.profile, ...fields },
    }));
  };

  const addLink = (newLink) => {
    setData((prev) => ({
      ...prev,
      links: [...prev.links, { id: `link-${Date.now()}`, ...newLink }],
    }));
  };

  const removeLink = (id) => {
    setData((prev) => ({
      ...prev,
      links: prev.links.filter((l) => l.id !== id),
    }));
  };

  const resetToDefault = () => {
    localStorage.removeItem(STORAGE_KEY);
    setData(initialProfile);
  };

  return {
    data,
    updateProfile,
    addLink,
    removeLink,
    resetToDefault,
  };
}