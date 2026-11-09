import React, { useState } from 'react';
import { Search, Bell, HelpCircle, ChevronDown, Menu, CheckCircle2, Info, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ onMenuToggle }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const notifications = [
    { id: 1, title: 'New order received', text: 'Order #ORD-1111 received from Muhammad Ali', time: '5m ago', unread: true },
    { id: 2, title: 'Low stock alert', text: 'Banana (1 Dozen) is running low in stock (14 left)', time: '25m ago', unread: true },
    { id: 3, title: 'Settlement processed', text: 'RS 1,308 credited to your store wallet', time: '2h ago', unread: false },
  ];

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 sm:px-6 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Mobile Toggle & Search Bar */}
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
                placeholder="Search Here.."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30 focus:border-[#22C55E] placeholder:text-slate-400 transition-all"
              />
            </div>
          </div>

          {/* Right: Actions & User Info */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Help Button */}
            <button 
              onClick={() => setShowHelp(true)}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors relative"
              title="Help & Documentation"
            >
              <HelpCircle className="w-5 h-5" />
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
                className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors relative"
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#22C55E] rounded-full ring-2 ring-white"></span>
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 z-50">
                  <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-semibold text-slate-800 text-sm">Notifications</span>
                    <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-medium">2 new</span>
                  </div>
                  <div className="max-h-72 overflow-y-auto divide-y divide-slate-50">
                    {notifications.map((item) => (
                      <div key={item.id} className={`px-4 py-3 hover:bg-slate-50 transition-colors cursor-pointer ${item.unread ? 'bg-emerald-50/20' : ''}`}>
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
                        navigate('/settings');
                      }}
                      className="text-xs text-[#22C55E] font-medium hover:underline"
                    >
                      Notification Settings
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full hover:bg-slate-100 transition-colors"
              >
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-emerald-500/20 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Store Owner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {/* Profile Menu */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-sm font-semibold text-slate-800">Syed M. Bilal</p>
                    <p className="text-xs text-slate-500">Store Manager</p>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        navigate('/settings');
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 font-medium"
                    >
                      Store Profile & Settings
                    </button>
                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        navigate('/wallet');
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 font-medium"
                    >
                      Wallet & Settlements
                    </button>
                  </div>
                  <div className="pt-1 border-t border-slate-100">
                    <button
                      onClick={() => {
                        localStorage.removeItem('jsmart_auth');
                        navigate('/login');
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 font-medium"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowHelp(false)}
              className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#22C55E]">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">JS Grocery Mart Help Guide</h3>
                <p className="text-xs text-slate-500">Store Manager Quick Walkthrough</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-600 my-4">
              <div className="p-3 bg-slate-50 rounded-xl">
                <p className="font-semibold text-slate-800 text-xs mb-1">1. Processing Orders</p>
                <p className="text-xs">Go to Orders tab to accept or reject new grocery requests within 15 minutes.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <p className="font-semibold text-slate-800 text-xs mb-1">2. Inventory & Stock Alerts</p>
                <p className="text-xs">Update your products in the Products or Inventory section. Low stock items trigger automatic warnings.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <p className="font-semibold text-slate-800 text-xs mb-1">3. Withdrawals & Payouts</p>
                <p className="text-xs">All payments are settled to your Store Wallet within 24 hours of order completion.</p>
              </div>
            </div>
            <button
              onClick={() => setShowHelp(false)}
              className="w-full py-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-medium text-sm transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
