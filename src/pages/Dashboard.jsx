import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  ChevronRight, 
  TrendingUp, 
  TrendingDown, 
  RotateCcw, 
  Heart, 
  CheckCircle2, 
  Search, 
  SlidersHorizontal 
} from 'lucide-react';
import { 
  initialDashboardStats, 
  salesAnalyticsData, 
  recentGroceryOrders 
} from '../data/dummyData';

export default function Dashboard() {
  const navigate = useNavigate();
  const [stats] = useState(initialDashboardStats);
  const [analyticsPeriod, setAnalyticsPeriod] = useState('Monthly'); // Daily | Weekly | Monthly
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [selectedStock, setSelectedStock] = useState('Stock Status');
  const [favorites, setFavorites] = useState({});
  const [otp, setOtp] = useState(['0', '4', '7', '8']);
  const [otpVerified, setOtpVerified] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto advance focus
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerifyOtp = () => {
    setOtpVerified(true);
    setTimeout(() => {
      setOtpVerified(false);
    }, 3000);
  };

  const filteredOrders = recentGroceryOrders.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All Category' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
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
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative overflow-hidden">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.title}</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className={`text-2xl font-black ${
                stat.color === 'emerald' ? 'text-emerald-600' :
                stat.color === 'amber' ? 'text-amber-500' :
                stat.color === 'rose' ? 'text-rose-500' : 'text-sky-600'
              }`}>
                {stat.value}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
              <span>{stat.period}</span>
              <span className={`font-semibold flex items-center ${
                stat.isPositive ? 'text-emerald-500' : 'text-rose-500'
              }`}>
                {stat.change}
                {stat.isPositive ? <TrendingUp className="w-3.5 h-3.5 ml-0.5" /> : <TrendingDown className="w-3.5 h-3.5 ml-0.5" />}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Row: Sales Analytics & Inventory Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Analytics Chart Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-base font-bold text-slate-800">Sales Analytics</h2>
              <div className="w-6 h-3 flex items-center">
                <svg viewBox="0 0 40 15" className="w-full text-emerald-500 stroke-current fill-none stroke-2">
                  <path d="M0 12 Q 10 0, 20 8 T 40 4" />
                </svg>
              </div>
            </div>

            {/* Daily Weekly Monthly Pills */}
            <div className="inline-flex bg-slate-100 p-1 rounded-xl text-xs font-medium text-slate-600 self-start sm:self-auto">
              {['Daily', 'Weekly', 'Monthly'].map((period) => (
                <button
                  key={period}
                  onClick={() => setAnalyticsPeriod(period)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    analyticsPeriod === period 
                      ? 'bg-[#22C55E] text-white shadow-sm font-semibold' 
                      : 'hover:text-slate-900'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive SVG Chart matching Figma graph */}
          <div className="relative h-64 w-full">
            {/* Background grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between text-[11px] text-slate-400 pointer-events-none">
              <div className="border-b border-dashed border-slate-100 flex justify-between pb-1">
                <span>$6,000</span>
              </div>
              <div className="border-b border-dashed border-slate-100 flex justify-between pb-1">
                <span>$5,700</span>
              </div>
              <div className="border-b border-dashed border-slate-100 flex justify-between pb-1">
                <span>$5,300</span>
              </div>
              <div className="border-b border-dashed border-slate-100 flex justify-between pb-1">
                <span>$4,500</span>
              </div>
              <div className="border-b border-dashed border-slate-100 flex justify-between pb-1">
                <span>$4,100</span>
              </div>
              <div className="border-b border-dashed border-slate-100 flex justify-between pb-1">
                <span>$3,200</span>
              </div>
            </div>

            {/* SVG Line / Wave */}
            <div className="absolute inset-0 pl-12 pr-4 pt-4 pb-6">
              <svg viewBox="0 0 700 200" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22C55E" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#22C55E" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Shaded Area under curve */}
                <path
                  d="M 30,120 L 80,105 L 140,110 L 200,125 L 260,140 L 320,115 L 380,130 L 440,110 L 500,145 L 560,135 L 620,155 L 680,180 L 680,200 L 30,200 Z"
                  fill="url(#chartGradient)"
                />

                {/* Line Path */}
                <path
                  d="M 30,120 L 80,105 L 140,110 L 200,125 L 260,140 L 320,115 L 380,130 L 440,110 L 500,145 L 560,135 L 620,155 L 680,180"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Dots along path */}
                {[
                  [30,120], [80,105], [140,110], [200,125], [260,140], 
                  [320,115], [380,130], [440,110], [500,145], [560,135], [620,155], [680,180]
                ].map(([cx, cy], i) => (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="4"
                    fill="#22C55E"
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="cursor-pointer transition-transform hover:scale-150"
                  />
                ))}

                {/* Highlight Pin on Saturday PKR 24,000 */}
                <g transform="translate(440, 65)">
                  <rect x="-60" y="-30" width="120" height="28" rx="8" fill="#ffffff" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.1))" stroke="#E2E8F0" />
                  <text x="0" y="-18" textAnchor="middle" fontSize="9" fontWeight="600" fill="#64748B">Saturday</text>
                  <text x="0" y="-7" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#22C55E">• PKR 24,000</text>
                  <line x1="0" y1="-2" x2="0" y2="45" stroke="#22C55E" strokeDasharray="3 3" strokeWidth="1.5" />
                </g>
              </svg>

              {/* Bottom Day Labels */}
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span className="text-emerald-600 font-bold">Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory Status Donut Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-slate-800">Inventory Status</h2>
            <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
          </div>

          {/* Donut Chart representation */}
          <div className="relative flex items-center justify-center my-4">
            <svg viewBox="0 0 200 200" className="w-48 h-48 transform -rotate-90">
              {/* In stock 55% green (circumference = 2 * PI * 70 = 439.8) */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#22C55E"
                strokeWidth="24"
                strokeDasharray="242 440"
                strokeDashoffset="0"
              />
              {/* Low stock 30% yellow */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="24"
                strokeDasharray="132 440"
                strokeDashoffset="-242"
              />
              {/* Out of stock 15% red */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#EF4444"
                strokeWidth="24"
                strokeDasharray="66 440"
                strokeDashoffset="-374"
              />
            </svg>

            {/* Inner Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
              <span className="text-[11px] font-semibold text-slate-400">Total Products</span>
              <div className="flex items-center gap-1">
                <span className="text-emerald-500 text-xs">↑</span>
                <span className="text-2xl font-black text-slate-800">1200</span>
              </div>
            </div>
          </div>

          {/* Legends */}
          <div className="flex items-center justify-around pt-4 border-t border-slate-100 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"></span>
              <span className="text-slate-600">In stock <strong className="text-slate-800 font-bold">55%</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
              <span className="text-slate-600">Low Stock <strong className="text-slate-800 font-bold">30%</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></span>
              <span className="text-slate-600">Out of Stock <strong className="text-slate-800 font-bold">15%</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Recent Orders & Pickup OTP */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders Grid */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-800">Recent Orders</h2>
            <button
              onClick={() => navigate('/orders')}
              className="px-4 py-1.5 bg-[#22C55E] hover:bg-[#16a34a] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
            >
              View all
            </button>
          </div>

          {/* Filters Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            <div className="sm:col-span-5 relative">
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
                value={selectedStock}
                onChange={(e) => setSelectedStock(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option>Stock Status</option>
                <option>In Stock</option>
                <option>Low Stock</option>
                <option>Out of Stock</option>
              </select>
            </div>
            <div className="sm:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option>All Category</option>
                <option>Vegetables</option>
                <option>Fruits</option>
                <option>Dairy</option>
              </select>
            </div>
            <div className="sm:col-span-1 flex justify-end">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Category');
                  setSelectedStock('Stock Status');
                }}
                className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-500 transition-colors"
                title="Reset filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Grocery Products Grid (2 rows x 5 cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {filteredOrders.slice(0, 10).map((product) => (
              <div
                key={product.id}
                className="border border-slate-100 rounded-2xl p-2.5 flex flex-col justify-between hover:shadow-md transition-shadow relative group bg-white"
              >
                {/* Discount Badge */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-md">
                    {product.discount}
                  </span>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="text-slate-300 hover:text-rose-500 transition-colors"
                  >
                    <Heart className={`w-3.5 h-3.5 ${favorites[product.id] ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>
                </div>

                {/* Product Image */}
                <div className="h-20 w-full overflow-hidden rounded-xl mb-2 flex items-center justify-center bg-slate-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title & Price */}
                <div>
                  <h3 className="text-xs font-semibold text-slate-800 line-clamp-1">{product.name}</h3>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-xs font-bold text-slate-900">{product.price}</span>
                    <span className="text-[10px] text-slate-400 line-through">{product.oldPrice}</span>
                  </div>
                </div>

                {/* View Order Button */}
                <button
                  onClick={() => navigate('/orders/ORD-1111')}
                  className="mt-2.5 w-full py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors text-center"
                >
                  View Order
                </button>
              </div>
            ))}
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

        {/* Pickup OTP Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-800 mb-6">Pickup OTP</h2>

            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Order ID</span>
                <p className="text-sm font-bold text-slate-800 mt-0.5">#ORD2345678</p>
              </div>

              <div>
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Rider Name</span>
                <p className="text-sm font-bold text-slate-800 mt-0.5">Ali Khan</p>
              </div>

              <div>
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Rider Ph Number</span>
                <p className="text-sm font-bold text-slate-800 mt-0.5">12345654654</p>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-2">OTP Number</span>
                <div className="flex items-center gap-2.5">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`otp-${idx}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      className="w-12 h-12 text-center text-lg font-bold bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E] text-slate-800 shadow-sm"
                    />
                  ))}
                </div>
              </div>

              {otpVerified && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-emerald-700 text-xs font-semibold animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>OTP successfully verified! Handover authorized.</span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleVerifyOtp}
            className="w-full mt-8 py-3.5 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-semibold text-sm shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg flex items-center justify-center gap-2"
          >
            <span>Verify OTP</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
