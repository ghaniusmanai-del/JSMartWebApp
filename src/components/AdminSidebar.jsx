import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Store, 
  Bike, 
  Users, 
  Package, 
  ShoppingBag, 
  Layers, 
  BarChart2, 
  FileText, 
  UserCheck, 
  Bell, 
  LogOut,
  ArrowLeftRight,
  ShieldCheck
} from 'lucide-react';
import BrandLogo from './BrandLogo';

const adminNavItems = [
  { name: 'Home', path: '/admin', icon: LayoutDashboard, exact: true },
  { name: 'Stores', path: '/admin/stores', icon: Store },
  { name: 'Riders', path: '/admin/riders', icon: Bike },
  { name: 'Customers', path: '/admin/customers', icon: Users },
  { name: 'Products', path: '/admin/products', icon: Package },
  { name: 'Orders', path: '/admin/orders', icon: ShoppingBag },
  { name: 'Inventory', path: '/admin/inventory', icon: Layers },
  { name: 'Earnings & Finance', path: '/admin/finance', icon: BarChart2 },
  { name: 'Reports', path: '/admin/reports', icon: FileText },
  { name: 'Approve/ Reject Store', path: '/admin/stores/approve-reject', icon: UserCheck },
];

export default function AdminSidebar({ mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jsmart_auth');
    localStorage.removeItem('jsmart_role');
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-slate-100 flex flex-col justify-between py-5 px-3.5 transition-transform duration-300 ease-in-out
        lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Top: Brand & Super Admin Badge */}
        <div className="overflow-y-auto no-scrollbar flex-1 pb-4">
          <div className="flex flex-col items-center mb-6">
            <NavLink to="/admin" onClick={() => setMobileOpen(false)} className="block">
              <BrandLogo />
            </NavLink>
            <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[11px] font-bold border border-emerald-200/60 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>SUPER ADMIN PORTAL</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {adminNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.exact}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200
                    ${isActive 
                      ? 'bg-[#22C55E] text-white shadow-sm shadow-green-500/25 font-semibold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      <span className="truncate">{item.name}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom Options */}
        <div className="space-y-1 pt-3 border-t border-slate-100 bg-white">
          {/* Notifications */}
          <NavLink
            to="/admin/notifications"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) => `
              flex items-center justify-between px-3.5 py-2 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200
              ${isActive 
                ? 'bg-[#22C55E] text-white shadow-sm shadow-green-500/20 font-semibold' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }
            `}
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center gap-3">
                  <Bell className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>Notifications</span>
                </div>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white text-emerald-600' : 'bg-rose-500 text-white'}`}>
                  2
                </span>
              </>
            )}
          </NavLink>

          {/* Quick Switch to Vendor Portal */}
          <NavLink
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2 rounded-xl font-medium text-xs sm:text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
            <span>Go to Vendor Portal</span>
          </NavLink>

          {/* Log Out */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl font-medium text-xs sm:text-sm text-rose-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
          >
            <LogOut className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
