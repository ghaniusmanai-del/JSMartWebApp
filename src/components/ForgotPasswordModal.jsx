import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('syedmubilal1.22@gmail.com');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/40 backdrop-blur-sm animate-fadeIn">
      {/* Decorative Geometric SVG Background Effect */}
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative border border-slate-100 text-center">
        {/* Green round close button matching Figma */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#22C55E] hover:bg-[#16a34a] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {sent ? (
          <div className="py-8 space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-[#22C55E] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Reset Link Sent!</h3>
            <p className="text-xs text-slate-500">
              Please check your email inbox at <span className="font-semibold text-slate-700">{email}</span> for instructions.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 pt-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight mb-2">Forgot your password?</h2>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                There is nothing to worry about, we'll send you a message to help you reset your password.
              </p>
            </div>

            <div className="text-left">
              <label className="block text-xs font-medium text-slate-600 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30 focus:border-[#22C55E] text-slate-700"
                placeholder="syedmubilal1.22@gmail.com"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-semibold text-sm shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg active:scale-[0.99]"
            >
              Send Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
