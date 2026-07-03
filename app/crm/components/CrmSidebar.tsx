'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard, Users, UserSearch, MoreHorizontal,
  Building2, Tag, Package, Settings, X, ChevronRight, LogOut
} from 'lucide-react';
import { crmSupabase } from '../lib/supabase-crm';

const bottomTabs = [
  { href: '/crm',        label: 'Home',    icon: LayoutDashboard, exact: true },
  { href: '/crm/vendors', label: 'Vendors', icon: Users },
  { href: '/crm/leads',   label: 'Leads',   icon: UserSearch },
  { href: '/crm/more',    label: 'More',    icon: MoreHorizontal },
];

const sidebarNav = [
  { href: '/crm',             label: 'Dashboard',      icon: LayoutDashboard, exact: true },
  { href: '/crm/vendors',     label: 'Vendors',        icon: Users },
  { href: '/crm/leads',       label: 'Customer Leads', icon: UserSearch },
  { href: '/crm/cities',      label: 'Cities',         icon: Building2 },
  { href: '/crm/categories',  label: 'Categories',     icon: Tag },
  { href: '/crm/packages',    label: 'Packages',       icon: Package },
  { href: '/crm/settings',    label: 'Settings',       icon: Settings },
];

interface CrmSidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

export default function CrmSidebar({ mobileOpen, onClose }: CrmSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await crmSupabase.auth.signOut();
    } catch {}
    localStorage.removeItem('crm_session');
    localStorage.removeItem('crm_user');
    router.push('/crm/login');
  };

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    if (href === '/crm/vendors') return pathname.startsWith('/crm/vendors');
    if (href === '/crm/leads')   return pathname.startsWith('/crm/leads');
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar (desktop always, mobile drawer) */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-60 bg-[#111] flex flex-col z-50
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto lg:h-screen
        `}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <Link href="/crm" className="flex flex-col items-start gap-0.5" onClick={onClose}>
            <Image src="/logo.jpg" alt="PlanMyBaraat" width={140} height={38} className="h-9 w-auto object-contain" priority />
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-red-500 pl-0.5">
              Basic Management CRM
            </span>
          </Link>
          <button onClick={onClose} className="lg:hidden p-1.5 text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 px-2 py-3 overflow-y-auto space-y-0.5">
          {sidebarNav.map(({ href, label, icon: Icon, exact }) => {
            const active = isActive(href, exact);
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${active ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}
                `}
              >
                <Icon size={17} />
                <span className="flex-1">{label}</span>
                {active && <ChevronRight size={13} className="text-red-200" />}
              </Link>
            );
          })}
        </nav>

        <div className="px-4 py-3 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[10px] font-bold">T</span>
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs font-semibold truncate">Tejabhai</p>
              <p className="text-gray-500 text-[10px] truncate">Administrator</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            title="Log Out"
            className="p-1.5 text-gray-400 hover:text-red-500 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors flex-shrink-0"
          >
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Bottom Tab Bar (mobile only) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 safe-area-pb">
        <div className="flex">
          {bottomTabs.map(({ href, label, icon: Icon, exact }) => {
            const active = exact ? pathname === href : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex-1 flex flex-col items-center justify-center pt-2.5 pb-2 gap-1 transition-colors
                  ${active ? 'text-red-600' : 'text-gray-400'}
                `}
              >
                <div className={`relative flex items-center justify-center w-10 h-6 rounded-full transition-all
                  ${active ? 'bg-red-50' : ''}
                `}>
                  <Icon size={20} strokeWidth={active ? 2.5 : 1.8} />
                  {active && <span className="absolute -bottom-1.5 w-1 h-1 bg-red-600 rounded-full" />}
                </div>
                <span className={`text-[10px] font-semibold ${active ? 'text-red-600' : 'text-gray-400'}`}>
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
