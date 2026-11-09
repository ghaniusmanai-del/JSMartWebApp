import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronRight, 
  Upload, 
  Edit3, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  ShieldCheck, 
  Building2, 
  Bell, 
  Sliders, 
  Calendar 
} from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import jsMartLogo from '../assets/JSMartLogoSimple.png';
import { initialStoreSettings } from '../data/dummyData';

export default function StoreSettings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Store Information'); 
  // 'Store Information' | 'Store Settings' | 'Payment Setting' | 'Notifications'

  const [settings, setSettings] = useState(initialStoreSettings);
  const [storeLogoUrl, setStoreLogoUrl] = useState(jsMartLogo);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [editingBusinessHours, setEditingBusinessHours] = useState(false);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStoreLogoUrl(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const toggleGateway = (id) => {
    setSettings(prev => ({
      ...prev,
      gateways: prev.gateways.map(g => g.id === id ? { ...g, status: !g.status } : g)
    }));
  };

  const toggleNotificationType = (index, field) => {
    setSettings(prev => {
      const nextPref = [...prev.notifications.preferences];
      nextPref[index] = { ...nextPref[index], [field]: !nextPref[index][field] };
      return {
        ...prev,
        notifications: { ...prev.notifications, preferences: nextPref }
      };
    });
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {savedSuccess && (
        <div className="fixed top-6 right-6 z-50 bg-[#22C55E] text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 text-sm font-semibold animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-white" />
          <span>Settings saved successfully!</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <span className="text-slate-300">|</span>
            <h1 className="text-2xl font-bold text-slate-800">Store Setting</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">Manage your store information and prefrences</p>
        </div>

        <button
          onClick={handleSave}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-medium text-sm shadow-sm transition-all hover:shadow"
        >
          <span>Save Changes</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-slate-200 overflow-x-auto gap-8 text-xs font-semibold text-slate-500 pb-0">
        {[
          { id: 'Store Information', label: 'Store Information' },
          { id: 'Store Settings', label: 'Store Settings' },
          { id: 'Payment Setting', label: 'Payment Setting' },
          { id: 'Notifications', label: 'Notifications' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3.5 relative whitespace-nowrap transition-colors ${
              activeTab === tab.id 
                ? 'text-[#22C55E] font-bold' 
                : 'hover:text-slate-800'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#22C55E] rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* TAB 1: STORE INFORMATION */}
      {activeTab === 'Store Information' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Store Information Form */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-5">
            <div>
              <h2 className="text-base font-bold text-slate-800">Store information</h2>
              <p className="text-xs text-slate-400">Update your store details and contact information.</p>
            </div>

            {/* Logo Upload Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-2 shadow-sm overflow-hidden">
                <img src={storeLogoUrl} alt="Store Logo" className="w-16 h-16 object-contain" />
              </div>
              <div className="text-center sm:text-left space-y-1">
                <span className="text-xs font-semibold text-slate-700 block">Store Logo</span>
                <p className="text-[11px] text-slate-400">PNG, JPG upto 2mb</p>
                <label className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-lg text-xs font-medium cursor-pointer transition-colors shadow-sm mt-1">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Logo</span>
                  <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                </label>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Store Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={settings.information.storeName}
                    onChange={(e) => setSettings({
                      ...settings,
                      information: { ...settings.information, storeName: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Store owner <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={settings.information.storeOwner}
                    onChange={(e) => setSettings({
                      ...settings,
                      information: { ...settings.information, storeOwner: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={settings.information.email}
                    onChange={(e) => setSettings({
                      ...settings,
                      information: { ...settings.information, email: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={settings.information.phone}
                    onChange={(e) => setSettings({
                      ...settings,
                      information: { ...settings.information, phone: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Secondary Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  value={settings.information.secondaryEmail}
                  onChange={(e) => setSettings({
                    ...settings,
                    information: { ...settings.information, secondaryEmail: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  NTN Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={settings.information.ntnNumber}
                  onChange={(e) => setSettings({
                    ...settings,
                    information: { ...settings.information, ntnNumber: e.target.value }
                  })}
                  placeholder="Enter Number"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              {/* City, State, Postal Code, Country */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">City</label>
                  <input
                    type="text"
                    value={settings.information.city}
                    onChange={(e) => setSettings({
                      ...settings,
                      information: { ...settings.information, city: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">State/Province</label>
                  <input
                    type="text"
                    value={settings.information.state}
                    onChange={(e) => setSettings({
                      ...settings,
                      information: { ...settings.information, state: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Postal Code</label>
                  <input
                    type="text"
                    value={settings.information.postalCode}
                    onChange={(e) => setSettings({
                      ...settings,
                      information: { ...settings.information, postalCode: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Country</label>
                  <input
                    type="text"
                    value={settings.information.country}
                    onChange={(e) => setSettings({
                      ...settings,
                      information: { ...settings.information, country: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Store Description
                </label>
                <textarea
                  rows={3}
                  value={settings.information.description}
                  onChange={(e) => setSettings({
                    ...settings,
                    information: { ...settings.information, description: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Right: Side Cards (Status, Hours, Statistics) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Store Status Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-3.5">
              <h2 className="text-base font-bold text-slate-800">Store Status</h2>

              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Current Status</span>
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md font-semibold text-[11px]">
                    • Active
                  </span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Member Since</span>
                  <span className="font-semibold text-slate-800">{settings.status.memberSince}</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Last Updated</span>
                  <span className="font-semibold text-slate-800">{settings.status.lastUpdated}</span>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-3.5">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-800">Business Hours</h2>
                <button
                  onClick={() => setEditingBusinessHours(!editingBusinessHours)}
                  className="px-2.5 py-1 text-xs border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50"
                >
                  Edit
                </button>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {settings.businessHours.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex justify-between items-center">
                    <span className="text-slate-600 font-medium">{item.days}</span>
                    <span className="font-semibold text-slate-800">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Store Statistics Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-3.5">
              <h2 className="text-base font-bold text-slate-800">Store Statistics</h2>

              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Total Products</span>
                  <span className="font-bold text-slate-800">{settings.statistics.totalProducts}</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Total orders</span>
                  <span className="font-bold text-slate-800">{settings.statistics.totalOrders}</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Total Customers</span>
                  <span className="font-bold text-slate-800">{settings.statistics.totalCustomers}</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Active Users</span>
                  <span className="font-bold text-slate-800">{settings.statistics.activeUsers}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: STORE SETTINGS / GENERAL SETTINGS */}
      {activeTab === 'Store Settings' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: General Settings Form */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-5">
            <div>
              <h2 className="text-base font-bold text-slate-800">Store Settings</h2>
              <p className="text-xs text-slate-400">Update your store general settings and Configurations.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Store Currency</label>
                <p className="text-[11px] text-slate-400 mb-1.5">Select Default Currency for your store</p>
                <select
                  value={settings.general.currency}
                  onChange={(e) => setSettings({
                    ...settings,
                    general: { ...settings.general, currency: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option>(PKR) Pakistani Rupees</option>
                  <option>(USD) US Dollar</option>
                  <option>(EUR) Euro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Time zone</label>
                <p className="text-[11px] text-slate-400 mb-1.5">Select the Time zone of your state</p>
                <select
                  value={settings.general.timezone}
                  onChange={(e) => setSettings({
                    ...settings,
                    general: { ...settings.general, timezone: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option>(GMT+5:00)Asia/Karachi</option>
                  <option>(GMT+0:00)UTC</option>
                  <option>(GMT+1:00)London</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Date Format</label>
                <p className="text-[11px] text-slate-400 mb-1.5">Select Date Formate for your store</p>
                <select
                  value={settings.general.dateFormat}
                  onChange={(e) => setSettings({
                    ...settings,
                    general: { ...settings.general, dateFormat: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option>May 20, 2026 (MM/DD/YYYY)</option>
                  <option>20/05/2026 (DD/MM/YYYY)</option>
                  <option>2026-05-20 (YYYY-MM-DD)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Store Timings</label>
                <p className="text-[11px] text-slate-400 mb-2">Select Timings</p>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700">
                    <input
                      type="radio"
                      name="timings"
                      checked={settings.general.timings === '12 Hours (AM/PM)'}
                      onChange={() => setSettings({
                        ...settings,
                        general: { ...settings.general, timings: '12 Hours (AM/PM)' }
                      })}
                      className="accent-[#22C55E]"
                    />
                    <span>12 Hours (AM/PM)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700">
                    <input
                      type="radio"
                      name="timings"
                      checked={settings.general.timings === '24 Hours'}
                      onChange={() => setSettings({
                        ...settings,
                        general: { ...settings.general, timings: '24 Hours' }
                      })}
                      className="accent-[#22C55E]"
                    />
                    <span>24 Hours</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Language</label>
                <p className="text-[11px] text-slate-400 mb-1.5">Select the Default language for Store.</p>
                <select
                  value={settings.general.language}
                  onChange={(e) => setSettings({
                    ...settings,
                    general: { ...settings.general, language: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option>English</option>
                  <option>Urdu</option>
                  <option>Arabic</option>
                </select>
              </div>

              {/* Store Analytics Toggle */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <div>
                  <p className="text-xs font-bold text-slate-800">Store Analytics</p>
                  <p className="text-[11px] text-slate-400">Enable or Disable Store Analytics of your Store.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.general.storeAnalytics}
                    onChange={(e) => setSettings({
                      ...settings,
                      general: { ...settings.general, storeAnalytics: e.target.checked }
                    })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#22C55E]"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Right: System Performance & Business Calendar */}
          <div className="lg:col-span-4 space-y-6">
            {/* System Performance Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-3.5">
              <h2 className="text-base font-bold text-slate-800">System Performance</h2>

              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Currency</span>
                  <span className="font-semibold text-slate-800">PKR Pakistani Rupees</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Time zone</span>
                  <span className="font-semibold text-slate-800">Asia/ Karachi</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Date Format</span>
                  <span className="font-semibold text-slate-800">May 20, 2026 (MM/DD/YYYY)</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Time Format</span>
                  <span className="font-semibold text-slate-800">12 Hours (AM/PM)</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Language</span>
                  <span className="font-semibold text-slate-800">English</span>
                </div>
              </div>
            </div>

            {/* Business Calendar Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-3.5">
              <h2 className="text-base font-bold text-slate-800">Business Calendar</h2>

              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Week Start Day</span>
                  <span className="font-semibold text-slate-800">Monday</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Business Day</span>
                  <span className="font-semibold text-slate-800">Mon - Sun</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-500">Holidays</span>
                  <span className="font-semibold text-slate-800">12 Days</span>
                </div>
              </div>

              <button
                onClick={() => {}}
                className="w-full mt-2 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Manage Holidays
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PAYMENT SETTING */}
      {activeTab === 'Payment Setting' && (
        <div className="space-y-6">
          {/* Top: Payment Flow Information Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
            <div>
              <h2 className="text-base font-bold text-slate-800">Payment Flow Information</h2>
              <p className="text-xs text-slate-400">
                All Payments FROM Customers will be Directed to the super Admins bank Account
              </p>
            </div>

            {/* 3 Steps Flow Diagram matching Figma */}
            <div className="py-6 flex flex-col md:flex-row items-center justify-around gap-6 text-center">
              {/* Step 1: Customer */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#22C55E] flex items-center justify-center border-2 border-emerald-200 shadow-sm">
                  <User className="w-8 h-8" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 mt-3">Customer</h4>
                <p className="text-[11px] text-slate-400">Makes Payment</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-1 text-slate-400">
                <span className="tracking-widest hidden md:inline">-----------------&gt;</span>
                <span className="md:hidden">↓</span>
              </div>

              {/* Step 2: Super Admin */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center border-2 border-indigo-200 shadow-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 mt-3">Super Admin</h4>
                <p className="text-[11px] text-slate-400">Receives Payment</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-1 text-slate-400">
                <span className="tracking-widest hidden md:inline">-----------------&gt;</span>
                <span className="md:hidden">↓</span>
              </div>

              {/* Step 3: Super Admin Bank */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center border-2 border-sky-200 shadow-sm">
                  <Building2 className="w-8 h-8" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 mt-3">Super Admin Bank</h4>
                <p className="text-[11px] text-slate-400">Final Destination</p>
              </div>
            </div>

            {/* Important Note Callout Banner */}
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600">
                <strong className="text-emerald-700">Important Note:</strong> Customers will make Payments using the available payment methods. All Payments will be received in the super Admins bank Account. Store Owners will not receive Payments directly.
              </div>
            </div>
          </div>

          {/* Bottom: Payment Gateways Table Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
            <div>
              <h2 className="text-base font-bold text-slate-800">Payment Gateways</h2>
              <p className="text-xs text-slate-400">Manage the Payment Gateways and Methods Connected to your Store</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-100">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                    <th className="py-3 px-4">Payment Method</th>
                    <th className="py-3 px-4">Provider</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {settings.gateways.map((gw) => (
                    <tr key={gw.id} className="hover:bg-slate-50/80 transition-colors">
                      {/* Gateway Name + Logo */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[10px] text-white shadow-sm ${
                            gw.id === 'jazzcash' ? 'bg-red-600' :
                            gw.id === 'easypaisa' ? 'bg-emerald-500' :
                            gw.id === 'hbl' ? 'bg-[#008269]' :
                            gw.id === 'meezan' ? 'bg-[#4B1E78]' : 'bg-[#EF3829]'
                          }`}>
                            {gw.logo}
                          </div>
                          <span className="font-semibold text-slate-800">{gw.name}</span>
                        </div>
                      </td>

                      {/* Provider Select */}
                      <td className="py-3.5 px-4">
                        <select className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none">
                          <option>{gw.provider}</option>
                        </select>
                      </td>

                      {/* Status Toggle */}
                      <td className="py-3.5 px-4 text-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={gw.status}
                            onChange={() => toggleGateway(gw.id)}
                            className="sr-only peer"
                          />
                          <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#22C55E]"></div>
                        </label>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => {}}
                          className="px-4 py-1 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50"
                        >
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: NOTIFICATIONS */}
      {activeTab === 'Notifications' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Notification Rules & Matrix */}
          <div className="lg:col-span-8 space-y-6">
            {/* Preferences Header Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-5">
              <div>
                <h2 className="text-base font-bold text-slate-800">Notifications Settings</h2>
                <p className="text-xs text-slate-400">Configure where and how you receive alerts and Updates</p>
              </div>

              {/* Global Preferences Toggle */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Global Notifications Preferences</h4>
                  <p className="text-[11px] text-slate-400">Control your overall Notification Experience.</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500">Enable All Notifications</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifications.globalEnabled}
                      onChange={(e) => setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, globalEnabled: e.target.checked }
                      })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#22C55E]"></div>
                  </label>
                </div>
              </div>

              {/* Default Notification Level Pills */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Default Notification Level</h4>
                  <p className="text-[11px] text-slate-400">Choose the Default Importance level for notifications.</p>
                </div>
                <div className="inline-flex bg-slate-100 p-1 rounded-xl text-xs font-medium text-slate-600 self-start sm:self-auto">
                  {['Critical Only', 'Important', 'All'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, defaultLevel: level }
                      })}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        settings.notifications.defaultLevel === level
                          ? 'bg-[#22C55E] text-white shadow-sm font-semibold'
                          : 'hover:text-slate-900'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Matrix Table */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <div className="overflow-x-auto rounded-xl border border-slate-100">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="py-3 px-4">Notification Type</th>
                      <th className="py-3 px-4 text-center">Email</th>
                      <th className="py-3 px-4 text-center">System Popup</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {settings.notifications.preferences.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4">
                          <p className="font-semibold text-slate-800">{item.type}</p>
                          <p className="text-[11px] text-slate-400">{item.description}</p>
                        </td>

                        {/* Email Column: Threshold or Toggle */}
                        <td className="py-3.5 px-4 text-center">
                          {item.threshold ? (
                            <select className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 focus:outline-none">
                              <option>{item.threshold}</option>
                              <option>Below 50%</option>
                              <option>Below 20%</option>
                            </select>
                          ) : (
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={item.email}
                                onChange={() => toggleNotificationType(idx, 'email')}
                                className="sr-only peer"
                              />
                              <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#22C55E]"></div>
                            </label>
                          )}
                        </td>

                        {/* System Popup Toggle */}
                        <td className="py-3.5 px-4 text-center">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={item.popup}
                              onChange={() => toggleNotificationType(idx, 'popup')}
                              className="sr-only peer"
                            />
                            <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#22C55E]"></div>
                          </label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Email Notification Preferences */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-800">Email Notification Preferences</h2>

            <div className="space-y-4 pt-1">
              {/* Main Admin Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Main Store Admin Email</label>
                <div className="relative">
                  <input
                    type="email"
                    value={settings.notifications.emails.mainAdmin}
                    onChange={(e) => setSettings({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        emails: { ...settings.notifications.emails, mainAdmin: e.target.value }
                      }
                    })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 pr-10 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-500 hover:text-sky-600">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Fulfillment Team Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Fulfillment Team Email</label>
                <div className="relative">
                  <input
                    type="email"
                    value={settings.notifications.emails.fulfillment}
                    onChange={(e) => setSettings({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        emails: { ...settings.notifications.emails, fulfillment: e.target.value }
                      }
                    })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 pr-10 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-500 hover:text-sky-600">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Inventory Manager Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Inventory Manager Email</label>
                <div className="relative">
                  <input
                    type="email"
                    value={settings.notifications.emails.inventory}
                    onChange={(e) => setSettings({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        emails: { ...settings.notifications.emails, inventory: e.target.value }
                      }
                    })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 pr-10 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-500 hover:text-sky-600">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Customer Service Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Customer Service Email</label>
                <div className="relative">
                  <input
                    type="email"
                    value={settings.notifications.emails.customerService}
                    onChange={(e) => setSettings({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        emails: { ...settings.notifications.emails, customerService: e.target.value }
                      }
                    })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 pr-10 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-500 hover:text-sky-600">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
