'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Users, UserSearch, TrendingUp, CheckCircle, XCircle,
  Phone, Sparkles, Calendar, Building2, ArrowRight, Loader2
} from 'lucide-react';
import CrmHeader from './components/CrmHeader';
import StatsCard from './components/StatsCard';
import StatusBadge from './components/StatusBadge';
import { useSidebar } from './layout';
import { getVendorStats, getLeadStats, getVendors, getLeads } from './lib/supabase-crm';
import type { VendorStats, LeadStats, Vendor, CustomerLead } from './lib/types';

export default function CrmDashboard() {
  const { open } = useSidebar();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [vendorStats, setVendorStats] = useState<VendorStats | null>(null);
  const [leadStats, setLeadStats] = useState<LeadStats | null>(null);
  const [recentVendors, setRecentVendors] = useState<Vendor[]>([]);
  const [recentLeads, setRecentLeads] = useState<CustomerLead[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const [vs, ls, vendors, leads] = await Promise.all([
          getVendorStats(),
          getLeadStats(),
          getVendors(),
          getLeads(),
        ]);
        setVendorStats(vs);
        setLeadStats(ls);
        setRecentVendors(vendors.slice(0, 5));
        setRecentLeads(leads.slice(0, 5));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <>
      <CrmHeader
        title="Dashboard"
        subtitle="Welcome back! Here's what's happening."
        onMenuClick={open}
        actions={
          <div className="flex gap-2">
            <Link
              href="/crm/vendors/new"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              <Users size={16} /> Add Vendor
            </Link>
            <Link
              href="/crm/leads/new"
              className="hidden sm:flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <UserSearch size={16} /> Add Lead
            </Link>
          </div>
        }
      />

      <div className="p-4 sm:p-6 space-y-6">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 size={32} className="animate-spin text-red-500" />
          </div>
        ) : (
          <>
            {/* ─── Vendor Stats ─── */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" /> Vendors
                </h2>
                <Link href="/crm/vendors" className="text-xs text-red-600 hover:underline flex items-center gap-1">
                  View all <ArrowRight size={12} />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <StatsCard title="Total Vendors" value={vendorStats?.total ?? 0} icon={Users} color="red" />
                <StatsCard title="New" value={vendorStats?.new ?? 0} icon={Sparkles} color="gray" />
                <StatsCard title="Contacted" value={vendorStats?.contacted ?? 0} icon={Phone} color="blue" />
                <StatsCard title="Interested" value={vendorStats?.interested ?? 0} icon={TrendingUp} color="amber" />
                <StatsCard title="Converted" value={vendorStats?.converted ?? 0} icon={CheckCircle} color="green" />
                <StatsCard title="Lost" value={vendorStats?.lost ?? 0} icon={XCircle} color="red" />
              </div>
            </section>

            {/* ─── Lead Stats ─── */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500" /> Customer Leads
                </h2>
                <Link href="/crm/leads" className="text-xs text-red-600 hover:underline flex items-center gap-1">
                  View all <ArrowRight size={12} />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <StatsCard title="Total Leads" value={leadStats?.total ?? 0} icon={UserSearch} color="blue" />
                <StatsCard title="Upcoming Events" value={leadStats?.upcoming_events ?? 0} icon={Calendar} color="purple" />
                <StatsCard title="Contacted" value={leadStats?.contacted ?? 0} icon={Phone} color="blue" />
                <StatsCard title="Interested" value={leadStats?.interested ?? 0} icon={TrendingUp} color="amber" />
                <StatsCard title="Converted" value={leadStats?.converted ?? 0} icon={CheckCircle} color="green" />
                <StatsCard title="Lost" value={leadStats?.lost ?? 0} icon={XCircle} color="red" />
              </div>
            </section>

            {/* ─── Tables ─── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Vendors */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <Users size={16} className="text-red-500" /> Recent Vendors
                  </h3>
                  <Link href="/crm/vendors" className="text-xs text-red-600 hover:underline">View all</Link>
                </div>
                <div className="divide-y divide-gray-50">
                  {recentVendors.length === 0 ? (
                    <p className="text-center text-gray-400 text-sm py-8">No vendors yet</p>
                  ) : recentVendors.map(v => (
                    <div
                      key={v.id}
                      onClick={() => router.push(`/crm/vendors/${v.id}`)}
                      className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-700 text-xs font-bold">{v.company_name[0]}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 truncate">{v.company_name}</p>
                        <p className="text-xs text-gray-400 truncate">{v.contact_person} · {(v.city as { name?: string } | null)?.name ?? '—'}</p>
                      </div>
                      <StatusBadge status={v.status} size="sm" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Leads */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <UserSearch size={16} className="text-blue-500" /> Recent Leads
                  </h3>
                  <Link href="/crm/leads" className="text-xs text-red-600 hover:underline">View all</Link>
                </div>
                <div className="divide-y divide-gray-50">
                  {recentLeads.length === 0 ? (
                    <p className="text-center text-gray-400 text-sm py-8">No leads yet</p>
                  ) : recentLeads.map(l => (
                    <div
                      key={l.id}
                      onClick={() => router.push(`/crm/leads/${l.id}`)}
                      className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-700 text-xs font-bold">{l.customer_name[0]}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 truncate">{l.customer_name}</p>
                        <p className="text-xs text-gray-400 truncate">
                          {(l.city as { name?: string } | null)?.name ?? '—'}
                          {l.event_date ? ` · ${new Date(l.event_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}` : ''}
                        </p>
                      </div>
                      <StatusBadge status={l.status} size="sm" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: '/crm/vendors/new', label: 'Add Vendor', icon: Users, color: 'bg-red-600' },
                { href: '/crm/leads/new', label: 'Add Lead', icon: UserSearch, color: 'bg-blue-600' },
                { href: '/crm/cities', label: 'Manage Cities', icon: Building2, color: 'bg-gray-700' },
                { href: '/crm/categories', label: 'Categories', icon: Sparkles, color: 'bg-purple-600' },
              ].map(({ href, label, icon: Icon, color }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow group"
                >
                  <div className={`w-9 h-9 ${color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{label}</span>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
