import ProfileHeader from "./components/ProfileHeader";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-950 flex items-center justify-center p-4">
      <ProfileHeader
        name="Sreema"
        handle="@sreema_dev"
        bio="Building clean web apps & designing slick UI with React and Tailwind."
      />
    </main>
  );
}
