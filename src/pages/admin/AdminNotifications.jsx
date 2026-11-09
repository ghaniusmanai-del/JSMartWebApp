import React, { useState } from 'react';
import { 
  Bell, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  Trash2, 
  Check, 
  Search, 
  Filter, 
  Store, 
  Clock, 
  ShieldAlert
} from 'lucide-react';
import { superAdminNotificationsData } from '../../data/superAdminData';

export default function AdminNotifications() {
  const [notifications, setNotifications] = useState(superAdminNotificationsData);
  const [typeFilter, setTypeFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const handleToggleRead = (id) => {
    setNotifications(notifications.map(n => {
      if (n.id === id) return { ...n, unread: !n.unread };
      return n;
    }));
  };

  const handleDelete = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const filteredNotifications = notifications.filter(n => {
    const matchesSearch = n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          n.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'All' 
      ? true 
      : typeFilter === 'Unread' 
      ? n.unread 
      : n.type.toLowerCase().includes(typeFilter.toLowerCase());
    return matchesSearch && matchesType;
  });

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            System Notifications & Alerts
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time multi-branch activity alerts, merchant payout inquiries, and server health logs.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllRead}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs sm:text-sm font-semibold border border-emerald-200 transition-colors"
            >
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Mark All as Read ({unreadCount})</span>
            </button>
          )}
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Total Alerts</span>
            <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
              <Bell className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">{notifications.length + 136}</p>
          <p className="text-[11px] text-slate-400 mt-1">Logged past 30 days</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Unread</span>
            <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
              <AlertCircle className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">{unreadCount}</p>
          <p className="text-[11px] text-rose-600 font-semibold mt-1">Requires admin attention</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Urgent Warnings</span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
              <ShieldAlert className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">3</p>
          <p className="text-[11px] text-amber-600 font-semibold mt-1">Immediate action</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Informational</span>
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600">
              <Info className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">127</p>
          <p className="text-[11px] text-slate-400 mt-1">System health normal</p>
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
            placeholder="Search notification title, keywords..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {['All', 'Unread', 'Store Alert', 'Finance', 'System'].map((type) => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                typeFilter === type
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs divide-y divide-slate-100 overflow-hidden">
        {filteredNotifications.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-sm">
            No notifications matching current filter criteria.
          </div>
        ) : (
          filteredNotifications.map((n) => (
            <div
              key={n.id}
              className={`p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                n.unread ? 'bg-emerald-50/25' : 'hover:bg-slate-50/60'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className={`p-2.5 rounded-xl mt-0.5 ${
                  n.priority === 'Urgent'
                    ? 'bg-rose-50 text-rose-600'
                    : n.priority === 'High'
                    ? 'bg-amber-50 text-amber-600'
                    : 'bg-emerald-50 text-emerald-600'
                }`}>
                  <Bell className="w-5 h-5" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 text-sm">{n.title}</h3>
                    {n.unread && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    )}
                    <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                      {n.type}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      n.priority === 'Urgent' ? 'bg-rose-100 text-rose-700' : n.priority === 'High' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {n.priority}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                    {n.message}
                  </p>

                  <span className="text-[11px] text-slate-400 mt-1 block flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {n.time}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={() => handleToggleRead(n.id)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
                >
                  {n.unread ? 'Mark Read' : 'Mark Unread'}
                </button>
                <button
                  onClick={() => handleDelete(n.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Delete Alert"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
