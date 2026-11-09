import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronRight, 
  Search, 
  Download, 
  Edit3, 
  Trash2, 
  Package, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  CheckCircle2 
} from 'lucide-react';
import { inventoryListData } from '../data/dummyData';

export default function Inventory() {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState(inventoryListData);
  const [activeTab, setActiveTab] = useState('All Inventory'); // 'All Inventory' | 'In stock' | 'Low stock' | 'Out of Stock'
  const [searchTerm, setSearchTerm] = useState('');
  const [fulfillmentFilter, setFulfillmentFilter] = useState('Fulfillment Status');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleExport = () => {
    showToast('Inventory report exported as CSV successfully!');
  };

  const handleDelete = (id, name) => {
    setInventory(prev => prev.filter(item => item.id !== id));
    showToast(`Inventory item "${name}" deleted.`);
  };

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'All Inventory' || 
      (activeTab === 'In stock' && item.status === 'In Stock') ||
      (activeTab === 'Low stock' && item.status === 'Low Stock') ||
      (activeTab === 'Out of Stock' && item.status === 'Out of Stock');
    return matchesSearch && matchesTab;
  });

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 text-xs animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <span className="text-slate-300">|</span>
          <h1 className="text-2xl font-bold text-slate-800">Inventory</h1>
        </div>

        <button
          onClick={handleExport}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-medium text-sm shadow-sm transition-all hover:shadow"
        >
          <span>Export Report</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Total Products */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Products</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-emerald-600 mt-2">547</p>
          <p className="mt-2 text-xs text-slate-400 font-medium">All time Products</p>
        </div>

        {/* In Stock */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">In Stock</span>
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              <CheckCircle className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-sky-600 mt-2">423</p>
          <div className="mt-2">
            <span className="text-[11px] font-semibold text-sky-600 bg-sky-50 border border-sky-100 px-2 py-0.5 rounded-full">
              76% Of Total
            </span>
          </div>
        </div>

        {/* Low Stock */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Low Stock</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-amber-500 mt-2">67</p>
          <div className="mt-2">
            <span className="text-[11px] font-semibold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">
              12% Of Total
            </span>
          </div>
        </div>

        {/* Out of Stock */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Out of Stock</span>
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
              <XCircle className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-rose-500 mt-2">45</p>
          <div className="mt-2">
            <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-full">
              12% Of Total
            </span>
          </div>
        </div>
      </div>

      {/* Main Inventory Table Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-5">
        {/* Filter Bar with Tabs on Left & Search on Right */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Tab Filter Pills */}
          <div className="inline-flex flex-wrap bg-slate-100/80 p-1 rounded-xl text-xs font-medium text-slate-600">
            {['All Inventory', 'In stock', 'Low stock', 'Out of Stock'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === tab 
                    ? 'bg-[#22C55E] text-white shadow-sm font-semibold' 
                    : 'hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search & Fulfillment Filter */}
          <div className="flex items-center gap-3">
            <div className="relative w-48 sm:w-60">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <select
              value={fulfillmentFilter}
              onChange={(e) => setFulfillmentFilter(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option>Fulfillment Status</option>
              <option>Fulfilled</option>
              <option>Unfulfilled</option>
            </select>
          </div>
        </div>

        {/* Inventory Data Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#EDF8F1] text-emerald-900 font-semibold border-b border-emerald-100">
                <th className="py-3 px-4">Product</th>
                <th className="py-3 px-4">SKU</th>
                <th className="py-3 px-4">category</th>
                <th className="py-3 px-4">Unit</th>
                <th className="py-3 px-4">Quantity</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Last Updated</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  {/* Product */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200/60">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-semibold text-slate-800">{item.name}</span>
                    </div>
                  </td>

                  {/* SKU */}
                  <td className="py-3.5 px-4 text-slate-600 font-mono text-[11px]">{item.sku}</td>

                  {/* Category */}
                  <td className="py-3.5 px-4 text-slate-600">{item.category}</td>

                  {/* Unit */}
                  <td className="py-3.5 px-4 text-slate-600">{item.unit}</td>

                  {/* Quantity */}
                  <td className="py-3.5 px-4 font-semibold text-slate-800">{item.quantity}</td>

                  {/* Status Badge */}
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                      item.status === 'In Stock' 
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                        : item.status === 'Low Stock'
                        ? 'bg-amber-50 text-amber-600 border border-amber-200'
                        : 'bg-rose-50 text-rose-600 border border-rose-200'
                    }`}>
                      {item.status}
                    </span>
                  </td>

                  {/* Last Updated */}
                  <td className="py-3.5 px-4 text-slate-500">{item.lastUpdated}</td>

                  {/* Actions */}
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => navigate('/products/add')}
                        className="w-7 h-7 rounded-full border border-sky-300 text-sky-600 hover:bg-sky-50 flex items-center justify-center transition-colors"
                        title="Edit inventory item"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id, item.name)}
                        className="w-7 h-7 rounded-full border border-rose-300 text-rose-500 hover:bg-rose-50 flex items-center justify-center transition-colors"
                        title="Delete inventory item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1 pt-4 text-xs font-medium text-slate-500">
          <button className="px-2.5 py-1 rounded-lg hover:bg-slate-100">&lt;</button>
          <button className="w-7 h-7 rounded-lg bg-[#22C55E] text-white font-bold flex items-center justify-center">1</button>
          <button className="w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center">2</button>
          <button className="w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center">3</button>
          <span className="px-1 text-slate-400">...</span>
          <button className="w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center">5</button>
          <button className="px-2.5 py-1 rounded-lg hover:bg-slate-100">&gt;</button>
        </div>
      </div>
    </div>
  );
}
