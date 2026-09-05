import { useProfileState } from "./hooks/useProfileState";
import EditorPanel from "./components/EditorPanel";
import ProfileHeader from "./components/ProfileHeader";

export default function App() {
  const { data, updateProfile, resetToDefault } = useProfileState();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center py-12 px-4 selection:bg-indigo-500 selection:text-white">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          DevHub Generator
        </h1>
        <p className="text-sm text-zinc-400 mt-2">
          Customize on the left — live preview updates in real time on the right
        </p>
      </header>

      <main className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side: Editor Form */}
        <section className="flex justify-center w-full">
          <EditorPanel
            profile={data.profile}
            onUpdateProfile={updateProfile}
            onReset={resetToDefault}
          />
        </section>

        {/* Right Side: Live Preview (Sreema's ProfileHeader Component) */}
        <section className="flex flex-col items-center justify-center p-8 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl shadow-2xl min-h-[440px] w-full">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
              Live Preview
            </span>
          </div>

          <ProfileHeader
            name={data.profile.name}
            handle={data.profile.handle}
            bio={data.profile.bio}
            avatarUrl={data.profile.avatarUrl}
          />
        </section>
      </main>
    </div>
  );
}