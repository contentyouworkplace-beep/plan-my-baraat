'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Mail, Lock, Loader2, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { crmSupabase } from '../lib/supabase-crm';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    setLoading(true);
    setError(null);

    // 1. Try demo login fallback first (offline/placeholder friendly)
    const normalizedEmail = email.trim().toLowerCase();
    if ((normalizedEmail === 'rahul@planmybaraat.com' || normalizedEmail === 'tejabhai@planmybaraat.com') && password.trim() === 'Plan@5678') {
      localStorage.setItem('crm_session', 'true');
      localStorage.setItem('crm_user', JSON.stringify({ 
        email: normalizedEmail, 
        name: normalizedEmail === 'rahul@planmybaraat.com' ? 'Rahul Medhe' : 'Tejabhai Patel' 
      }));
      router.push('/crm');
      setLoading(false);
      return;
    }

    try {
      // 2. Try Supabase Auth sign in
      const { data, error: authError } = await crmSupabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (authError) {
        throw new Error(authError.message);
      }

      if (data?.session) {
        localStorage.setItem('crm_session', 'true');
        localStorage.setItem('crm_user', JSON.stringify({ email: data.user.email, name: 'Rahul Medhe' }));
        router.push('/crm');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Invalid login credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl border border-gray-200 shadow-xl p-6 space-y-6">
        
        {/* Logo */}
        <div className="flex flex-col items-center text-center space-y-2">
          <Image
            src="/logo.jpg"
            alt="PlanMyBaraat Logo"
            width={180}
            height={50}
            className="object-contain h-12 w-auto"
            priority
          />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-red-500">
            Basic Management CRM
          </span>
          <p className="text-xs text-gray-400 font-medium">Log in to manage vendors and customer leads</p>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-100 rounded-xl flex items-start gap-2.5 text-xs text-red-600 font-semibold leading-relaxed">
            <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="rahul@planmybaraat.com"
                required
                className="w-full pl-9 pr-4 py-2.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400 bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                required
                className="w-full pl-9 pr-10 py-2.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400 bg-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-red-600 text-white rounded-xl text-xs font-bold hover:bg-red-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-1.5"
          >
            {loading && <Loader2 size={13} className="animate-spin" />}
            Log In
          </button>
        </form>

      </div>
    </div>
  );
}
