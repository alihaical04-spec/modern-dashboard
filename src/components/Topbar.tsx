import { Bell, Search, Menu } from "lucide-react";

interface TopbarProps {
  onMenuClick: () => void;
  title: string;
}

export default function Topbar({ onMenuClick, title }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/5 bg-[#0b0f19]/80 px-4 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-400 transition hover:bg-white/5 hover:text-white lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-lg font-semibold text-white">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="search"
            placeholder="Search..."
            className="w-64 rounded-lg border border-white/5 bg-white/5 py-2 pl-9 pr-4 text-sm text-white placeholder-gray-500 outline-none transition focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30"
          />
        </div>
        <button
          className="relative rounded-lg p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-sky-400" />
        </button>
      </div>
    </header>
  );
}
