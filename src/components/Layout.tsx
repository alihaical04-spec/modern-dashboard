import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const titles: Record<string, string> = {
  "/": "Dashboard",
  "/analytics": "Analytics",
  "/orders": "Orders",
  "/customers": "Customers",
  "/settings": "Settings",
};

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const title = titles[location.pathname] ?? "Dashboard";

  return (
    <div className="min-h-screen bg-[#0b0f19]">
      <div className="hidden lg:block">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 h-full w-60">
            <Sidebar collapsed={false} onToggle={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      <div
        className={`transition-all duration-300 ${
          collapsed ? "lg:pl-[72px]" : "lg:pl-60"
        }`}
      >
        <Topbar onMenuClick={() => setMobileOpen(true)} title={title} />
        <main className="p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
