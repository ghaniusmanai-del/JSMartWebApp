import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Store, 
  Bike, 
  Users, 
  TrendingUp, 
  ArrowUpRight, 
  ChevronRight, 
  Star, 
  Calendar,
  Filter,
  CheckCircle2,
  Clock,
  ExternalLink
} from 'lucide-react';
import { 
  superAdminStats, 
  superAdminSalesTrend, 
  superAdminOrdersOverview, 
  superAdminRevenueBreakdown, 
  superAdminTopStores 
} from '../../data/superAdminData';

export default function AdminDashboard() {
  const [salesPeriod, setSalesPeriod] = useState('Weekly');
  const [hoveredPoint, setHoveredPoint] = useState(5); // Default to Saturday

  // Calculate coordinates for SVG line chart
  const maxValue = Math.max(...superAdminSalesTrend.map(d => d.value)) * 1.15;
  const chartHeight = 220;
  const chartWidth = 600;
  const paddingX = 40;
  const paddingY = 30;

  const points = superAdminSalesTrend.map((d, index) => {
    const x = paddingX + (index * (chartWidth - 2 * paddingX)) / (superAdminSalesTrend.length - 1);
    const y = chartHeight - paddingY - (d.value / maxValue) * (chartHeight - 2 * paddingY);
    return { x, y, ...d };
  });

  const pathD = points.reduce((acc, point, i) => {
    return i === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${chartHeight - paddingY} L ${points[0].x} ${chartHeight - paddingY} Z`;

  return (
    <div className="space-y-6">
      {/* Header Greeting */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Super Admin Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time multi-vendor metrics, revenue breakdowns, and platform health.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/admin/stores/approve-reject"
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-sm shadow-emerald-600/20 transition-colors"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Store Approvals (18)</span>
          </Link>
        </div>
      </div>

      {/* 4 Primary Top Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {superAdminStats.map((stat, idx) => {
          const icons = [Store, Bike, Users, TrendingUp];
          const Icon = icons[idx % icons.length];
          const colorStyles = {
            emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', badge: 'bg-emerald-50 text-emerald-700' },
            amber: { bg: 'bg-amber-50', text: 'text-amber-600', badge: 'bg-amber-50 text-amber-700' },
            rose: { bg: 'bg-rose-50', text: 'text-rose-600', badge: 'bg-rose-50 text-rose-700' },
            sky: { bg: 'bg-sky-50', text: 'text-sky-600', badge: 'bg-sky-50 text-sky-700' }
          }[stat.color];

          return (
            <div 
              key={stat.title}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.title}
                </span>
                <div className={`p-2.5 rounded-xl ${colorStyles.bg} ${colorStyles.text}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {stat.value}
                </h3>
                <span className={`inline-flex items-center text-xs font-bold px-2 py-0.5 rounded-md ${colorStyles.badge}`}>
                  <ArrowUpRight className="w-3 h-3 mr-0.5" />
                  {stat.change}
                </span>
              </div>

              <p className="text-[11px] text-slate-400 font-medium">
                {stat.subtext}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Charts Row: Sales Overview & 2 Donut Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Overview Line Chart (2 Cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-xs flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Sales Overview
              </h2>
              <p className="text-xs text-slate-400">
                Gross merchandise volume across all active vendor branches
              </p>
            </div>

            <div className="inline-flex bg-slate-100 p-1 rounded-xl text-xs font-medium text-slate-600">
              {['Daily', 'Weekly', 'Monthly'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSalesPeriod(period)}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    salesPeriod === period 
                      ? 'bg-white text-slate-900 font-semibold shadow-xs' 
                      : 'hover:text-slate-900'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Line Chart */}
          <div className="relative w-full aspect-[2.4/1] max-h-72">
            <svg 
              viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
              className="w-full h-full overflow-visible"
            >
              <defs>
                <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[0, 1, 2, 3].map((g) => {
                const y = paddingY + (g * (chartHeight - 2 * paddingY)) / 3;
                return (
                  <line 
                    key={g} 
                    x1={paddingX} 
                    y1={y} 
                    x2={chartWidth - paddingX} 
                    y2={y} 
                    stroke="#F1F5F9" 
                    strokeDasharray="4 4" 
                  />
                );
              })}

              {/* Area & Line */}
              <path d={areaD} fill="url(#salesGrad)" />
              <path d={pathD} fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

              {/* Data points */}
              {points.map((p, idx) => (
                <g key={idx} className="cursor-pointer" onClick={() => setHoveredPoint(idx)}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={hoveredPoint === idx ? '6' : '4'}
                    className={`${hoveredPoint === idx ? 'fill-white stroke-[#22C55E] stroke-[3]' : 'fill-[#22C55E]'}`}
                  />
                  <text
                    x={p.x}
                    y={chartHeight - 8}
                    textAnchor="middle"
                    className="text-[11px] fill-slate-400 font-medium"
                  >
                    {p.day}
                  </text>
                </g>
              ))}

              {/* Highlight callout on Saturday */}
              {hoveredPoint !== null && (
                <g transform={`translate(${points[hoveredPoint].x}, ${points[hoveredPoint].y - 38})`}>
                  <rect
                    x="-85"
                    y="-10"
                    width="170"
                    height="28"
                    rx="6"
                    fill="#1E293B"
                    className="shadow-lg"
                  />
                  <text
                    x="0"
                    y="8"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    className="text-[10px] font-semibold tracking-wide"
                  >
                    {points[hoveredPoint].highlight || `${points[hoveredPoint].day}: RS ${points[hoveredPoint].value.toLocaleString()}`}
                  </text>
                  <polygon
                    points="-5,18 5,18 0,23"
                    fill="#1E293B"
                  />
                </g>
              )}
            </svg>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
            <span>Peak Day: <strong className="text-slate-800">Saturday (RS 310,250)</strong></span>
            <span>Weekly Growth: <strong className="text-emerald-600">+16.4%</strong></span>
          </div>
        </div>

        {/* Donut Charts Column (1 Col) */}
        <div className="space-y-6">
          {/* Orders Overview Donut */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-sm">Orders Overview</h3>
              <span className="text-[11px] text-slate-400">Total: 4,890 Orders</span>
            </div>

            <div className="flex items-center justify-center gap-6">
              {/* CSS Conic Donut representation */}
              <div 
                className="w-28 h-28 rounded-full relative flex items-center justify-center shadow-inner"
                style={{
                  background: 'conic-gradient(#22C55E 0% 65%, #F59E0B 65% 85%, #EF4444 85% 100%)'
                }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center shadow-xs">
                  <span className="text-xs font-bold text-slate-800">65%</span>
                  <span className="text-[9px] text-slate-400 uppercase">Success</span>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2 text-xs">
                {superAdminOrdersOverview.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-slate-600 font-medium">{item.label}</span>
                    <span className="text-slate-900 font-bold ml-auto">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Revenue Breakdown Donut */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-sm">Revenue Breakdown</h3>
              <span className="text-[11px] text-slate-400">Take Rate: 15%</span>
            </div>

            <div className="flex items-center justify-center gap-6">
              {/* CSS Conic Donut */}
              <div 
                className="w-28 h-28 rounded-full relative flex items-center justify-center shadow-inner"
                style={{
                  background: 'conic-gradient(#22C55E 0% 60%, #3B82F6 60% 85%, #F59E0B 85% 100%)'
                }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center shadow-xs">
                  <span className="text-xs font-bold text-slate-800">RS 1.2M</span>
                  <span className="text-[9px] text-slate-400 uppercase">Gross</span>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2 text-xs">
                {superAdminRevenueBreakdown.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-slate-600 font-medium">{item.label}</span>
                    <span className="text-slate-900 font-bold ml-auto">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performance Stores Table Preview */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="p-5 sm:px-6 flex items-center justify-between border-b border-slate-100">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Top Performance Stores
            </h2>
            <p className="text-xs text-slate-400">
              Stores ranked by gross sales volume and fulfillment satisfaction
            </p>
          </div>

          <Link
            to="/admin/stores/top"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#22C55E] hover:text-emerald-700 hover:underline"
          >
            <span>View all</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-6">Store Name</th>
                <th className="py-3.5 px-6">Category</th>
                <th className="py-3.5 px-6">Total Orders</th>
                <th className="py-3.5 px-6">Total Revenue</th>
                <th className="py-3.5 px-6">Rating</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {superAdminTopStores.map((store) => (
                <tr key={store.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={store.image}
                        alt={store.name}
                        className="w-10 h-10 rounded-xl object-cover border border-slate-200/80"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">{store.name}</p>
                        <p className="text-[11px] text-slate-400">{store.zone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {store.category}
                  </td>
                  <td className="py-4 px-6 text-slate-800 font-semibold">
                    {store.orders.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">
                    {store.revenue}
                  </td>
                  <td className="py-4 px-6">
                    <div className="inline-flex items-center gap-1 text-slate-700 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{store.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      {store.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      to="/admin/stores"
                      className="p-1.5 inline-flex text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      title="View store detail"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
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
