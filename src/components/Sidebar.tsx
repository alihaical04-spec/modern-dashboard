import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  ShoppingCart,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { navItems } from "../data/mockData";

const iconMap = {
  LayoutDashboard,
  BarChart3,
  ShoppingCart,
  Users,
  Settings,
};

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const location = useLocation();

  return (
    <aside
      className={`fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-white/5 bg-[#0d1117] transition-all duration-300 ${
        collapsed ? "w-[72px]" : "w-60"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b border-white/5 px-4">
        {!collapsed && (
          <span className="text-lg font-bold tracking-tight text-white">
            Pulse<span className="text-sky-400">.</span>
          </span>
        )}
        <button
          onClick={onToggle}
          className="rounded-lg p-1.5 text-gray-400 transition hover:bg-white/5 hover:text-white"
          aria-label="Toggle sidebar"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-sky-500/10 text-sky-400"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              } ${collapsed ? "justify-center" : ""}`}
              title={collapsed ? item.label : undefined}
            >
              <Icon size={20} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/5 p-3">
        <div
          className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sm font-semibold text-sky-400">
            R
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">Rahat Ali</p>
              <p className="truncate text-xs text-gray-500">Admin</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
