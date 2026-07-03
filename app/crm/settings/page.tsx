'use client';

import { useState } from 'react';
import { Shield, User, Save, Loader2, Check } from 'lucide-react';
import CrmHeader from '../components/CrmHeader';
import { useSidebar } from '../layout';

export default function SettingsPage() {
  const { open } = useSidebar();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const [form, setForm] = useState({
    username: 'Rahul Medhe',
    email: 'rahul@planmybaraat.com',
    role: 'Administrator',
    notifications: true,
    leadAlerts: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }, 800);
  };

  return (
    <>
      <CrmHeader title="Settings" subtitle="Manage your profile and configuration" onMenuClick={open} />
      <div className="p-4 sm:p-6 max-w-2xl mx-auto space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-gray-50/50">
              <User size={18} className="text-red-500" />
              <h3 className="font-semibold text-gray-800 text-sm">Account Settings</h3>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Full Name</label>
                <input value={form.username} onChange={e => setForm(f => ({ ...f, username: e.target.value }))} className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500/30 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Admin Email</label>
                <input value={form.email} readOnly className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Role</label>
                <input value={form.role} readOnly className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed outline-none" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-gray-50/50">
              <Shield size={18} className="text-red-500" />
              <h3 className="font-semibold text-gray-800 text-sm">Preferences & Alerts</h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-800">Email Notifications</p>
                  <p className="text-xs text-gray-400">Receive daily summary reports</p>
                </div>
                <input type="checkbox" checked={form.notifications} onChange={e => setForm(f => ({ ...f, notifications: e.target.checked }))} className="w-5 h-5 text-red-600 focus:ring-red-500 border-gray-300 rounded" />
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div>
                  <p className="text-sm font-semibold text-gray-800">New Lead Alerts</p>
                  <p className="text-xs text-gray-400">Get notified instantly when customer lead registers</p>
                </div>
                <input type="checkbox" checked={form.leadAlerts} onChange={e => setForm(f => ({ ...f, leadAlerts: e.target.checked }))} className="w-5 h-5 text-red-600 focus:ring-red-500 border-gray-300 rounded" />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button type="submit" disabled={saving} className="px-6 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-xl hover:bg-red-700 disabled:opacity-50 transition-colors flex items-center gap-2">
              {saving ? <Loader2 size={16} className="animate-spin" /> : saved ? <Check size={16} /> : <Save size={16} />}
              {saved ? 'Saved!' : 'Save Settings'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
