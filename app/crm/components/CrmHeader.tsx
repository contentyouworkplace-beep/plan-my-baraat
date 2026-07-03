'use client';

import { Bell, Menu, Search } from 'lucide-react';

interface CrmHeaderProps {
  title: string;
  subtitle?: string;
  onMenuClick: () => void;
  actions?: React.ReactNode;
}

export default function CrmHeader({ title, subtitle, onMenuClick, actions }: CrmHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-1.5 rounded-lg text-gray-500 hover:bg-gray-50 active:bg-gray-100"
          >
            <Menu size={20} />
          </button>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">{title}</h1>
            {subtitle && <p className="text-xs text-gray-400 font-medium hidden sm:block mt-0.5">{subtitle}</p>}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {actions}
          <button className="relative p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50">
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-600 rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
}
