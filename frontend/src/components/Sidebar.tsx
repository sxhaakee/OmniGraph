"use client";
import Link from 'next/link';
import { Home, FileText, Users, Settings, Database } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-full bg-white border-r border-slate-200 p-5 flex flex-col z-20 shadow-sm">
      <div className="flex items-center gap-3 px-2 mb-10 mt-2">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/20">
          <Database className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-lg tracking-tight text-slate-900">
          OmniGraph
        </span>
      </div>
      
      <div className="space-y-8 flex-1">
        <div className="space-y-1">
          <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Platform</p>
          <NavItem href="/" icon={<Home className="w-4 h-4" />} label="Overview" active={pathname === '/'} />
        </div>
        
        <div className="space-y-1">
          <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Modules</p>
          <NavItem href="/sales" icon={<FileText className="w-4 h-4" />} label="Revenue Engine" active={pathname === '/sales'} />
          <NavItem href="/hr/impact-report" icon={<Users className="w-4 h-4" />} label="Impact Engine" active={pathname === '/hr/impact-report'} />
        </div>
      </div>
      
      <div className="mt-auto space-y-1 pt-6 border-t border-slate-200">
        <NavItem href="/settings" icon={<Settings className="w-4 h-4" />} label="Settings" active={pathname === '/settings'} />
      </div>
    </div>
  );
}

function NavItem({ href, icon, label, active }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link href={href}>
      <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
        active 
          ? "bg-blue-50 text-blue-700 shadow-sm shadow-blue-100" 
          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
      }`}>
        <div className={`transition-transform duration-200 ${active ? "scale-110 text-blue-600" : "group-hover:scale-110 text-slate-400 group-hover:text-slate-600"}`}>
          {icon}
        </div>
        <span>{label}</span>
      </div>
    </Link>
  );
}
