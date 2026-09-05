export default function EditorPanel({ profile, onUpdateProfile, onReset }) {
  if (!profile) return null;

  return (
    <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col gap-4">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-100">Profile Settings</h2>
        <button
          type="button"
          onClick={onReset}
          className="text-xs text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
        >
          Reset Defaults
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          Display Name
        </label>
        <input
          type="text"
          value={profile.name || ""}
          onChange={(e) => onUpdateProfile({ name: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-800/60 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          Username / Handle
        </label>
        <input
          type="text"
          value={profile.handle || ""}
          onChange={(e) => onUpdateProfile({ handle: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-800/60 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          Bio
        </label>
        <textarea
          rows={3}
          value={profile.bio || ""}
          onChange={(e) => onUpdateProfile({ bio: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-800/60 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none transition-all"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          Avatar URL
        </label>
        <input
          type="text"
          value={profile.avatarUrl || ""}
          onChange={(e) => onUpdateProfile({ avatarUrl: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-800/60 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
      </div>
    </div>
  );
}