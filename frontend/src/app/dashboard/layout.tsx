import React from "react";
import { Database, Shield, Coins, Users, Truck, LayoutDashboard, Settings, LogOut } from "lucide-react";
import Link from "next/link";

const sidebarLinks = {
  admin: [
    { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { label: "User Management", href: "/dashboard/users", icon: Users },
    { label: "System Settings", href: "/dashboard/settings", icon: Settings },
  ],
  finance: [
    { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { label: "Revenue", href: "/dashboard/revenue", icon: Coins },
    { label: "Invoices", href: "/dashboard/invoices", icon: Coins },
  ],
  hr: [
    { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { label: "Employees", href: "/dashboard/employees", icon: Users },
    { label: "Payroll", href: "/dashboard/payroll", icon: Coins },
  ],
  "supply-chain": [
    { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { label: "Inventory", href: "/dashboard/inventory", icon: Truck },
    { label: "Vendors", href: "/dashboard/vendors", icon: Truck },
  ],
};

const moduleColors: Record<string, string> = {
  admin: "from-indigo-500 to-violet-600",
  finance: "from-emerald-500 to-teal-600",
  hr: "from-rose-500 to-pink-600",
  "supply-chain": "from-sky-500 to-blue-600",
};

const moduleIcons: Record<string, React.ElementType> = {
  admin: Shield,
  finance: Coins,
  hr: Users,
  "supply-chain": Truck,
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // placeholder — will be replaced with useAuthStore() once backend is ready
  const activeModule = "admin";
  const links = sidebarLinks[activeModule as keyof typeof sidebarLinks] ?? sidebarLinks.admin;
  const color = moduleColors[activeModule] ?? moduleColors.admin;
  const ModuleIcon = moduleIcons[activeModule] ?? Shield;

  return (
    <div className="flex min-h-screen bg-white text-slate-800 font-sans">

      {/* Sidebar */}
      <aside className="w-64 shrink-0 flex flex-col border-r border-slate-200 bg-white shadow-sm">

        {/* Logo */}
        <div className="px-5 py-5 border-b border-slate-200">
          <Link href="/" className="flex items-center gap-2.5">
            <div className={`h-9 w-9 rounded-xl bg-gradient-to-tr ${color} flex items-center justify-center shadow-md`}>
              <Database className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-extrabold tracking-tight text-slate-900">AMDOX</p>
              <p className="text-[10px] font-semibold text-[#1c9a98] uppercase tracking-wider -mt-0.5">
                Technologies ERP
              </p>
            </div>
          </Link>
        </div>

        {/* Module Badge */}
        <div className="px-5 py-4 border-b border-slate-100">
          <div className={`flex items-center gap-2.5 bg-gradient-to-tr ${color} rounded-xl px-3 py-2.5 shadow-sm`}>
            <ModuleIcon className="h-5 w-5 text-white shrink-0" />
            <span className="text-xs font-bold text-white truncate">
              {activeModule.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all group"
              >
                <Icon className="h-4 w-4 text-slate-400 group-hover:text-[#1c9a98] transition-colors" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-slate-200">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all group"
          >
            <LogOut className="h-4 w-4 text-slate-400 group-hover:text-red-400 transition-colors" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}
