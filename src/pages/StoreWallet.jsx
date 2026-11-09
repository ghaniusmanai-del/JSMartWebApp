import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronRight, 
  Wallet, 
  Clock, 
  ArrowUpRight, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  RefreshCw 
} from 'lucide-react';
import { walletTransactions } from '../data/dummyData';
import RequestPaymentModal from '../components/RequestPaymentModal';

export default function StoreWallet() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactions, setTransactions] = useState(walletTransactions);
  const [successToast, setSuccessToast] = useState(null);

  const handleWithdrawSuccess = ({ amount, method }) => {
    setSuccessToast(`Withdrawal of RS ${Number(amount).toLocaleString()} initiated successfully!`);
    setTimeout(() => setSuccessToast(null), 4000);
  };

  const handleTransferToBank = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {successToast && (
        <div className="fixed top-6 right-6 z-50 bg-[#22C55E] text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 text-sm font-semibold animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-white" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <span className="text-slate-300">|</span>
        <h1 className="text-2xl font-bold text-slate-800">Store Wallet</h1>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Available Balance */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Available Balance</span>
          <p className="text-2xl font-black text-emerald-600 mt-2">PKR 24,889,00</p>
        </div>

        {/* Pending Balance */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pending Balance</span>
          <p className="text-2xl font-black text-amber-500 mt-2">PKR 24,889</p>
        </div>

        {/* Total Withdrawn */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Withdrawn</span>
          <p className="text-2xl font-black text-sky-600 mt-2">PKR 24,889</p>
        </div>

        {/* Last Settlement */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Sattlement</span>
          <p className="text-2xl font-black text-rose-500 mt-2">19 May 2026</p>
        </div>
      </div>

      {/* Middle Row: Available Balance Hero & Wallet Information */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Available Balance Hero Box */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-5">
            {/* Wallet Icon */}
            <div className="w-16 h-14 bg-[#22C55E] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 shrink-0">
              <Wallet className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Available Balance</span>
              <p className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight mt-0.5">RS 128,986</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-semibold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>Withdrawn Balance</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleTransferToBank}
              className="w-full sm:w-auto px-6 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-semibold text-xs sm:text-sm transition-colors"
            >
              Transfer to Bank
            </button>
          </div>
        </div>

        {/* Right: Wallet Information */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4 flex flex-col justify-center">
          <h2 className="text-base font-bold text-slate-800">Wallet Information</h2>

          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <div className="w-5 h-5 rounded-full bg-emerald-50 text-[#22C55E] flex items-center justify-center shrink-0 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span>Instant Balance Update</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <div className="w-5 h-5 rounded-full bg-emerald-50 text-[#22C55E] flex items-center justify-center shrink-0 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span>Secure Wallet Storage</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <div className="w-5 h-5 rounded-full bg-emerald-50 text-[#22C55E] flex items-center justify-center shrink-0 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span>Settlement Within 24 Hours</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <div className="w-5 h-5 rounded-full bg-emerald-50 text-[#22C55E] flex items-center justify-center shrink-0 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span>Withdrawal Available Anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Recent Wallet Transactions */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-800">Recent wallet transactions</h2>
          <button
            onClick={() => {}}
            className="px-4 py-1.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            View all Transaction
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#EDF8F1] text-emerald-900 font-semibold border-b border-emerald-100">
                <th className="py-3 px-4">Transaction ID</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Description</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.map((tx, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-[11px] text-slate-600">{tx.id}</td>
                  <td className="py-3.5 px-4 text-slate-600">{tx.date}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded text-[11px] font-semibold">
                      {tx.type}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700">{tx.description}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-800">{tx.amount}</td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md font-semibold text-[11px]">
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <RequestPaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleWithdrawSuccess}
      />
    </div>
  );
}
