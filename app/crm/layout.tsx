'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import CrmSidebar from './components/CrmSidebar';
import { crmSupabase } from './lib/supabase-crm';

interface SidebarContextType {
  open: () => void;
}

export const SidebarContext = createContext<SidebarContextType>({ open: () => {} });
export const useSidebar = () => useContext(SidebarContext);

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [checkedAuth, setCheckedAuth] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      // 1. Skip check on login page
      if (pathname === '/crm/login') {
        setCheckedAuth(true);
        return;
      }

      // 2. Check client local storage session fallback
      const hasLocalSession = localStorage.getItem('crm_session') === 'true';
      if (hasLocalSession) {
        setCheckedAuth(true);
        return;
      }

      // 3. Check Supabase Auth session
      const { data: { session } } = await crmSupabase.auth.getSession();
      if (session) {
        localStorage.setItem('crm_session', 'true');
        setCheckedAuth(true);
        return;
      }

      // 4. Redirect to login if not authenticated
      router.push('/crm/login');
    }
    checkAuth();
  }, [pathname, router]);

  // Render nothing or loading state during auth check
  if (!checkedAuth && pathname !== '/crm/login') {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 text-xs font-semibold text-gray-400">
        Loading CRM Session...
      </div>
    );
  }

  // If on login page, render without Sidebar structure
  if (pathname === '/crm/login') {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }

  return (
    <SidebarContext.Provider value={{ open: () => setSidebarOpen(true) }}>
      <div className="flex h-screen bg-gray-50 overflow-hidden">
        <CrmSidebar
          mobileOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden pb-16 lg:pb-0">
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarContext.Provider>
  );
}
