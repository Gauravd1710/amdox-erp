"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Shield,
  Coins,
  Users,
  Truck,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { toast } from "sonner";

// Module configurations
const moduleConfig: Record<string, {
  name: string;
  color: string;
  textColor: string;
  borderHover: string;
  icon: LucideIcon;
}> = {
  admin: {
    name: "System Administration",
    color: "from-indigo-500 to-violet-600",
    textColor: "text-indigo-400",
    borderHover: "focus-within:border-indigo-500/50 focus-within:ring-indigo-500/20",
    icon: Shield,
  },
  finance: {
    name: "Financial Intelligence",
    color: "from-emerald-500 to-teal-600",
    textColor: "text-emerald-400",
    borderHover: "focus-within:border-emerald-500/50 focus-within:ring-emerald-500/20",
    icon: Coins,
  },
  hr: {
    name: "Human Resources",
    color: "from-rose-500 to-pink-600",
    textColor: "text-rose-400",
    borderHover: "focus-within:border-rose-500/50 focus-within:ring-rose-500/20",
    icon: Users,
  },
  "supply-chain": {
    name: "Supply Chain & Logistics",
    color: "from-sky-500 to-blue-600",
    textColor: "text-sky-400",
    borderHover: "focus-within:border-sky-500/50 focus-within:ring-sky-500/20",
    icon: Truck,
  }
};

export default function LoginPage({ params }: { params: Promise<{ module: string }> }) {
  const { module } = React.use(params);
  const router = useRouter();

  const config = moduleConfig[module];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    if (!config) {
      router.push("/");
    }
  }, [config, router]);

  // If the module configuration does not exist, redirect home
  if (!config) {
    return null;
  }

  const ModuleIcon = config.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all credentials");
      return;
    }

    setIsLoading(true);

    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Welcome back! Successfully logged into ${config.name}.`);
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="relative rounded-2xl border border-[#063232]/30 bg-white p-8 overflow-hidden transition-all duration-300 shadow-xl shadow-[#1c9a98]/10">      {/* Header */}
      <div className="text-center mb-8">
        <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${config.color} shadow-lg shadow-black/40 text-white mb-4`}>
          <ModuleIcon className="h-7 w-7" />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">          Sign in to Portal
        </h2>
        <p className={`mt-2 text-sm font-semibold uppercase tracking-wider ${config.textColor}`}>
          {config.name}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-600">Email Address</label>
          <div className={`flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 transition-all ${config.borderHover}`}>
            <Mail className="h-5 w-5 text-slate-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="bg-transparent border-0 outline-0 p-0 text-sm md:text-base text-slate-800 placeholder-slate-400 w-full" disabled={isLoading}
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-600">Password</label>            <a href="#" className={`text-xs font-semibold hover:underline ${config.textColor}`}>
              Forgot password?
            </a>
          </div>
          <div className={`flex items-center justify-between bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 transition-all ${config.borderHover}`}>
            <div className="flex items-center gap-3 flex-1">
              <Lock className="h-5 w-5 text-slate-500" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-transparent border-0 outline-0 p-0 text-sm md:text-base text-slate-800 placeholder-slate-400 w-full" disabled={isLoading}
                required
              />
            </div>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-500 hover:text-slate-300 transition-colors p-0.5"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center gap-2 bg-gradient-to-tr ${config.color} hover:brightness-110 active:scale-[0.99] text-white py-3.5 rounded-xl transition-all font-bold text-sm shadow-lg shadow-black/40 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed`}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Authenticating...</span>
            </>
          ) : (
            <>
              <span>Sign In to System</span>
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </form>

      {/* Switch to Signup */}
      <p className="text-center text-sm text-slate-400 mt-8">
                Don&apos;t have an account?{" "}
        <Link
          href={`/signup/${module}`}
          className={`font-semibold hover:underline ${config.textColor}`}
        >
          Register here
        </Link>
      </p>
    </div>
  );
}
