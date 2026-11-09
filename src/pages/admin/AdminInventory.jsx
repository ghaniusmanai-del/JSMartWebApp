import React, { useState } from 'react';
import { 
  Layers, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Search, 
  Download, 
  Bell, 
  Phone, 
  Store, 
  TrendingUp, 
  Send
} from 'lucide-react';
import { superAdminInventoryData } from '../../data/superAdminData';

export default function AdminInventory() {
  const [alerts, setAlerts] = useState(superAdminInventoryData.alerts);
  const [searchTerm, setSearchTerm] = useState('');
  const [notifiedSkus, setNotifiedSkus] = useState({});

  const handleNotifyStore = (sku, store) => {
    setNotifiedSkus(prev => ({ ...prev, [sku]: true }));
    alert(`Low stock replenishment request dispatched to ${store}!`);
  };

  const filteredAlerts = alerts.filter(a => 
    a.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.store.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Inventory & Stock Health
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Global warehouse monitoring, cross-store SKU balance, and automated reorder alerts.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Exporting platform inventory audit logs...')}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 shadow-xs transition-colors"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Export Stock Audit</span>
          </button>
        </div>
      </div>

      {/* 4 Primary Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {superAdminInventoryData.stats.map((stat, idx) => {
          const icons = [Layers, CheckCircle, AlertTriangle, XCircle];
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
              <p className={`text-[11px] font-semibold mt-1 ${stat.isPositive ? 'text-emerald-600' : 'text-amber-600'}`}>
                {stat.change} ({stat.period})
              </p>
            </div>
          );
        })}
      </div>

      {/* Charts Row: Stock Trend & Status Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Multi-line Stock Trend (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                SKU Turnover & Stock Trend
              </h2>
              <p className="text-xs text-slate-400">Inventory balance progression over the last 5 months</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-slate-600">In Stock</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-slate-600">Low Stock</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="text-slate-600">Out of Stock</span>
              </div>
            </div>
          </div>

          {/* Trend Bar representation */}
          <div className="h-56 flex items-end justify-between gap-4 pt-4 px-2">
            {superAdminInventoryData.trend.map((t) => (
              <div key={t.label} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full max-w-[50px] flex flex-col gap-1 items-center justify-end h-44">
                  <div 
                    className="w-full bg-rose-500 rounded-t-sm"
                    style={{ height: `${(t.outStock / 15000) * 100}%` }}
                    title={`Out of stock: ${t.outStock}`}
                  />
                  <div 
                    className="w-full bg-amber-500"
                    style={{ height: `${(t.lowStock / 15000) * 100}%` }}
                    title={`Low stock: ${t.lowStock}`}
                  />
                  <div 
                    className="w-full bg-emerald-500 rounded-b-sm"
                    style={{ height: `${(t.inStock / 15000) * 100}%` }}
                    title={`In stock: ${t.inStock}`}
                  />
                </div>
                <span className="text-xs font-semibold text-slate-600">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stock Status Donut (1 col) */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="font-bold text-slate-900 text-base">Overall Stock Status</h3>
            <p className="text-xs text-slate-400">Inventory health distribution</p>
          </div>

          <div className="flex items-center justify-center py-2">
            <div 
              className="w-32 h-32 rounded-full relative flex items-center justify-center shadow-inner"
              style={{
                background: 'conic-gradient(#22C55E 0% 85%, #F59E0B 85% 95%, #EF4444 95% 100%)'
              }}
            >
              <div className="w-18 h-18 bg-white rounded-full flex flex-col items-center justify-center shadow-xs">
                <span className="text-xs font-bold text-slate-800">14.2K</span>
                <span className="text-[9px] text-slate-400 uppercase">Total SKUs</span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
            {superAdminInventoryData.statusDonut.map((s) => (
              <div key={s.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                  <span className="text-slate-600 font-medium">{s.label}</span>
                </div>
                <span className="font-bold text-slate-900">{s.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Low Stock Alerts & Reorder Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="p-5 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Low Stock & Reorder Alerts
            </h2>
            <p className="text-xs text-slate-400">Items nearing critical threshold requiring branch replenishment</p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search low stock alert..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-6">Product Item</th>
                <th className="py-4 px-6">SKU Code</th>
                <th className="py-4 px-6">Merchant Branch</th>
                <th className="py-4 px-6">Current Units</th>
                <th className="py-4 px-6">Reorder Threshold</th>
                <th className="py-4 px-6">Urgency</th>
                <th className="py-4 px-6">Supplier Contact</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredAlerts.map((a) => (
                <tr key={a.sku} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    {a.product}
                  </td>
                  <td className="py-4 px-6 font-mono text-slate-500 text-xs">
                    {a.sku}
                  </td>
                  <td className="py-4 px-6 text-slate-700 font-medium flex items-center gap-1.5 mt-2">
                    <Store className="w-3.5 h-3.5 text-slate-400" />
                    <span>{a.store}</span>
                  </td>
                  <td className="py-4 px-6 text-rose-600 font-bold">
                    {a.currentStock} Units
                  </td>
                  <td className="py-4 px-6 text-slate-800 font-semibold">
                    {a.reorderLevel} Units
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      a.urgency === 'Critical'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {a.urgency}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {a.supplierPhone}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => handleNotifyStore(a.sku, a.store)}
                      disabled={notifiedSkus[a.sku]}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                        notifiedSkus[a.sku]
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          : 'bg-[#22C55E] hover:bg-[#16a34a] text-white shadow-xs'
                      }`}
                    >
                      <Send className="w-3 h-3" />
                      <span>{notifiedSkus[a.sku] ? 'Notified' : 'Notify Store'}</span>
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
