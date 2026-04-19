"use client";
import { ArrowUpRight, Search, Zap, CheckCircle, Clock, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardOverview() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8 w-full"
    >
      <header className="flex items-center justify-between pb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Platform Overview</h1>
          <p className="text-slate-500 mt-1 text-sm font-medium">Real-time metrics from the Corporate Knowledge OS.</p>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-blue-100 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative flex items-center bg-white border border-slate-200 rounded-lg px-4 py-2 w-64 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input 
              type="text" 
              placeholder="Cmd+K to search..." 
              className="bg-transparent border-none outline-none text-sm text-slate-800 w-full placeholder:text-slate-400"
            />
          </div>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <MetricCard title="Knowledge Chunks" value="1.2M" trend="+12% this week" icon={<Database className="w-4 h-4 text-blue-600" />} iconBg="bg-blue-50" />
        <MetricCard title="RFPs Automated" value="34" trend="+4 this week" icon={<Zap className="w-4 h-4 text-amber-500" />} iconBg="bg-amber-50" />
        <MetricCard title="Avg RFP Time" value="45s" trend="-98% vs manual" icon={<Clock className="w-4 h-4 text-emerald-600" />} iconBg="bg-emerald-50" />
        <MetricCard title="Invisible Work Logged" value="840h" trend="This month" icon={<CheckCircle className="w-4 h-4 text-purple-600" />} iconBg="bg-purple-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
            Recent Ingestion Activity
          </h2>
          <div className="space-y-3">
            {[
              { source: 'Slack', detail: 'Ingested 450 threads from #engineering', time: '10 mins ago', color: 'bg-blue-50 text-blue-700 border-blue-100' },
              { source: 'GitHub', detail: 'Indexed 12 closed PRs and discussions', time: '1 hour ago', color: 'bg-slate-100 text-slate-700 border-slate-200' },
              { source: 'G-Drive', detail: 'Processed "Q3 Security Compliance.pdf"', time: '3 hours ago', color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors cursor-pointer group">
                <div className={`px-2.5 py-1 rounded-md border text-xs font-bold ${item.color}`}>
                  {item.source}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700">{item.detail}</p>
                  <p className="text-xs font-medium text-slate-400 mt-0.5">{item.time}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-5">Pipeline Health</h2>
          <div className="space-y-5">
            <HealthIndicator name="Webhook Receiver" status="Healthy" uptime="99.99%" />
            <HealthIndicator name="Vector Database (pgvector)" status="Healthy" uptime="100%" />
            <HealthIndicator name="OpenAI Embeddings" status="Degraded" uptime="98.5%" isWarning />
            <HealthIndicator name="LangGraph Workers" status="Healthy" uptime="99.9%" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MetricCard({ title, value, trend, icon, iconBg }: { title: string, value: string, trend: string, icon: React.ReactNode, iconBg: string }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm font-semibold text-slate-500">{title}</p>
        <div className={`p-2 rounded-lg ${iconBg}`}>{icon}</div>
      </div>
      <div>
        <h3 className="text-3xl font-extrabold text-slate-900 mb-1">{value}</h3>
        <p className="text-xs font-semibold text-slate-500">{trend}</p>
      </div>
    </div>
  );
}

function HealthIndicator({ name, status, uptime, isWarning = false }: { name: string, status: string, uptime: string, isWarning?: boolean }) {
  return (
    <div className="flex items-center justify-between p-1">
      <div className="flex items-center gap-3">
        <div className="relative flex h-2.5 w-2.5">
          {isWarning && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>}
          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isWarning ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
        </div>
        <span className="text-sm font-medium text-slate-700">{name}</span>
      </div>
      <div className="text-right">
        <p className={`text-sm font-bold ${isWarning ? 'text-amber-600' : 'text-emerald-600'}`}>{status}</p>
        <p className="text-xs font-medium text-slate-400">{uptime} uptime</p>
      </div>
    </div>
  );
}
