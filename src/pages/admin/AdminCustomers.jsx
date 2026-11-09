import React, { useState } from 'react';
import { 
  Users, 
  ShoppingBag, 
  TrendingUp, 
  Repeat, 
  Search, 
  Mail, 
  Phone, 
  Award, 
  Download, 
  Calendar,
  Eye,
  Filter
} from 'lucide-react';
import { superAdminCustomersData } from '../../data/superAdminData';

export default function AdminCustomers() {
  const [customers, setCustomers] = useState(superAdminCustomersData.topCustomers);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredCustomers = customers.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.phone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || c.status.includes(statusFilter);
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Customer Intelligence
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Buyer cohort analytics, average transaction value, repeat retention, and top high-value shoppers.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Exporting customer data...')}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 shadow-xs transition-colors"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Export Audience CSV</span>
          </button>
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {superAdminCustomersData.stats.map((stat, idx) => {
          const icons = [Users, ShoppingBag, TrendingUp, Repeat];
          const Icon = icons[idx];
          return (
            <div key={stat.title} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-400 uppercase">{stat.title}</span>
                <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                {stat.change} ({stat.period})
              </p>
            </div>
          );
        })}
      </div>

      {/* Middle Row: Trend & Category Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Orders Trend (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Customer Purchase Volume Trend
              </h2>
              <p className="text-xs text-slate-400">
                Monthly order frequency and customer acquisition pace
              </p>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              +28% YOY Growth
            </span>
          </div>

          <div className="h-56 flex items-end justify-between gap-3 pt-6 px-2">
            {superAdminCustomersData.trend.map((t) => {
              const maxOrders = 18000;
              const heightPercent = (t.orders / maxOrders) * 100;
              return (
                <div key={t.month} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="text-[10px] text-slate-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {t.orders.toLocaleString()}
                  </div>
                  <div 
                    className="w-full max-w-[48px] bg-emerald-500 hover:bg-emerald-600 rounded-t-xl transition-all duration-300 shadow-xs"
                    style={{ height: `${heightPercent}%` }}
                  />
                  <span className="text-xs font-semibold text-slate-600">{t.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Categories Preference Donut (1 col) */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="font-bold text-slate-900 text-base">Popular Order Categories</h3>
            <p className="text-xs text-slate-400">Category breakdown by customer transactions</p>
          </div>

          <div className="flex items-center justify-center py-2">
            <div 
              className="w-32 h-32 rounded-full relative flex items-center justify-center shadow-inner"
              style={{
                background: 'conic-gradient(#22C55E 0% 45%, #3B82F6 45% 70%, #F59E0B 70% 85%, #EC4899 85% 100%)'
              }}
            >
              <div className="w-18 h-18 bg-white rounded-full flex flex-col items-center justify-center shadow-xs">
                <span className="text-xs font-bold text-slate-800">14.2K</span>
                <span className="text-[9px] text-slate-400 uppercase">Shoppers</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-100 text-xs">
            {superAdminCustomersData.categoryDonut.map((c) => (
              <div key={c.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                  <span className="text-slate-600 font-medium">{c.label}</span>
                </div>
                <span className="font-bold text-slate-900">{c.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Customers Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="p-5 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Top Customers by Lifetime Purchase Value
            </h2>
            <p className="text-xs text-slate-400">High-volume and recurring buyers across Karachi</p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search customers..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-6">Customer Name & ID</th>
                <th className="py-4 px-6">Email Address</th>
                <th className="py-4 px-6">Phone Number</th>
                <th className="py-4 px-6">Total Orders</th>
                <th className="py-4 px-6">Lifetime Spend</th>
                <th className="py-4 px-6">Last Order</th>
                <th className="py-4 px-6">Membership</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredCustomers.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-bold text-slate-900">{c.name}</p>
                    <span className="text-[10px] text-slate-400 font-mono">{c.id}</span>
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {c.email}
                  </td>
                  <td className="py-4 px-6 text-slate-700 font-medium">
                    {c.phone}
                  </td>
                  <td className="py-4 px-6 text-slate-900 font-bold">
                    {c.totalOrders} Orders
                  </td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">
                    {c.totalSpend}
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    {c.lastOrder}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      c.status.includes('VIP')
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => alert(`Showing order history for customer ${c.name}`)}
                      className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      title="View Customer Profile"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
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
