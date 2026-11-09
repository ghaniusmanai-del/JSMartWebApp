import React, { useState } from 'react';
import { 
  Package, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Search, 
  Filter, 
  Download, 
  Store, 
  SlidersHorizontal,
  Eye,
  Edit2
} from 'lucide-react';
import { superAdminProductsData } from '../../data/superAdminData';

export default function AdminProducts() {
  const [products, setProducts] = useState(superAdminProductsData.productsList);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.store.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
    const matchesCategory = categoryFilter === 'All' || p.category.includes(categoryFilter);
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Global Products Catalog
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Platform-wide grocery inventory, pricing compliance, and store product availability.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Exporting full platform product catalog...')}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 shadow-xs transition-colors"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Export Catalog CSV</span>
          </button>
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {superAdminProductsData.stats.map((stat, idx) => {
          const icons = [Package, CheckCircle, AlertTriangle, XCircle];
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

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products by title, barcode, store..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
          {['All', 'In Stock', 'Low Stock', 'Out of Stock'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
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

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-6">Product Item</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Merchant Store</th>
                <th className="py-4 px-6">Selling Price</th>
                <th className="py-4 px-6">Stock Left</th>
                <th className="py-4 px-6">Weekly Sales</th>
                <th className="py-4 px-6">Availability</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredProducts.map((p) => (
                <tr key={p.code} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-11 h-11 rounded-xl object-cover border border-slate-200 shadow-xs"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">{p.name}</p>
                        <span className="text-[10px] text-slate-400 font-mono">{p.code}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {p.category}
                  </td>
                  <td className="py-4 px-6 text-slate-800 font-semibold flex items-center gap-1.5 mt-2">
                    <Store className="w-3.5 h-3.5 text-slate-400" />
                    <span>{p.store}</span>
                  </td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">
                    {p.price}
                  </td>
                  <td className="py-4 px-6 text-slate-800 font-bold">
                    {p.stock} Units
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    {p.weeklySales} sold
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      p.status === 'In Stock'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : p.status === 'Low Stock'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => alert(`Inspecting product ${p.name}`)}
                      className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      title="Inspect"
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
