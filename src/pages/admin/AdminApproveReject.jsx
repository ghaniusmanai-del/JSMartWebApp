import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Search, 
  Filter, 
  Download, 
  FileCheck, 
  AlertCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Check,
  X,
  ExternalLink
} from 'lucide-react';
import { initialStoreApprovals } from '../../data/superAdminData';

export default function AdminApproveReject() {
  const [approvals, setApprovals] = useState(initialStoreApprovals);
  const [activeTab, setActiveTab] = useState('Pending');
  const [searchTerm, setSearchTerm] = useState('');
  const [notificationMsg, setNotificationMsg] = useState(null);
  const [selectedApp, setSelectedApp] = useState(null);

  const pendingCount = approvals.filter(a => a.status === 'Pending').length;
  const approvedCount = approvals.filter(a => a.status === 'Approved').length + 219;
  const rejectedCount = approvals.filter(a => a.status === 'Rejected').length + 9;

  const handleAction = (id, newStatus, reason = '') => {
    setApprovals(approvals.map(app => {
      if (app.id === id) {
        return { ...app, status: newStatus };
      }
      return app;
    }));

    const appName = approvals.find(a => a.id === id)?.storeName;
    setNotificationMsg({
      type: newStatus === 'Approved' ? 'success' : 'danger',
      text: `Store "${appName}" has been marked as ${newStatus}.`
    });

    setTimeout(() => {
      setNotificationMsg(null);
    }, 4000);
  };

  const filteredList = approvals.filter(app => {
    const matchesTab = app.status === activeTab;
    const matchesSearch = app.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Toast Notification Banner */}
      {notificationMsg && (
        <div className={`p-4 rounded-xl flex items-center justify-between text-xs sm:text-sm font-semibold transition-all ${
          notificationMsg.type === 'success' 
            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
            : 'bg-rose-50 text-rose-800 border border-rose-200'
        }`}>
          <div className="flex items-center gap-2">
            {notificationMsg.type === 'success' ? <CheckCircle className="w-5 h-5 text-emerald-600" /> : <XCircle className="w-5 h-5 text-rose-600" />}
            <span>{notificationMsg.text}</span>
          </div>
          <button onClick={() => setNotificationMsg(null)} className="text-slate-400 hover:text-slate-700">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Store Approve and Reject
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Review onboarding requests, inspect merchant licenses, and approve store applications.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Exporting store verification ledger...')}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 shadow-xs transition-colors"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('Pending')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'Pending'
              ? 'bg-amber-500 text-white shadow-sm shadow-amber-500/25'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Pending Approvals ({pendingCount})</span>
        </button>

        <button
          onClick={() => setActiveTab('Approved')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'Approved'
              ? 'bg-[#22C55E] text-white shadow-sm shadow-green-500/25'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <CheckCircle className="w-4 h-4" />
          <span>Approved Stores ({approvedCount})</span>
        </button>

        <button
          onClick={() => setActiveTab('Rejected')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'Rejected'
              ? 'bg-rose-600 text-white shadow-sm shadow-rose-600/25'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <XCircle className="w-4 h-4" />
          <span>Rejected Applications ({rejectedCount})</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by store name, applicant, or ID..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30 focus:border-[#22C55E]"
          />
        </div>

        <div className="text-xs text-slate-500 font-medium">
          Showing <span className="font-bold text-slate-900">{filteredList.length}</span> applications in {activeTab}
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        {filteredList.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <FileCheck className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-bold text-slate-700 text-base">No Applications in {activeTab}</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              All merchant applications under this filter have been processed or resolved.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  <th className="py-4 px-6">App ID</th>
                  <th className="py-4 px-6">Store & Category</th>
                  <th className="py-4 px-6">Owner Details</th>
                  <th className="py-4 px-6">Submitted Date & Time</th>
                  <th className="py-4 px-6">Doc Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {filteredList.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6">
                      <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded-md text-[11px]">
                        {app.id}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-bold text-slate-900">{app.storeName}</p>
                      <p className="text-[11px] text-slate-400">{app.category}</p>
                      <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {app.address}
                      </p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-semibold text-slate-800">{app.ownerName}</p>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1">
                        <Phone className="w-3 h-3 text-slate-400" />
                        {app.phone}
                      </p>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1">
                        <Mail className="w-3 h-3 text-slate-400" />
                        {app.email}
                      </p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{app.submissionDate}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        app.docStatus === 'Verified'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : app.docStatus === 'Under Review'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}>
                        {app.docStatus === 'Verified' ? <CheckCircle className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                        <span>{app.docStatus}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      {activeTab === 'Pending' ? (
                        <div className="inline-flex items-center gap-2">
                          <button
                            onClick={() => handleAction(app.id, 'Approved')}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Approve</span>
                          </button>
                          <button
                            onClick={() => handleAction(app.id, 'Rejected')}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg text-xs font-semibold border border-rose-200 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                            <span>Reject</span>
                          </button>
                        </div>
                      ) : activeTab === 'Approved' ? (
                        <button
                          onClick={() => handleAction(app.id, 'Rejected')}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 rounded-lg text-xs font-semibold transition-colors"
                        >
                          Revoke Approval
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAction(app.id, 'Approved')}
                          className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg text-xs font-semibold transition-colors"
                        >
                          Re-approve Store
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
