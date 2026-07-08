"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, ShieldCheck, X, Eye, EyeOff } from "lucide-react";

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminLoginModal({ isOpen, onClose }: AdminLoginModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        onClose();
        router.push("/admin");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fadeIn" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl p-8 w-full max-w-md relative overflow-hidden animate-scaleIn" 
        onClick={e => e.stopPropagation()}
      >
        {/* Top colorful gradient bar */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600" />

        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-[11px] font-extrabold tracking-wider uppercase text-red-600 block mb-1">
              Admin Access
            </span>
            <h2 className="text-2xl font-extrabold text-[#1E293B] tracking-tight">
              Login to Dashboard
            </h2>
          </div>
          <button 
            onClick={onClose} 
            className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-400 hover:text-slate-600 transition-all shadow-sm"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Secure badge */}
        <div className="flex items-center gap-4 bg-slate-50/50 border border-slate-100 rounded-2xl p-4 mb-6">
          <div className="h-11 w-11 flex items-center justify-center rounded-full bg-red-600 text-white shrink-0 shadow-lg shadow-red-600/20">
            <ShieldCheck className="h-5.5 w-5.5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800">Secure Admin Sign-In</h3>
            <p className="text-xs font-semibold text-slate-400">MongoDB Atlas authenticated access</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-600 mb-2" htmlFor="admin-username">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-red-600" />
              </div>
              <input
                id="admin-username"
                type="text"
                placeholder="admin@edumentora.com"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl pl-12 pr-4 py-3.5 text-slate-800 placeholder-slate-400/80 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all text-sm font-medium"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-600 mb-2" htmlFor="admin-password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-red-600" />
              </div>
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl pl-12 pr-12 py-3.5 text-slate-800 placeholder-slate-400/80 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all text-sm font-medium"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 text-xs font-semibold rounded-xl p-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-600/25 transition-all disabled:opacity-60 text-sm mt-6 cursor-pointer"
          >
            {loading ? "Signing in..." : "Secure Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
