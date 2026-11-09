import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Layers, 
  BarChart2, 
  Wallet, 
  Settings, 
  LogOut 
} from 'lucide-react';
import BrandLogo from './BrandLogo';

const navItems = [
  { name: 'Home', path: '/', icon: LayoutDashboard },
  { name: 'Products', path: '/products', icon: Package },
  { name: 'Orders', path: '/orders', icon: ShoppingBag },
  { name: 'Inventory', path: '/inventory', icon: Layers },
  { name: 'Finance', path: '/finance', icon: BarChart2 },
  { name: 'Store Wallet', path: '/wallet', icon: Wallet },
];

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jsmart_auth');
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
        fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-slate-100 flex flex-col justify-between py-6 px-4 transition-transform duration-300 ease-in-out
        lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Top Logo */}
        <div>
          <div className="flex justify-center mb-8">
            <NavLink to="/" onClick={() => setMobileOpen(false)}>
              <BrandLogo />
            </NavLink>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => `
                    flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200
                    ${isActive 
                      ? 'bg-[#22C55E] text-white shadow-sm shadow-green-500/20 font-semibold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      <span>{item.name}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom Options */}
        <div className="space-y-1.5 pt-6 border-t border-slate-100">
          <NavLink
            to="/settings"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) => `
              flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200
              ${isActive 
                ? 'bg-[#22C55E] text-white shadow-sm shadow-green-500/20 font-semibold' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }
            `}
          >
            {({ isActive }) => (
              <>
                <Settings className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>Store Settings</span>
              </>
            )}
          </NavLink>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors"
          >
            <LogOut className="w-5 h-5 text-slate-400 group-hover:text-rose-500" />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
