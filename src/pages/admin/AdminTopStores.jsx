import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Store, 
  TrendingUp, 
  Star, 
  Search, 
  Filter, 
  ArrowLeft, 
  ArrowUpRight, 
  Download, 
  Eye, 
  MoreVertical,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import { superAdminAllStores } from '../../data/superAdminData';

export default function AdminTopStores() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const categories = ['All', 'Groceries & Daily Essentials', 'Hypermarket & Foods', 'General Mart & Fresh', 'Organic & Imported Produce', 'Fruits & Vegetables'];

  const filteredStores = superAdminAllStores.filter((store) => {
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          store.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          store.zone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || store.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || store.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link
            to="/admin"
            className="p-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-slate-600 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Top Performance Stores
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Comprehensive ranking, volume metrics, and health scores of registered partner branches.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => alert('Exporting Top Stores to CSV...')}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 shadow-xs transition-colors"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Top 4 Performance Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Total Stores</span>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <Store className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">240</p>
          <p className="text-[11px] text-slate-400 mt-1">220 Active in Karachi</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Top Store GMV</span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">RS 420,500</p>
          <p className="text-[11px] text-emerald-600 font-semibold mt-1">Al-Madina Super Mart (+14.2%)</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Avg Store Rating</span>
            <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
              <Star className="w-4 h-4 fill-rose-500 text-rose-500" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">4.8 / 5.0</p>
          <p className="text-[11px] text-slate-400 mt-1">From 48,200 Customer Reviews</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">High Tier Stores</span>
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">48 Stores</p>
          <p className="text-[11px] text-slate-400 mt-1">Orders &gt; 1,000 / month</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search store name, owner, area..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30 focus:border-[#22C55E]"
          />
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto overflow-x-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-medium text-slate-700 focus:outline-none"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c === 'All' ? 'All Categories' : c}</option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-medium text-slate-700 focus:outline-none"
          >
            <option value="All">All Status</option>
            <option value="Active">Active Only</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Stores Performance Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-6">Store Details</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Owner & Contact</th>
                <th className="py-4 px-6">Total Orders</th>
                <th className="py-4 px-6">Total Revenue</th>
                <th className="py-4 px-6">Growth</th>
                <th className="py-4 px-6">Rating</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredStores.map((store) => (
                <tr key={store.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={store.image}
                        alt={store.name}
                        className="w-11 h-11 rounded-xl object-cover border border-slate-200/80 shadow-xs"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">{store.name}</p>
                        <p className="text-[11px] text-slate-400">{store.zone} • ID: {store.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {store.category}
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-medium text-slate-800">{store.owner}</p>
                    <p className="text-[11px] text-slate-400">{store.phone}</p>
                  </td>
                  <td className="py-4 px-6 text-slate-800 font-bold">
                    {store.orders.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">
                    {store.revenue}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center text-xs font-bold ${store.growth.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {store.growth}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="inline-flex items-center gap-1 font-semibold text-slate-800">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{store.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      store.status === 'Active' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60' 
                        : 'bg-rose-50 text-rose-700 border border-rose-200/60'
                    }`}>
                      {store.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="inline-flex items-center gap-1.5">
                      <Link
                        to="/admin/stores"
                        className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                        title="Manage Store"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                    </div>
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
