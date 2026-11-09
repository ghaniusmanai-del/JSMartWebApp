import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShoppingBag, 
  Clock, 
  CheckCircle, 
  Bike, 
  ChevronRight, 
  TrendingUp, 
  TrendingDown, 
  Package 
} from 'lucide-react';
import { ordersCardsData } from '../data/dummyData';

export default function Orders() {
  const navigate = useNavigate();
  const [orders] = useState(ordersCardsData);
  const [sortOption, setSortOption] = useState('Sort By Newest');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <span className="text-slate-300">|</span>
        <h1 className="text-2xl font-bold text-slate-800">Order Management</h1>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* New Orders */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">New Orders</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-emerald-600 mt-2">18 New Orders</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <span>Yesterday</span>
            <span className="font-semibold text-emerald-500 flex items-center">
              +12% <TrendingUp className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </div>
        </div>

        {/* Orders In Processing */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Orders In Processing</span>
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-sky-600 mt-2">12 Processing</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <span>Last week</span>
            <span className="font-semibold text-sky-500 flex items-center">
              7.8% <TrendingUp className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </div>
        </div>

        {/* Completed Orders */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Completed Orders</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <CheckCircle className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-amber-500 mt-2">215 Completed</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <span>Last week</span>
            <span className="font-semibold text-amber-500 flex items-center">
              4.7% <TrendingUp className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </div>
        </div>

        {/* Out for Delivery */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Out for delivery</span>
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
              <Bike className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-rose-500 mt-2">15</p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <span>Last week</span>
            <span className="font-semibold text-rose-500 flex items-center">
              4.7% <TrendingDown className="w-3.5 h-3.5 ml-0.5" />
            </span>
          </div>
        </div>
      </div>

      {/* New Orders Section */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-800">New Orders</h2>
            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full text-xs font-bold">
              18
            </span>
          </div>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            <option>Sort By Newest</option>
            <option>Sort By Amount</option>
            <option>Sort By Distance</option>
          </select>
        </div>

        {/* Orders Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {orders.map((order, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow space-y-4"
            >
              {/* Header: Status Pill, Order ID & Timestamp */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-[#22C55E] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                    New
                  </span>
                  <span className="text-xs font-bold text-slate-800">{order.id}</span>
                </div>
                <span className="text-xs text-slate-400 font-medium">{order.time}</span>
              </div>

              {/* Customer & Amount Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center border border-emerald-200">
                    {order.avatar}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800">{order.customer}</h3>
                    <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mt-0.5">
                      <Package className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{order.itemsCount} Items</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium block">Order Amount</span>
                  <span className="text-base font-black text-[#22C55E]">{order.amount}</span>
                </div>
              </div>

              {/* Specs Row: Payment, Delivery, ETA */}
              <div className="grid grid-cols-3 gap-2 bg-slate-50/70 rounded-xl p-3 text-center border border-slate-100 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Payment</span>
                  <span className="font-semibold text-slate-700 text-[11px]">{order.paymentMethod}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Delivery</span>
                  <span className="font-semibold text-slate-700 text-[11px]">{order.distance}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">ETA</span>
                  <span className="font-semibold text-slate-700 text-[11px]">{order.eta}</span>
                </div>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => navigate('/orders/ORD-1111')}
                className="w-full py-3 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-semibold text-xs transition-colors shadow-sm"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* View All Orders Button */}
        <div className="pt-2 text-center">
          <button
            onClick={() => {}}
            className="w-full py-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            View All Orders
          </button>
        </div>
      </div>
    </div>
  );
}
