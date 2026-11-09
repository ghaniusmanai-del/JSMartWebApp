import React, { useState } from 'react';
import { X, Building2, CheckCircle2, Wallet, AlertCircle } from 'lucide-react';

export default function RequestPaymentModal({ isOpen, onClose, onSuccess }) {
  const [amount, setAmount] = useState('12345');
  const [method, setMethod] = useState('bank'); // 'bank' | 'jazzcash' | 'easypaisa'
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      if (onSuccess) onSuccess({ amount, method, notes });
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-transform hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Request Payment</h2>
          <p className="text-sm text-slate-500">Withdraw your available wallet balance</p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Payment Request Submitted!</h3>
            <p className="text-sm text-slate-500 max-w-xs mx-auto">
              Your request for RS {Number(amount).toLocaleString()} will be processed within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Available Balance Box */}
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-14 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                <Wallet className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Available Balance</span>
                <p className="text-2xl font-black text-emerald-600 tracking-tight">RS 128,986.000</p>
              </div>
            </div>

            {/* Enter Amount */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Enter Amount<span className="text-rose-500">*</span>
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="500"
                max="128986"
                required
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                placeholder="12345"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">Minimum Withdrawal Amount is Rs 500</span>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Payment Method<span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Bank Transfer */}
                <label 
                  onClick={() => setMethod('bank')}
                  className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                    method === 'bank' 
                      ? 'border-emerald-500 bg-emerald-50/40 text-emerald-900 ring-1 ring-emerald-500' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input type="radio" name="payment_method" checked={method === 'bank'} onChange={() => setMethod('bank')} className="accent-emerald-600" />
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-sky-600" />
                    <span className="text-xs font-medium">Bank Transfer</span>
                  </div>
                </label>

                {/* Jazz Cash */}
                <label 
                  onClick={() => setMethod('jazzcash')}
                  className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                    method === 'jazzcash' 
                      ? 'border-emerald-500 bg-emerald-50/40 text-emerald-900 ring-1 ring-emerald-500' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input type="radio" name="payment_method" checked={method === 'jazzcash'} onChange={() => setMethod('jazzcash')} className="accent-emerald-600" />
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-red-600 text-yellow-300 rounded-full font-black text-[9px] flex items-center justify-center">JC</span>
                    <span className="text-xs font-medium">Jazz Cash</span>
                  </div>
                </label>

                {/* Easy Paisa */}
                <label 
                  onClick={() => setMethod('easypaisa')}
                  className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                    method === 'easypaisa' 
                      ? 'border-emerald-500 bg-emerald-50/40 text-emerald-900 ring-1 ring-emerald-500' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input type="radio" name="payment_method" checked={method === 'easypaisa'} onChange={() => setMethod('easypaisa')} className="accent-emerald-600" />
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-emerald-500 text-white rounded-full font-black text-[9px] flex items-center justify-center">EP</span>
                    <span className="text-xs font-medium">Easy paisa</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Notes (Optional)</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                placeholder="Add any additional payment instructions..."
              />
            </div>

            {/* Callout Notice */}
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <div className="text-xs text-slate-600">
                <span className="font-semibold text-emerald-700">Estimated Processing time:</span> Payment will be Proceeded with 24 Hours after approval.
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 border border-rose-300 text-rose-600 hover:bg-rose-50 rounded-xl font-medium text-sm transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-4 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-semibold text-sm shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg"
              >
                Request Payment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
