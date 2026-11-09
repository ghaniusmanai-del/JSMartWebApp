import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Menu, ShieldCheck, ArrowLeftRight, LogOut, CheckCircle, Calendar } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function AdminNavbar({ onMenuToggle }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jsmart_auth');
    localStorage.removeItem('jsmart_role');
    navigate('/login');
  };

  const notifications = [
    { id: 1, title: 'New Store Application', text: 'Royal Mart Saddar submitted merchant documents', time: '10m ago', unread: true },
    { id: 2, title: 'Payout Request Initiated', text: 'Chase Up Shopping requested RS 1,552,000 payout', time: '45m ago', unread: true },
    { id: 3, title: 'Daily Report Ready', text: 'Daily Sales Reconciliation is ready for download', time: '2h ago', unread: false },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 sm:px-6 py-3.5">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle & Global Search Bar */}
        <div className="flex items-center gap-3 flex-1 max-w-xl">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search stores, riders, customers, products..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30 focus:border-[#22C55E] placeholder:text-slate-400 transition-all"
            />
          </div>
        </div>

        {/* Right: Date Picker, Switcher & User Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Date Range Selector Pill */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-medium text-slate-600">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>May 21 - May 27, 2026</span>
          </div>

          {/* Quick Switch to Vendor Portal */}
          <Link
            to="/"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100/70 text-emerald-700 rounded-xl text-xs font-semibold border border-emerald-200/60 transition-colors"
            title="Switch to Vendor Portal view"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Vendor Portal</span>
          </Link>

          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors relative"
              title="Super Admin Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#22C55E] rounded-full ring-2 ring-white"></span>
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-semibold text-slate-800 text-sm">System Alerts</span>
                  <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-medium">2 pending</span>
                </div>
                <div className="max-h-72 overflow-y-auto divide-y divide-slate-50">
                  {notifications.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => {
                        setShowNotifications(false);
                        navigate('/admin/notifications');
                      }}
                      className={`px-4 py-3 hover:bg-slate-50 transition-colors cursor-pointer ${item.unread ? 'bg-emerald-50/20' : ''}`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-xs font-semibold text-slate-800">{item.title}</p>
                        <span className="text-[10px] text-slate-400">{item.time}</span>
                      </div>
                      <p className="text-xs text-slate-500">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 pt-2 border-t border-slate-100 text-center">
                  <button 
                    onClick={() => {
                      setShowNotifications(false);
                      navigate('/admin/notifications');
                    }}
                    className="text-xs text-[#22C55E] font-medium hover:underline"
                  >
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Super Admin Profile */}
          <div className="relative">
            <button
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              className="flex items-center gap-2.5 p-1 sm:px-2 sm:py-1.5 rounded-full sm:rounded-xl hover:bg-slate-50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-900 border border-emerald-400 flex items-center justify-center text-white text-xs font-bold overflow-hidden shadow-xs">
                <span className="text-emerald-400 font-extrabold text-xs">SA</span>
              </div>
              <div className="hidden sm:block text-left">
                <div className="flex items-center gap-1">
                  <p className="text-xs font-semibold text-slate-800">Super Admin</p>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <p className="text-[10px] text-slate-400 font-medium">Platform HQ</p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
            </button>

            {/* Profile Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-bold text-slate-900">Super Administrator</p>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-semibold">Root</span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono">admin@grocerymart.com</p>
                </div>

                <div className="py-1">
                  <Link
                    to="/"
                    onClick={() => setShowProfileMenu(false)}
                    className="w-full px-4 py-2 text-left text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 font-medium"
                  >
                    <ArrowLeftRight className="w-4 h-4 text-emerald-600" />
                    <span>Switch to Vendor Portal</span>
                  </Link>

                  <Link
                    to="/admin/stores/approve-reject"
                    onClick={() => setShowProfileMenu(false)}
                    className="w-full px-4 py-2 text-left text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-slate-400" />
                    <span>Pending Store Approvals (18)</span>
                  </Link>

                  <Link
                    to="/admin/finance"
                    onClick={() => setShowProfileMenu(false)}
                    className="w-full px-4 py-2 text-left text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 font-medium"
                  >
                    <span className="text-emerald-600 font-bold text-xs">PKR</span>
                    <span>Platform Settlements</span>
                  </Link>
                </div>

                <div className="border-t border-slate-100 pt-1">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2.5 font-medium"
                  >
                    <LogOut className="w-4 h-4 text-rose-500" />
                    <span>Log Out of Super Admin</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
