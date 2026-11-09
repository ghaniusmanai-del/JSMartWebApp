import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronRight, 
  Search, 
  RotateCcw, 
  Edit3, 
  Trash2, 
  TrendingUp, 
  TrendingDown, 
  Plus, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { productsListData } from '../data/dummyData';

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(productsListData);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Category');
  const [stockFilter, setStockFilter] = useState('Stock Status');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDelete = (id, name) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    showToast(`Product "${name}" removed successfully.`);
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.includes(searchTerm);
    const matchesCategory = categoryFilter === 'All Category' || p.category === categoryFilter;
    const matchesStatus = statusFilter === 'All Status' || p.status === statusFilter;
    const matchesStock = stockFilter === 'Stock Status' || 
      (stockFilter === 'In Stock' && p.stock > 0) || 
      (stockFilter === 'Out of Stock' && p.stock === 0);
    return matchesSearch && matchesCategory && matchesStatus && matchesStock;
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
          <h1 className="text-2xl font-bold text-slate-800">Products</h1>
        </div>

        <button
          onClick={() => navigate('/products/add')}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-medium text-sm shadow-sm transition-all hover:shadow"
        >
          <span>Add Products</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Total Sales */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total sales</span>
            <div className="flex gap-0.5 items-end h-5">
              <span className="w-1 bg-emerald-300 h-2 rounded-t"></span>
              <span className="w-1 bg-emerald-400 h-4 rounded-t"></span>
              <span className="w-1 bg-emerald-500 h-5 rounded-t"></span>
              <span className="w-1 bg-emerald-400 h-3 rounded-t"></span>
            </div>
          </div>
          <p className="text-2xl font-black text-emerald-600 mt-2">PKR 234,543</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <span>Yesterday</span>
            <span className="font-semibold text-emerald-500 flex items-center">
              +12% <TrendingUp className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Orders</span>
            <div className="flex gap-0.5 items-end h-5">
              <span className="w-1 bg-sky-300 h-3 rounded-t"></span>
              <span className="w-1 bg-sky-400 h-5 rounded-t"></span>
              <span className="w-1 bg-sky-500 h-4 rounded-t"></span>
              <span className="w-1 bg-sky-400 h-2 rounded-t"></span>
            </div>
          </div>
          <p className="text-2xl font-black text-sky-600 mt-2">234</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <span>Last week</span>
            <span className="font-semibold text-sky-500 flex items-center">
              7.8% <TrendingUp className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </div>
        </div>

        {/* Total Products */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Products</span>
            <div className="flex gap-0.5 items-end h-5">
              <span className="w-1 bg-amber-300 h-2 rounded-t"></span>
              <span className="w-1 bg-amber-400 h-4 rounded-t"></span>
              <span className="w-1 bg-amber-500 h-5 rounded-t"></span>
              <span className="w-1 bg-amber-400 h-3 rounded-t"></span>
            </div>
          </div>
          <p className="text-2xl font-black text-amber-500 mt-2">546</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <span>Last week</span>
            <span className="font-semibold text-amber-500 flex items-center">
              4.7% <TrendingUp className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </div>
        </div>

        {/* Low Stocks */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Low Stocks</span>
            <div className="flex gap-0.5 items-end h-5">
              <span className="w-1 bg-rose-300 h-4 rounded-t"></span>
              <span className="w-1 bg-rose-400 h-3 rounded-t"></span>
              <span className="w-1 bg-rose-500 h-5 rounded-t"></span>
              <span className="w-1 bg-rose-400 h-2 rounded-t"></span>
            </div>
          </div>
          <p className="text-2xl font-black text-rose-500 mt-2">12</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <span>Last week</span>
            <span className="font-semibold text-rose-500 flex items-center">
              4.7% <TrendingDown className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Products List Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-5">
        <h2 className="text-base font-bold text-slate-800">Products List</h2>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          <div className="sm:col-span-4 relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
          <div className="sm:col-span-3">
            <select
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option>Stock Status</option>
              <option>In Stock</option>
              <option>Out of Stock</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option>All Category</option>
              <option>Fruits</option>
              <option>Grains</option>
              <option>Pantry</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option>All Status</option>
              <option>In Stock</option>
              <option>Out of Stock</option>
              <option>Low Stock</option>
            </select>
          </div>
          <div className="sm:col-span-1 flex justify-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('All Category');
                setStockFilter('Stock Status');
                setStatusFilter('All Status');
              }}
              className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-500 transition-colors"
              title="Reset filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#EDF8F1] text-emerald-900 font-semibold border-b border-emerald-100">
                <th className="py-3 px-4">Product</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Price (PKR)</th>
                <th className="py-3 px-4">Stock</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                  {/* Product Thumbnail + Name + ID */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200/60">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{p.name}</p>
                        <p className="text-[10px] text-slate-400">#ID {p.id}</p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-3.5 px-4 text-slate-600 font-medium">{p.category}</td>

                  {/* Price */}
                  <td className="py-3.5 px-4 text-slate-700 font-semibold">PKR {p.price.toFixed(1)}</td>

                  {/* Stock */}
                  <td className="py-3.5 px-4 text-slate-600 font-medium">{p.stock}</td>

                  {/* Status Badge */}
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                      p.status === 'In Stock' 
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                        : p.status === 'Low Stock'
                        ? 'bg-amber-50 text-amber-600 border border-amber-200'
                        : 'bg-rose-50 text-rose-600 border border-rose-200'
                    }`}>
                      {p.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => navigate('/products/add')}
                        className="w-7 h-7 rounded-full border border-sky-300 text-sky-600 hover:bg-sky-50 flex items-center justify-center transition-colors"
                        title="Edit product"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => handleDelete(p.id, p.name)}
                        className="w-7 h-7 rounded-full border border-rose-300 text-rose-500 hover:bg-rose-50 flex items-center justify-center transition-colors"
                        title="Delete product"
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
