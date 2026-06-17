import Link from "next/link";
import { Shield, Coins, Users, Truck, Database } from "lucide-react";
import WaterBackground from "@/components/ui/WaterBackground";

const modules = [
  {
    id: "admin",
    title: "System Administration",
    description: "Manage system security, configure global parameters, manage user roles, and monitor application logs.",
    icon: Shield,
    color: "bg-indigo-600/90",
    textColor: "text-indigo-500",
  },
  {
    id: "finance",
    title: "Financial Intelligence",
    description: "Track revenue streams, manage budgets, automate invoices, process payments, and audit financial records.",
    icon: Coins,
    color: "bg-emerald-600/90",
    textColor: "text-emerald-600",
  },
  {
    id: "hr",
    title: "Human Resources",
    description: "Streamline hiring workflows, manage employee directory, track payroll, oversee performance, and coordinate benefits.",
    icon: Users,
    color: "bg-rose-600/90",
    textColor: "text-rose-500",
  },
  {
    id: "supply-chain",
    title: "Supply Chain & Logistics",
    description: "Track global inventory in real-time, monitor vendor relations, manage procurement cycles, and streamline logistics.",
    icon: Truck,
    color: "bg-sky-600/90",
    textColor: "text-sky-500",
  },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-x-hidden font-sans selection:bg-[#1c9a98]/30 selection:text-white">
       <WaterBackground />
      
      <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[55%] rounded-full bg-[#031414]/10 blur-[120px] pointer-events-none" />

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Centered Header */}
      <header className="relative z-10 w-full bg-gradient-to-r from-[#031414] to-[#0c6e6d] px-6 py-5 flex justify-center border-b border-[#1c9a98]/30 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg">
            <Database className="h-6 w-6 text-white" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-white">
              AMDOX
            </span>
            <span className="text-2xl font-light text-white/80">
              Technologies ERP
            </span>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Select Your Department Portal
          </h1>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Welcome to the secure entry point for the Amdox Technologies ERP platform. Choose your functional workspace below to sign in or register your account credentials.
          </p>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <Link
                key={mod.id}
                href={`/login/${mod.id}`}
                className="group relative flex flex-col rounded-3xl border border-[#063232]/30 bg-white shadow-md p-8 pt-6 overflow-visible transition-all duration-300 hover:-translate-y-1 hover:border-[#1c9a98]/40 hover:shadow-2xl hover:shadow-[#1c9a98]/10 cursor-pointer"
              >
                {/* Icon Container - Large rounded square */}
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${mod.color} shadow-lg shadow-black/20 text-white mb-5 transition-transform duration-300 group-hover:scale-105`}>                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className={`text-[20px] font-bold ${mod.textColor} mb-3 transition-colors duration-300`}>
                  {mod.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] text-slate-500 leading-relaxed">
                  {mod.description}
                </p>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-8 border-t border-slate-200 mt-12 flex flex-col sm:flex-row items-center justify-between text-s text-slate-400 gap-4">
        <p>© 2026 Amdox Technologies. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-800 transition-colors">Security Audit</a>
          <a href="#" className="hover:text-slate-800 transition-colors">Enterprise Support</a>
        </div>
      </footer>
    </div>
    
  );
}