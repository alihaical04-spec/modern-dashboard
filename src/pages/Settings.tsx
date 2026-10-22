export default function Settings() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">
        <h3 className="text-base font-semibold text-white">Profile</h3>
        <p className="mt-1 text-sm text-gray-500">Manage your account details</p>
        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm text-gray-400">Display name</label>
            <input
              type="text"
              defaultValue="Rahat Ali"
              className="w-full rounded-lg border border-white/5 bg-white/5 px-3 py-2.5 text-sm text-white outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-gray-400">Email</label>
            <input
              type="email"
              defaultValue="alihaical04@gmail.com"
              className="w-full rounded-lg border border-white/5 bg-white/5 px-3 py-2.5 text-sm text-white outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30"
            />
          </div>
          <button className="rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400">
            Save changes
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">
        <h3 className="text-base font-semibold text-white">Preferences</h3>
        <p className="mt-1 text-sm text-gray-500">Customize your dashboard experience</p>
        <div className="mt-6 space-y-4">
          <label className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Email notifications</span>
            <input type="checkbox" defaultChecked className="h-4 w-4 rounded accent-sky-500" />
          </label>
          <label className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Weekly reports</span>
            <input type="checkbox" defaultChecked className="h-4 w-4 rounded accent-sky-500" />
          </label>
          <label className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Compact sidebar</span>
            <input type="checkbox" className="h-4 w-4 rounded accent-sky-500" />
          </label>
        </div>
      </div>
    </div>
  );
}
