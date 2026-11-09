import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Download, 
  Clock, 
  Truck, 
  CheckCircle, 
  XCircle, 
  Filter, 
  Store, 
  MapPin, 
  Bike,
  Eye
} from 'lucide-react';
import { superAdminOrdersData } from '../../data/superAdminData';

export default function AdminOrders() {
  const [orders, setOrders] = useState(superAdminOrdersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredOrders = orders.filter(o => {
    const matchesSearch = o.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          o.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          o.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          o.zone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Orders Central Dispatch
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time live multi-vendor order routing, delivery assignments, and fulfillment monitoring.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Exporting platform live order dispatch logs...')}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 shadow-xs transition-colors"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Export Orders CSV</span>
          </button>
        </div>
      </div>

      {/* 4 Status Quick Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Processing</span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">
            {orders.filter(o => o.status === 'Processing').length + 42}
          </p>
          <p className="text-[11px] text-amber-600 font-medium mt-1">Stores preparing items</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Out for Delivery</span>
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600">
              <Truck className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">
            {orders.filter(o => o.status === 'Out for Delivery').length + 76}
          </p>
          <p className="text-[11px] text-sky-600 font-medium mt-1">Riders en-route to dropoff</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Delivered Today</span>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">
            {orders.filter(o => o.status === 'Delivered').length + 480}
          </p>
          <p className="text-[11px] text-emerald-600 font-medium mt-1">98.2% on-time completion</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Cancelled / Failed</span>
            <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
              <XCircle className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">
            {orders.filter(o => o.status === 'Cancelled').length + 6}
          </p>
          <p className="text-[11px] text-rose-600 font-medium mt-1">Auto-refunded</p>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search order ID, store, customer, zone..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
          {['All', 'Processing', 'Out for Delivery', 'Delivered', 'Cancelled'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                statusFilter === st
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Dispatch Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-6">Order ID & Date</th>
                <th className="py-4 px-6">Origin Store</th>
                <th className="py-4 px-6">Customer & Zone</th>
                <th className="py-4 px-6">Items</th>
                <th className="py-4 px-6">Gross Amount</th>
                <th className="py-4 px-6">Assigned Rider</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredOrders.map((o) => (
                <tr key={o.orderId} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <span className="font-mono font-bold text-slate-900">{o.orderId}</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">{o.date}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <Store className="w-3.5 h-3.5 text-slate-400" />
                      {o.storeName}
                    </p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-semibold text-slate-800">{o.customerName}</p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {o.zone}
                    </p>
                  </td>
                  <td className="py-4 px-6 text-slate-800 font-semibold">
                    {o.items} Items
                  </td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">
                    {o.amount}
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                      <Bike className="w-3.5 h-3.5 text-slate-400" />
                      {o.rider}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      o.status === 'Delivered'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : o.status === 'Out for Delivery'
                        ? 'bg-sky-50 text-sky-700 border border-sky-200'
                        : o.status === 'Processing'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}>
                      {o.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => alert(`Opening tracking for ${o.orderId}`)}
                      className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      title="Inspect Dispatch"
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
