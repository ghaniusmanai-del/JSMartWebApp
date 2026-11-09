import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronRight, 
  DollarSign, 
  ShoppingBag, 
  Percent, 
  CreditCard, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Wallet, 
  Receipt, 
  Building 
} from 'lucide-react';
import { financeSettlementHistory } from '../data/dummyData';
import RequestPaymentModal from '../components/RequestPaymentModal';

export default function Finance() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [settlements, setSettlements] = useState(financeSettlementHistory);
  const [timeFilter, setTimeFilter] = useState('This Month');
  const [successToast, setSuccessToast] = useState(null);

  const handlePaymentSuccess = ({ amount, method }) => {
    setSuccessToast(`Payment request of RS ${Number(amount).toLocaleString()} submitted via ${method}!`);
    setTimeout(() => setSuccessToast(null), 4000);
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <span className="text-slate-300">|</span>
            <h1 className="text-2xl font-bold text-slate-800">Finance</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">Track your Earnings, wallet balance, settlements and Payment History.</p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-medium text-sm shadow-sm transition-all hover:shadow"
        >
          <span>Request Payment</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Total Earnings */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Earnings</span>
          <p className="text-2xl font-black text-emerald-600 mt-2">PKR 24,889.00</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <span>This Month</span>
            <span className="font-semibold text-emerald-500 flex items-center">
              12.5% <TrendingUp className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Orders</span>
          <p className="text-2xl font-black text-amber-500 mt-2">345</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <span>This Month</span>
            <span className="font-semibold text-amber-500 flex items-center">
              5.7% <TrendingUp className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </div>
        </div>

        {/* Platform Commission */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Platform Commission</span>
          <p className="text-2xl font-black text-sky-600 mt-2">1,345</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <span>This Month</span>
            <span className="font-semibold text-sky-500 flex items-center">
              7.3% <TrendingUp className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </div>
        </div>

        {/* Net payouts */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Net payouts</span>
          <p className="text-2xl font-black text-rose-500 mt-2">RS. 115324</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <span>This Month</span>
            <span className="font-semibold text-rose-500 flex items-center">
              9.1% <TrendingUp className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Middle: Earnings Overview Breakdown */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-800">Earnings Overview</h2>
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
        </div>

        {/* Math Calculation Cards */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-slate-50/70 rounded-2xl border border-slate-100">
          {/* Order Amount */}
          <div className="flex-1 w-full bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Receipt className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Order Amount</span>
              <span className="text-base font-black text-emerald-600">RS 128,986</span>
            </div>
          </div>

          <span className="text-xl font-bold text-slate-400 shrink-0 hidden md:block">-</span>

          {/* Platform Commission */}
          <div className="flex-1 w-full bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Platform Commission</span>
              <span className="text-base font-black text-rose-500">RS 128,986</span>
            </div>
          </div>

          <span className="text-xl font-bold text-slate-400 shrink-0 hidden md:block">=</span>

          {/* Your Earnings */}
          <div className="flex-1 w-full bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Your Earnings</span>
              <span className="text-base font-black text-emerald-700">RS 128,986</span>
            </div>
          </div>
        </div>

        {/* Settlement Guarantee Notice Banner */}
        <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-emerald-800">
                We Settle Your Payments within 24 Hours of order Delivery Confirmation.
              </p>
              <p className="text-[11px] text-slate-600 mt-0.5">
                You will Receive the Payment in your store wallet.
              </p>
            </div>
          </div>

          {/* Wallet graphic visual */}
          <div className="w-12 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-emerald-500/20 shrink-0 self-end sm:self-auto">
            <Wallet className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Bottom Row: Payment Request & Settlement History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Payment Request Checklist Card */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
          <div>
            <h2 className="text-base font-bold text-slate-800">Payment Request</h2>
            <p className="text-xs text-slate-400 mt-1">
              If your Payment Received within 24 hours you can raise a request.
            </p>
          </div>

          {/* Checkmarks */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span>Order Must be Delivered</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span>24 Hours has Passed</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span>Settlement Not Received</span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full mt-4 py-3 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-semibold text-xs shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg"
          >
            Raise Payment Request
          </button>
        </div>

        {/* Right: Settlement History Table */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-slate-800">Settlement History</h2>

          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#EDF8F1] text-emerald-900 font-semibold border-b border-emerald-100">
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Order Date</th>
                  <th className="py-3 px-4">Settlement Date</th>
                  <th className="py-3 px-4">Order Amount</th>
                  <th className="py-3 px-4">Commission</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {settlements.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-mono text-[11px] text-slate-600">{row.id}</td>
                    <td className="py-3.5 px-4 text-slate-600">{row.orderDate}</td>
                    <td className="py-3.5 px-4 text-slate-600">{row.settlementDate}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">{row.orderAmount}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-600">{row.commission}</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md font-semibold text-[11px]">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      <RequestPaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handlePaymentSuccess}
      />
    </div>
  );
}
