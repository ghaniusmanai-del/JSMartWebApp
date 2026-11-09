import React, { useState } from 'react';
import { 
  Bike, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Star, 
  Search, 
  Phone, 
  MapPin, 
  Award, 
  Filter, 
  Plus, 
  X,
  ExternalLink
} from 'lucide-react';
import { superAdminRidersData } from '../../data/superAdminData';

export default function AdminRiders() {
  const [riders, setRiders] = useState(superAdminRidersData.ridersList);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedRider, setSelectedRider] = useState(null);

  const filteredRiders = riders.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.zone.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || r.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleToggleStatus = (id) => {
    setRiders(riders.map(r => {
      if (r.id === id) {
        const nextStatus = r.status === 'Active' ? 'On Break' : r.status === 'On Break' ? 'Offline' : 'Active';
        return { ...r, status: nextStatus };
      }
      return r;
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Riders Fleet Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Dispatch health, delivery velocity, earnings distribution, and active fleet tracking.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Onboarding new rider form...')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl text-xs sm:text-sm font-semibold shadow-sm shadow-green-500/20 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Onboard Rider</span>
          </button>
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {superAdminRidersData.stats.map((stat, idx) => {
          const icons = [Bike, TrendingUp, Clock, CheckCircle];
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

      {/* Top Performers Row */}
      <div>
        <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          <span>Top Fleet Performers of the Week</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {superAdminRidersData.topPerformers.map((performer, idx) => (
            <div key={performer.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs flex items-center gap-4 relative overflow-hidden">
              <div className="absolute top-2 right-2 text-xs font-extrabold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">
                #{idx + 1}
              </div>
              <img
                src={performer.avatar}
                alt={performer.name}
                className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-xs"
              />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{performer.name}</h3>
                <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {performer.zone}
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs">
                  <span className="font-bold text-slate-800">{performer.deliveries} Trips</span>
                  <span className="text-emerald-600 font-bold">{performer.earnings}</span>
                  <div className="inline-flex items-center gap-0.5 text-amber-500 font-bold">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{performer.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fleet Search and Filter Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search rider by name, phone, zone..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30 focus:border-[#22C55E]"
          />
        </div>

        <div className="flex items-center gap-2">
          {['All', 'Active', 'On Break', 'Offline'].map((status) => (
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

      {/* Riders Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-6">Rider ID & Name</th>
                <th className="py-4 px-6">Phone Number</th>
                <th className="py-4 px-6">Assigned Zone</th>
                <th className="py-4 px-6">Vehicle Reg</th>
                <th className="py-4 px-6">Completed Trips</th>
                <th className="py-4 px-6">Total Earnings</th>
                <th className="py-4 px-6">Rating</th>
                <th className="py-4 px-6">Duty Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredRiders.map((rider) => (
                <tr key={rider.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-bold text-slate-900">{rider.name}</p>
                    <span className="text-[10px] text-slate-400 font-mono">{rider.id}</span>
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {rider.phone}
                  </td>
                  <td className="py-4 px-6 text-slate-800 font-medium">
                    {rider.zone}
                  </td>
                  <td className="py-4 px-6 font-mono text-slate-500 text-xs">
                    {rider.bikeNumber}
                  </td>
                  <td className="py-4 px-6 text-slate-900 font-bold">
                    {rider.deliveries}
                  </td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">
                    {rider.earnings}
                  </td>
                  <td className="py-4 px-6">
                    <div className="inline-flex items-center gap-1 font-semibold text-slate-800">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{rider.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleToggleStatus(rider.id)}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-colors ${
                        rider.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : rider.status === 'On Break'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                      title="Click to rotate shift status"
                    >
                      {rider.status}
                    </button>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => alert(`Connecting call to ${rider.name} at ${rider.phone}`)}
                      className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      title="Call Rider"
                    >
                      <Phone className="w-4 h-4" />
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
