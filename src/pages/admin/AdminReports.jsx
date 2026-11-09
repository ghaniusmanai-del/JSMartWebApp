import React, { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  Download, 
  Eye, 
  Search, 
  Filter, 
  CheckCircle, 
  Clock, 
  FileSpreadsheet, 
  Plus
} from 'lucide-react';
import { superAdminReportsData } from '../../data/superAdminData';

export default function AdminReports() {
  const [reports, setReports] = useState(superAdminReportsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredReports = reports.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || r.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (name, format) => {
    alert(`Initiating download for "${name}.${format.toLowerCase()}"...`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Platform Reports & Audits
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Automated compliance statements, tax ledgers, sales reconciliations, and cohort exports.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Configuring new automated scheduled report run...')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl text-xs sm:text-sm font-semibold shadow-sm shadow-green-500/20 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Generate Custom Report</span>
          </button>
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Total Reports</span>
            <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">128</p>
          <p className="text-[11px] text-slate-400 mt-1">Archived in secure cloud</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Scheduled Cron</span>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">14</p>
          <p className="text-[11px] text-emerald-600 font-semibold mt-1">Daily & Weekly runs</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Viewed Online</span>
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600">
              <Eye className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">340</p>
          <p className="text-[11px] text-slate-400 mt-1">Admin access sessions</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase">Downloaded</span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
              <Download className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">210</p>
          <p className="text-[11px] text-slate-400 mt-1">PDF & Excel files</p>
        </div>
      </div>

      {/* Search and Category Filter Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search report by title or code..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {['All', 'Finance', 'Settlements', 'Operations', 'Legal & Tax', 'Inventory'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                categoryFilter === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Reports Directory Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-6">Report Title & ID</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Frequency</th>
                <th className="py-4 px-6">Last Generated Date</th>
                <th className="py-4 px-6">Format & Size</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredReports.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${r.format === 'PDF' ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'}`}>
                        {r.format === 'PDF' ? <FileText className="w-5 h-5" /> : <FileSpreadsheet className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{r.name}</p>
                        <span className="text-[11px] text-slate-400 font-mono">{r.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {r.category}
                  </td>
                  <td className="py-4 px-6 text-slate-800 font-semibold">
                    {r.frequency}
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    {r.generatedDate}
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-mono text-xs text-slate-700 bg-slate-100 px-2 py-0.5 rounded mr-1.5 font-bold">
                      .{r.format}
                    </span>
                    <span className="text-[11px] text-slate-400">{r.size}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {r.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button
                        onClick={() => alert(`Opening browser viewer for ${r.name}`)}
                        className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                        title="View Report Online"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDownload(r.name, r.format)}
                        className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                        title="Download Document"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
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
