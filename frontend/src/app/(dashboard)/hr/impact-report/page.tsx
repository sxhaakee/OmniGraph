"use client";
import { Users, Award, TrendingUp, Clock, Activity, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ImpactReportDashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8 w-full"
    >
      <header className="flex items-center justify-between pb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Impact Engine</h1>
          <p className="text-slate-500 text-sm font-medium">Surfacing invisible labor and collaboration velocity.</p>
        </div>
        
        <div className="flex bg-slate-100 border border-slate-200 rounded-lg p-1 shadow-inner">
          <button className="px-4 py-1.5 text-sm font-bold rounded-md bg-white text-slate-900 shadow-sm border border-slate-200">This Month</button>
          <button className="px-4 py-1.5 text-sm font-semibold rounded-md text-slate-500 hover:text-slate-900 transition-colors">Q3 2024</button>
          <button className="px-4 py-1.5 text-sm font-semibold rounded-md text-slate-500 hover:text-slate-900 transition-colors">YTD</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <StatCard title="Invisible Work Logged" value="1,240 hrs" icon={<Clock className="w-5 h-5 text-purple-600" />} iconBg="bg-purple-100" trend="+15% vs last month" />
        <StatCard title="Top Category" value="Debugging" icon={<Activity className="w-5 h-5 text-blue-600" />} iconBg="bg-blue-100" trend="450 hours total" />
        <StatCard title="Team Velocity Impact" value="+22%" icon={<TrendingUp className="w-5 h-5 text-emerald-600" />} iconBg="bg-emerald-100" trend="Estimated sprint speedup" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Leaderboard */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" /> Top Contributors
            </h2>
          </div>
          
          <div className="space-y-4 flex-1">
            {[
              { name: "Sarah Chen", role: "Senior Frontend", hours: 42, tags: ["Mentorship", "Debugging"] },
              { name: "Alex Kumar", role: "DevOps Engineer", hours: 38, tags: ["Incident Response", "Coordination"] },
              { name: "Jessica Taylor", role: "Product Manager", hours: 25, tags: ["Knowledge Sharing"] },
              { name: "David Kim", role: "Backend Lead", hours: 22, tags: ["Debugging"] },
            ].map((user, i) => (
              <div key={i} className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-sm">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{user.name}</p>
                    <p className="text-xs font-semibold text-slate-500">{user.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">{user.hours}h</p>
                  <div className="flex gap-1.5 mt-1 justify-end">
                    {user.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded border border-slate-200 bg-white text-slate-500 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scatter Plot Placeholder */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col">
          <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-blue-600" /> Velocity vs Invisible Contributions
          </h2>
          <p className="text-xs font-semibold text-slate-500 mb-6">X-Axis: PRs Merged / Y-Axis: Invisible Hours Logged</p>
          
          <div className="flex-1 border border-slate-200 rounded-xl relative overflow-hidden bg-slate-50 flex items-center justify-center group shadow-inner">
            {/* Mock Chart Data points */}
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }} className="absolute bottom-[20%] left-[20%] w-4 h-4 bg-rose-500 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-125 hover:z-10 transition-transform" title="Low PRs, Low Help" />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="absolute bottom-[70%] left-[30%] w-5 h-5 bg-purple-500 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-125 hover:z-10 transition-transform" title="Low PRs, High Help (Burnout Risk!)" />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} className="absolute bottom-[30%] left-[80%] w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-125 hover:z-10 transition-transform" title="High PRs, Low Help (Siloed Worker)" />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} className="absolute bottom-[80%] left-[75%] w-6 h-6 bg-emerald-500 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-125 hover:z-10 transition-transform" title="High PRs, High Help (10x Engineer)" />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-transparent pointer-events-none" />
            <p className="text-slate-400 text-sm font-bold uppercase tracking-wider z-10 pointer-events-none">Interactive Scatter Plot</p>
            
            {/* Grid Lines */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 pointer-events-none" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-slate-200 pointer-events-none" />
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}

function StatCard({ title, value, icon, trend, iconBg }: { title: string, value: string, icon: React.ReactNode, trend: string, iconBg: string }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4 relative z-10">
        <p className="text-sm font-bold text-slate-500">{title}</p>
        <div className={`p-2 rounded-lg shadow-sm border border-slate-100 ${iconBg}`}>{icon}</div>
      </div>
      <div className="relative z-10">
        <h3 className="text-3xl font-extrabold text-slate-900 mb-1">{value}</h3>
        <p className="text-xs font-bold text-slate-500">{trend}</p>
      </div>
    </div>
  );
}
