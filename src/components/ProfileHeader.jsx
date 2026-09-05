export default function ProfileHeader({ name, handle, bio, avatarUrl }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white/70 dark:bg-zinc-800/60 backdrop-blur-md rounded-2xl border border-zinc-200 dark:border-zinc-700/60 shadow-lg max-w-sm w-full mx-auto">
      <img
        src={avatarUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300"}
        alt={name || "User Avatar"}
        className="w-24 h-24 rounded-full object-cover ring-4 ring-indigo-500/30 shadow-md mb-4"
      />

      <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
        {name || "Your Name"}
      </h1>

      <p className="text-sm font-medium text-indigo-500 mb-2">
        {handle || "@yourhandle"}
      </p>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {bio || "Frontend enthusiast & developer. Crafting clean web experiences."}
      </p>
    </div>
  );
}