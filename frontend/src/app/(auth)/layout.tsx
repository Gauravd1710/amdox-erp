import Link from "next/link";
import { ArrowLeft, Database } from "lucide-react";
import WaterBackground from "@/components/ui/WaterBackground";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-white text-slate-800 flex flex-col justify-between overflow-x-hidden font-sans selection:bg-[#1c9a98]/30 selection:text-white"> 
      <WaterBackground />
      <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[55%] rounded-full bg-[#031414]/8 blur-[120px] pointer-events-none" />

      {/* Header with Back to Home button */}
      <header className="relative z-10 w-full bg-gradient-to-r from-[#031414] to-[#0c6e6d] px-6 py-5 flex items-center justify-between shadow-lg">        <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-xl border border-white/20 transition-all group"        >
        <ArrowLeft className="h-4 w-4 text-white/60 group-hover:text-white group-hover:-translate-x-0.5 transition-transform" />        <span>Back to Portal Select</span>
      </Link>

        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shadow-lg">            <Database className="h-4.5 w-4.5 text-white" />
          </div>
          <span className="text-sm font-bold tracking-tight text-white hidden sm:inline-block">            AMDOX Technologies ERP
          </span>
        </Link>
      </header>

      {/* Centered Form Area */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-6 text-center text-[10px] text-slate-400 border-t border-slate-200">
        <p>© 2026 Amdox Technologies. Secure Portal Gateway. Unauthorized access is strictly prohibited.</p>
      </footer>
    </div>
  );
}
