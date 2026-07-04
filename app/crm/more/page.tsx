'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Building2, Tag, Package, Calculator, Settings, ChevronRight, HelpCircle, LogOut
} from 'lucide-react';
import CrmHeader from '../components/CrmHeader';
import { useSidebar } from '../layout';
import { crmSupabase } from '../lib/supabase-crm';

export default function MorePage() {
  const { open } = useSidebar();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await crmSupabase.auth.signOut();
    } catch {}
    localStorage.removeItem('crm_session');
    localStorage.removeItem('crm_user');
    router.push('/crm/login');
  };
  
  const menuItems = [
    { href: '/crm/cities', label: 'Cities Management', desc: 'Add or modify cities', icon: Building2 },
    { href: '/crm/categories', label: 'Categories Management', desc: 'Add or modify vendor categories', icon: Tag },
    { href: '/crm/packages', label: 'Packages Management', desc: 'Manage vendor pricing packages', icon: Package },
    { href: '/crm/package-maker', label: 'Package Maker', desc: 'Build packages from categories with pricing', icon: Calculator },
    { href: '/crm/settings', label: 'Settings', desc: 'System configuration & preferences', icon: Settings },
  ];

  return (
    <>
      <CrmHeader title="Menu" subtitle="Other system modules" onMenuClick={open} />
      <div className="p-4 sm:p-6 space-y-6 safe-area-pb">
        
        {/* User Card */}
        <div className="bg-[#111] rounded-2xl p-5 text-white flex items-center gap-4">
          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-xl font-bold">
            T
          </div>
          <div>
            <h3 className="font-bold text-lg">Tejabhai Patel</h3>
            <p className="text-gray-400 text-xs mt-0.5">tejabhai@planmybaraat.com</p>
            <span className="inline-block bg-red-600/25 text-red-400 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mt-2 border border-red-500/20">
              Administrator
            </span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
          {menuItems.map(({ href, label, desc, icon: Icon }) => (
            <Link key={href} href={href} className="flex items-center justify-between p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </Link>
          ))}
        </div>

        {/* Action Items */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
          
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-between p-4 hover:bg-red-50 text-red-600 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600">
                <LogOut size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold">Log Out</p>
                <p className="text-xs text-red-400 mt-0.5">End your CRM session</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-red-400" />
          </button>

          <div className="flex items-center justify-between p-4 text-gray-500">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                <HelpCircle size={18} />
              </div>
              <div>
                <p className="text-sm font-medium">App Version</p>
                <p className="text-xs text-gray-400">Build v1.2.0 (Next.js)</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
