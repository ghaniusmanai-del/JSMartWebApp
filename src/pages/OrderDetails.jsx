import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  User, 
  MapPin, 
  CreditCard, 
  AlertCircle, 
  CheckCircle2, 
  X 
} from 'lucide-react';
import { orderDetailsData } from '../data/dummyData';

export default function OrderDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [order, setOrder] = useState(orderDetailsData);
  const [secondsRemaining, setSecondsRemaining] = useState(15 * 60); // 15 mins
  const [decisionState, setDecisionState] = useState(null); // 'accepted' | 'rejected' | null

  // Active Countdown Timer
  useEffect(() => {
    if (secondsRemaining <= 0 || decisionState) return;
    const interval = setInterval(() => {
      setSecondsRemaining(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsRemaining, decisionState]);

  const formatTimer = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(remainder).padStart(2, '0')} Mins`;
  };

  const toggleItemStock = (itemId) => {
    setOrder(prev => ({
      ...prev,
      items: prev.items.map(item => 
        item.id === itemId ? { ...item, outOfStock: !item.outOfStock } : item
      )
    }));
  };

  const handleAccept = () => {
    setDecisionState('accepted');
    setTimeout(() => {
      navigate('/orders');
    }, 2000);
  };

  const handleReject = () => {
    setDecisionState('rejected');
    setTimeout(() => {
      navigate('/orders');
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Feedback Banner */}
      {decisionState === 'accepted' && (
        <div className="bg-emerald-600 text-white p-4 rounded-2xl flex items-center gap-3 shadow-lg animate-fadeIn">
          <CheckCircle2 className="w-5 h-5" />
          <span className="font-semibold text-sm">Order #ORD-1111 has been ACCEPTED! Rider assigned for pickup.</span>
        </div>
      )}

      {decisionState === 'rejected' && (
        <div className="bg-rose-600 text-white p-4 rounded-2xl flex items-center gap-3 shadow-lg animate-fadeIn">
          <AlertCircle className="w-5 h-5" />
          <span className="font-semibold text-sm">Order #ORD-1111 has been REJECTED. Customer has been notified.</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/orders')}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <span className="text-slate-300">|</span>
          <h1 className="text-2xl font-bold text-slate-800">#ORD-1111</h1>
          <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md text-xs font-bold">
            New Order
          </span>
        </div>

        {/* Countdown Header */}
        <div className="text-left sm:text-right">
          <div className="inline-flex items-center gap-2 text-rose-500 bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-xl font-bold text-xs">
            <Clock className="w-3.5 h-3.5 animate-pulse" />
            <span>Accept Within {formatTimer(secondsRemaining)}</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">Cancel this order within 5 minutes.</p>
        </div>
      </div>

      {/* 3 Top Summary Pills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Customer */}
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <User className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider block">Customer</span>
            <p className="text-sm font-bold text-slate-800">{order.customer.name}</p>
          </div>
        </div>

        {/* Delivery */}
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider block">Delivery</span>
            <p className="text-sm font-bold text-slate-800">{order.delivery.distance}</p>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider block">Payment Method</span>
            <p className="text-sm font-bold text-emerald-600">{order.paymentMethod}</p>
          </div>
        </div>
      </div>

      {/* Main Content: Left Items Table & Right Order Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Order Items */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-800">Order Items</h2>
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full text-xs font-bold">
                {order.items.length}
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-100">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#EDF8F1] text-emerald-900 font-semibold border-b border-emerald-100">
                    <th className="py-3 px-4">Item</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4">Unit Price</th>
                    <th className="py-3 px-4">Total</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {order.items.map((item) => (
                    <tr 
                      key={item.id} 
                      className={`hover:bg-slate-50/80 transition-colors ${
                        item.outOfStock ? 'opacity-50 bg-rose-50/30' : ''
                      }`}
                    >
                      {/* Item */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200/60">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">{item.name}</p>
                            <p className="text-[10px] text-slate-400">#ID {item.sku}</p>
                          </div>
                        </div>
                      </td>

                      {/* Quantity */}
                      <td className="py-3 px-4 text-slate-700 font-semibold">{String(item.quantity).padStart(2, '0')}</td>

                      {/* Unit Price */}
                      <td className="py-3 px-4 text-slate-600">Rs. {item.unitPrice}</td>

                      {/* Total */}
                      <td className="py-3 px-4 text-slate-800 font-bold">Rs. {item.total}</td>

                      {/* Out of Stock Button */}
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => toggleItemStock(item.id)}
                          className={`px-3 py-1 rounded-lg border text-xs font-medium transition-colors ${
                            item.outOfStock
                              ? 'bg-rose-500 text-white border-rose-500'
                              : 'border-rose-300 text-rose-500 hover:bg-rose-50'
                          }`}
                        >
                          {item.outOfStock ? 'Mark In Stock' : 'Out of Stock'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Accept / Reject Bottom Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleReject}
              disabled={!!decisionState}
              className="w-full sm:flex-1 py-3 px-6 border border-rose-300 text-rose-600 hover:bg-rose-50 rounded-xl font-bold text-sm transition-colors disabled:opacity-50"
            >
              Reject Order
            </button>
            <button
              onClick={handleAccept}
              disabled={!!decisionState}
              className="w-full sm:flex-1 py-3 px-6 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-bold text-sm shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg disabled:opacity-50"
            >
              Accept Order
            </button>
          </div>
        </div>

        {/* Right Column: Order Summary Card */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-5">
          <h2 className="text-base font-bold text-slate-800">Order Summary</h2>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center text-slate-600">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-800">Rs. {order.pricing.subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center text-slate-600">
              <span>Delivery Fee</span>
              <span className="font-semibold text-slate-800">Rs. {order.pricing.deliveryFee}</span>
            </div>

            <div className="flex justify-between items-center text-slate-600">
              <span>Tax (2%)</span>
              <span className="font-semibold text-slate-800">Rs. {order.pricing.tax}</span>
            </div>

            <div className="flex justify-between items-center text-slate-600">
              <span>Discount</span>
              <span className="font-semibold text-rose-500">-Rs. {order.pricing.discount}</span>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
              <span className="font-bold text-slate-800 text-sm">Total Amount</span>
              <span className="font-black text-xl text-[#22C55E]">Rs. {order.pricing.total.toLocaleString()}</span>
            </div>

            <div className="pt-2 flex justify-between items-center">
              <span className="text-slate-500">Payment</span>
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md font-semibold text-[11px]">
                {order.paymentMethod}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
