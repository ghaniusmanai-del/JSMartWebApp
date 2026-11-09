import React, { useState } from 'react';
import { 
  BarChart2, 
  DollarSign, 
  ArrowUpRight, 
  Download, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Search, 
  CreditCard, 
  Store, 
  Send
} from 'lucide-react';
import { superAdminFinanceData } from '../../data/superAdminData';

export default function AdminFinance() {
  const [payouts, setPayouts] = useState(superAdminFinanceData.storePayouts);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredPayouts = payouts.filter(p => {
    const matchesSearch = p.storeName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDisburse = (storeName) => {
    setPayouts(payouts.map(p => {
      if (p.storeName === storeName) {
        return { ...p, status: 'Paid' };
      }
      return p;
    }));
    alert(`Payout transfer initiated for ${storeName} via 1Link RTGS!`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Earnings & Multi-Store Finance
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Platform take-rates, commission ledger, merchant disbursements, and rider revenue share.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Generating platform settlement reconciliation summary...')}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 shadow-xs transition-colors"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Download Financial Ledger</span>
          </button>
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {superAdminFinanceData.stats.map((stat, idx) => {
          return (
            <div key={stat.title} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-400 uppercase">{stat.title}</span>
                <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
                  <BarChart2 className="w-4 h-4" />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                {stat.change} • {stat.period}
              </p>
            </div>
          );
        })}
      </div>

      {/* Middle Row: Revenue By Source Donut & Payout Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue By Source Donut (1 Col) */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="font-bold text-slate-900 text-base">Revenue by Source</h3>
            <p className="text-xs text-slate-400">Net platform income composition</p>
          </div>

          <div className="flex items-center justify-center py-2">
            <div 
              className="w-32 h-32 rounded-full relative flex items-center justify-center shadow-inner"
              style={{
                background: 'conic-gradient(#22C55E 0% 68%, #3B82F6 68% 86%, #F59E0B 86% 96%, #8B5CF6 96% 100%)'
              }}
            >
              <div className="w-18 h-18 bg-white rounded-full flex flex-col items-center justify-center shadow-xs">
                <span className="text-xs font-bold text-slate-800">15%</span>
                <span className="text-[9px] text-slate-400 uppercase">Margin</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-100 text-xs">
            {superAdminFinanceData.revenueBySource.map((r) => (
              <div key={r.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: r.color }} />
                  <span className="text-slate-600 font-medium">{r.label}</span>
                </div>
                <span className="font-bold text-slate-900">{r.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Payout Schedule & Next Disbursement (2 Cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Automated Payout Cycle</h3>
                <p className="text-xs text-slate-400">Weekly vendor direct deposits via State Bank of Pakistan Raast / 1Link</p>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200">
                Cycle: Weekly on Thursdays
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-xs text-slate-400 block mb-1">Next Settlement Run</span>
                <p className="text-lg font-bold text-slate-900">28 May 2026</p>
                <span className="text-[11px] text-slate-500">In 3 Days</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-xs text-slate-400 block mb-1">Pending Amount</span>
                <p className="text-lg font-bold text-amber-600">RS 4,056,000</p>
                <span className="text-[11px] text-slate-500">24 Merchant Accounts</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-xs text-slate-400 block mb-1">Disbursed This Month</span>
                <p className="text-lg font-bold text-emerald-600">RS 11,880,000</p>
                <span className="text-[11px] text-slate-500">100% Success Rate</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-emerald-600" />
              <div>
                <p className="text-xs font-bold text-emerald-950">Bank Master Settlement Account</p>
                <p className="text-[11px] text-emerald-700">Meezan Bank Ltd • IBAN: PK36MEZN00012489012345</p>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-white/80 px-2.5 py-1 rounded-lg border border-emerald-200">
              Active &amp; Linked
            </span>
          </div>
        </div>
      </div>

      {/* Store Settlements Breakdown Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="p-5 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Store Payouts & Settlement Breakdown
            </h2>
            <p className="text-xs text-slate-400">Itemized commission splits and merchant net remittance</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative w-full sm:max-w-xs">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search store name..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30"
              />
            </div>

            <div className="flex items-center gap-1">
              {['All', 'Paid', 'Processing', 'Due'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                    statusFilter === status
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-6">Store Name</th>
                <th className="py-4 px-6">Gross GMV</th>
                <th className="py-4 px-6">Platform Fee (15%)</th>
                <th className="py-4 px-6">Rider Logistics (5%)</th>
                <th className="py-4 px-6">Net Store Remittance</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Settlement Date</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredPayouts.map((p) => (
                <tr key={p.storeName} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                    <Store className="w-4 h-4 text-slate-400" />
                    <span>{p.storeName}</span>
                  </td>
                  <td className="py-4 px-6 text-slate-900 font-bold">
                    {p.gmv}
                  </td>
                  <td className="py-4 px-6 text-amber-600 font-semibold">
                    {p.commission}
                  </td>
                  <td className="py-4 px-6 text-sky-600 font-semibold">
                    {p.riderFee}
                  </td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">
                    {p.netPayout}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      p.status === 'Paid'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : p.status === 'Processing'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    {p.date}
                  </td>
                  <td className="py-4 px-6 text-right">
                    {p.status !== 'Paid' ? (
                      <button
                        onClick={() => handleDisburse(p.storeName)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
                      >
                        <Send className="w-3 h-3" />
                        <span>Disburse</span>
                      </button>
                    ) : (
                      <span className="text-xs text-slate-400 font-semibold">Completed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
