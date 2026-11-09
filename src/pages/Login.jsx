import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck, Store, Check, Sparkles } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import ForgotPasswordModal from '../components/ForgotPasswordModal';
import jsMartLogo from '../assets/JSMartLogoSimple.png';

export default function Login() {
  const navigate = useNavigate();

  // Role: 'vendor' | 'admin'
  const [selectedRole, setSelectedRole] = useState('vendor');
  const [email, setEmail] = useState('vendor@grocerymart.com');
  const [password, setPassword] = useState('Password123#');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);

  // Switch role and prefill credentials
  const selectRole = (role) => {
    setSelectedRole(role);
    if (role === 'admin') {
      setEmail('admin@grocerymart.com');
      setPassword('Admin123#');
    } else {
      setEmail('vendor@grocerymart.com');
      setPassword('Password123#');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('jsmart_auth', 'true');

    // Route dynamically based on role or email
    const isAdmin = selectedRole === 'admin' || email.toLowerCase().includes('admin');
    if (isAdmin) {
      localStorage.setItem('jsmart_role', 'admin');
      navigate('/admin');
    } else {
      localStorage.setItem('jsmart_role', 'vendor');
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#F8FAFC]">
      {/* Left Column: Form */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-24 py-10 max-w-2xl mx-auto w-full">
        <div className="lg:hidden mb-6 flex justify-center">
          <BrandLogo />
        </div>

        <div className="w-full">
          {/* Header Title */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Sign In to JS Mart
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select your portal role below or enter your credentials to continue.
            </p>
          </div>

          {/* Quick Role Switcher Tabs */}
          <div className="bg-slate-100 p-1 rounded-2xl flex items-center mb-6">
            <button
              type="button"
              onClick={() => selectRole('vendor')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                selectedRole === 'vendor'
                  ? 'bg-white text-emerald-700 shadow-sm shadow-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Store className="w-4 h-4 text-emerald-600" />
              <span>Normal Portal (Vendor)</span>
            </button>

            <button
              type="button"
              onClick={() => selectRole('admin')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                selectedRole === 'admin'
                  ? 'bg-white text-slate-900 shadow-sm shadow-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Super Admin Portal</span>
            </button>
          </div>

          {/* Demo Credentials Helper Box */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-3.5 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Demo Credentials (Click to Auto-fill)
              </span>
              <span className="text-[10px] text-emerald-700 font-medium">1-Click Sign In</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {/* Normal Portal Card */}
              <button
                type="button"
                onClick={() => selectRole('vendor')}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  selectedRole === 'vendor'
                    ? 'bg-white border-emerald-500 shadow-xs ring-1 ring-emerald-500/30'
                    : 'bg-white/60 border-emerald-100 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1">
                    <Store className="w-3 h-3 text-emerald-600" />
                    Normal Portal
                  </span>
                  {selectedRole === 'vendor' && <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />}
                </div>
                <p className="text-[11px] text-slate-600 mt-1 font-mono">vendor@grocerymart.com</p>
                <p className="text-[11px] text-slate-400 font-mono">Password123#</p>
              </button>

              {/* Super Admin Card */}
              <button
                type="button"
                onClick={() => selectRole('admin')}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  selectedRole === 'admin'
                    ? 'bg-white border-emerald-500 shadow-xs ring-1 ring-emerald-500/30'
                    : 'bg-white/60 border-emerald-100 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Super Admin
                  </span>
                  {selectedRole === 'admin' && <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />}
                </div>
                <p className="text-[11px] text-slate-600 mt-1 font-mono">admin@grocerymart.com</p>
                <p className="text-[11px] text-slate-400 font-mono">Admin123#</p>
              </button>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30 focus:border-[#22C55E] text-slate-800 transition-all shadow-xs"
                placeholder={selectedRole === 'admin' ? 'admin@grocerymart.com' : 'vendor@grocerymart.com'}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm pr-12 focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30 focus:border-[#22C55E] text-slate-800 transition-all shadow-xs"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-[#22C55E] focus:ring-[#22C55E] accent-[#22C55E]"
                />
                <span className="text-xs font-medium text-slate-700">Remember Me</span>
              </label>

              <button
                type="button"
                onClick={() => setForgotModalOpen(true)}
                className="text-xs font-medium text-[#2563EB] hover:text-[#1d4ed8] hover:underline"
              >
                Forget Password?
              </button>
            </div>

            {/* Login Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-bold text-sm shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>Log In as {selectedRole === 'admin' ? 'Super Admin' : 'Vendor'}</span>
              </button>
            </div>

            {/* Social Logins */}
            <div className="space-y-2.5 pt-3">
              <button
                type="button"
                onClick={() => {
                  localStorage.setItem('jsmart_auth', 'true');
                  if (selectedRole === 'admin') {
                    localStorage.setItem('jsmart_role', 'admin');
                    navigate('/admin');
                  } else {
                    localStorage.setItem('jsmart_role', 'vendor');
                    navigate('/');
                  }
                }}
                className="w-full py-2.5 px-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-medium text-xs flex items-center justify-center gap-3 transition-colors shadow-xs"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column: Graphic Showcase */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-emerald-50/50 via-slate-50 to-emerald-100/30 border-l border-slate-100 relative flex-col items-center justify-between p-12 overflow-hidden">
        {/* Top Logo */}
        <div className="pt-2">
          <BrandLogo />
        </div>

        {/* Center: Device Mockup */}
        <div className="w-full max-w-xl relative my-auto">
          {/* Laptop frame */}
          <div className="relative mx-auto bg-slate-900 rounded-[20px] p-3 shadow-2xl border-4 border-slate-700 ring-1 ring-slate-900/10">
            {/* Screen bezel */}
            <div className="rounded-[12px] overflow-hidden bg-white border border-slate-200 aspect-[16/10] relative">
              <div className="h-4 bg-slate-100 border-b border-slate-200 flex items-center px-2 gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              {/* Mini dashboard preview representation */}
              <div className="p-3 bg-[#F4F6F9] h-[calc(100%-16px)] flex gap-2">
                <div className="w-12 bg-white rounded-lg border border-slate-100 p-1 space-y-1">
                  <img src={jsMartLogo} alt="Logo" className="w-4 h-4 object-contain mx-auto mb-1" />
                  <div className="h-2 w-full bg-emerald-500 rounded"></div>
                  <div className="h-2 w-full bg-slate-200 rounded"></div>
                  <div className="h-2 w-full bg-slate-200 rounded"></div>
                  <div className="h-2 w-full bg-slate-200 rounded"></div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="grid grid-cols-4 gap-1.5">
                    <div className="bg-white p-1.5 rounded-lg border border-slate-100">
                      <div className="h-1.5 w-8 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2.5 w-12 bg-emerald-600 rounded"></div>
                    </div>
                    <div className="bg-white p-1.5 rounded-lg border border-slate-100">
                      <div className="h-1.5 w-8 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2.5 w-10 bg-amber-500 rounded"></div>
                    </div>
                    <div className="bg-white p-1.5 rounded-lg border border-slate-100">
                      <div className="h-1.5 w-8 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2.5 w-10 bg-rose-500 rounded"></div>
                    </div>
                    <div className="bg-white p-1.5 rounded-lg border border-slate-100">
                      <div className="h-1.5 w-8 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2.5 w-10 bg-sky-500 rounded"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2 h-24 bg-white rounded-lg border border-slate-100 p-2 flex items-end justify-between">
                      <div className="w-3 bg-emerald-200 h-10 rounded-t"></div>
                      <div className="w-3 bg-emerald-300 h-14 rounded-t"></div>
                      <div className="w-3 bg-emerald-200 h-8 rounded-t"></div>
                      <div className="w-3 bg-emerald-400 h-16 rounded-t"></div>
                      <div className="w-3 bg-emerald-500 h-20 rounded-t"></div>
                      <div className="w-3 bg-emerald-300 h-12 rounded-t"></div>
                    </div>
                    <div className="h-24 bg-white rounded-lg border border-slate-100 p-2 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full border-4 border-emerald-500 border-t-amber-400 border-r-rose-400 flex items-center justify-center text-[8px] font-bold">
                        1200
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Laptop base */}
            <div className="h-3 w-32 bg-slate-600 mx-auto rounded-b-md"></div>
          </div>
        </div>

        {/* Bottom Corner Super Admin & Vendor Status Pill */}
        <div className="flex items-center gap-4 self-start bg-white/90 backdrop-blur-sm p-3.5 rounded-2xl border border-emerald-100 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">Multi-Tenant Platform</span>
            <p className="text-xs font-bold text-slate-800">Super Admin &amp; Vendor Portals</p>
            <p className="text-[10px] text-slate-400">Unified grocery commerce architecture</p>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={forgotModalOpen}
        onClose={() => setForgotModalOpen(false)}
      />
    </div>
  );
}
