import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Store, 
  Search, 
  Plus, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  Star, 
  CheckCircle, 
  Clock, 
  XCircle, 
  Eye, 
  Phone, 
  MapPin, 
  X,
  Check
} from 'lucide-react';
import { superAdminAllStores } from '../../data/superAdminData';

export default function AdminStores() {
  const [stores, setStores] = useState(superAdminAllStores);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedStore, setSelectedStore] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newStore, setNewStore] = useState({
    name: '',
    category: 'Groceries & Daily Essentials',
    owner: '',
    phone: '',
    zone: 'Gulshan-e-Iqbal',
    revenue: 'RS 0',
    orders: 0,
    rating: 5.0,
    status: 'Active'
  });

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          store.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          store.zone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || store.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDeleteStore = (id) => {
    if (confirm('Are you sure you want to remove this store from the platform?')) {
      setStores(stores.filter(s => s.id !== id));
      if (selectedStore?.id === id) setSelectedStore(null);
    }
  };

  const handleToggleStatus = (id) => {
    setStores(stores.map(s => {
      if (s.id === id) {
        return { ...s, status: s.status === 'Active' ? 'Inactive' : 'Active' };
      }
      return s;
    }));
  };

  const handleAddStoreSubmit = (e) => {
    e.preventDefault();
    const created = {
      ...newStore,
      id: `STR-0${stores.length + 1}`,
      growth: '+0.0%',
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=100&auto=format&fit=crop&q=80'
    };
    setStores([created, ...stores]);
    setShowAddModal(false);
    setNewStore({
      name: '',
      category: 'Groceries & Daily Essentials',
      owner: '',
      phone: '',
      zone: 'Gulshan-e-Iqbal',
      revenue: 'RS 0',
      orders: 0,
      rating: 5.0,
      status: 'Active'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header and Add Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Stores Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Directory of all grocery merchants, supermarket chains, and local stalls.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/admin/stores/approve-reject"
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-xl text-xs sm:text-sm font-semibold border border-amber-200 transition-colors"
          >
            <Clock className="w-4 h-4 text-amber-600" />
            <span>Pending Approvals (18)</span>
          </Link>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl text-xs sm:text-sm font-semibold shadow-sm shadow-green-500/20 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Store</span>
          </button>
        </div>
      </div>

      {/* 4 Top Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Total Stores</span>
            <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
              <Store className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">{stores.length + 230}</p>
          <p className="text-[11px] text-slate-400 mt-1">Platform wide</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Active Stores</span>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">
            {stores.filter(s => s.status === 'Active').length + 215}
          </p>
          <p className="text-[11px] text-emerald-600 font-medium mt-1">92% Operational</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Pending Review</span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">18</p>
          <p className="text-[11px] text-amber-600 font-medium mt-1">Awaiting approval</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Inactive</span>
            <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
              <XCircle className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">
            {stores.filter(s => s.status === 'Inactive').length + 8}
          </p>
          <p className="text-[11px] text-slate-400 mt-1">Suspended / Paused</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search store name, owner, area..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30 focus:border-[#22C55E]"
          />
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {['All', 'Active', 'Inactive'].map((status) => (
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

      {/* Stores Directory Grid & Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-6">Store Name & Location</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Merchant / Owner</th>
                <th className="py-4 px-6">Orders</th>
                <th className="py-4 px-6">Gross Revenue</th>
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
                        className="w-10 h-10 rounded-xl object-cover border border-slate-200/80 shadow-xs"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">{store.name}</p>
                        <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {store.zone}
                        </p>
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
                  <td className="py-4 px-6 text-slate-800 font-semibold">
                    {store.orders.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">
                    {store.revenue}
                  </td>
                  <td className="py-4 px-6">
                    <div className="inline-flex items-center gap-1 text-slate-800 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{store.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleToggleStatus(store.id)}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-colors ${
                        store.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60 hover:bg-emerald-100'
                          : 'bg-rose-50 text-rose-700 border border-rose-200/60 hover:bg-rose-100'
                      }`}
                      title="Click to toggle status"
                    >
                      {store.status}
                    </button>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="inline-flex items-center gap-1">
                      <button
                        onClick={() => setSelectedStore(store)}
                        className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                        title="View Info"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteStore(store.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Delete Store"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Store Details Modal */}
      {selectedStore && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-base">Store Profile Overview</h3>
              <button onClick={() => setSelectedStore(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <img src={selectedStore.image} alt={selectedStore.name} className="w-16 h-16 rounded-2xl object-cover border" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{selectedStore.name}</h4>
                <p className="text-xs text-slate-400">{selectedStore.category}</p>
                <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  ID: {selectedStore.id} • {selectedStore.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl text-xs">
              <div>
                <span className="text-slate-400 block mb-0.5">Merchant Name</span>
                <span className="font-bold text-slate-800">{selectedStore.owner}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Contact Phone</span>
                <span className="font-bold text-slate-800">{selectedStore.phone}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Operating Area</span>
                <span className="font-bold text-slate-800">{selectedStore.zone}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Lifetime GMV</span>
                <span className="font-bold text-emerald-600">{selectedStore.revenue}</span>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedStore(null)}
                className="px-4 py-2 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleToggleStatus(selectedStore.id);
                  setSelectedStore({
                    ...selectedStore,
                    status: selectedStore.status === 'Active' ? 'Inactive' : 'Active'
                  });
                }}
                className="px-4 py-2 bg-slate-900 hover:bg-black text-white rounded-xl text-xs font-semibold"
              >
                {selectedStore.status === 'Active' ? 'Suspend Store' : 'Reactivate Store'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Store Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-base">Onboard New Merchant Store</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddStoreSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Store Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bilal Super Mart"
                  value={newStore.name}
                  onChange={(e) => setNewStore({ ...newStore, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Category</label>
                  <select
                    value={newStore.category}
                    onChange={(e) => setNewStore({ ...newStore, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                  >
                    <option value="Groceries & Daily Essentials">Groceries & Daily Essentials</option>
                    <option value="Hypermarket & Foods">Hypermarket & Foods</option>
                    <option value="Dairy, Bakery & Milk">Dairy, Bakery & Milk</option>
                    <option value="Organic & Fruits">Organic & Fruits</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Operating Zone</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DHA Phase 5"
                    value={newStore.zone}
                    onChange={(e) => setNewStore({ ...newStore, zone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Merchant Owner Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Syed Bilal"
                    value={newStore.owner}
                    onChange={(e) => setNewStore({ ...newStore, owner: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Contact Phone</label>
                  <input
                    type="text"
                    required
                    placeholder="+92 300 1234567"
                    value={newStore.phone}
                    onChange={(e) => setNewStore({ ...newStore, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-semibold shadow-xs"
                >
                  Create & Activate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
