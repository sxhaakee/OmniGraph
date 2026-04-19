"use client";
import { useState } from 'react';
import { Upload, File, Play, CheckCircle, AlertTriangle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SalesDashboard() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8 w-full"
    >
      <header className="pb-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Revenue Engine</h1>
        <p className="text-slate-500 text-sm font-medium">Automate RFP responses using the unified corporate knowledge graph.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Upload Section */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-5">New RFP</h2>
            
            <div 
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                isDragging ? 'border-blue-500 bg-blue-50 scale-[1.02]' : 'border-slate-300 hover:border-slate-400 bg-slate-50'
              }`}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => { e.preventDefault(); setIsDragging(false); setUploadedFile('Acme_Corp_Security_RFP.xlsx'); }}
            >
              <div className="mx-auto w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-full flex items-center justify-center mb-4">
                <Upload className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-slate-700 font-bold mb-1">Drag & drop Excel file</p>
              <p className="text-xs font-medium text-slate-500">Only .xlsx or .csv supported</p>
            </div>

            {uploadedFile && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-5 p-3 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <File className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-900">{uploadedFile}</span>
                </div>
                <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-md shadow-sm transition-colors flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5" /> Process
                </button>
              </motion.div>
            )}
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-6 relative overflow-hidden shadow-sm">
            <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-blue-200/50 blur-3xl rounded-full" />
            <h3 className="text-indigo-900 font-bold mb-2 relative z-10 text-lg">Why OmniGraph?</h3>
            <p className="text-indigo-700/80 text-sm font-medium leading-relaxed relative z-10">
              Our confidence scoring algorithm uses cross-encoder re-ranking to ensure only the most accurate context from Slack, GitHub, and Drive is used for RFP generation.
            </p>
          </div>
        </div>

        {/* Processing Queue & Review */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-900">Active Processing Queue</h2>
              <span className="px-2.5 py-1 bg-slate-100 rounded-md text-xs text-slate-600 font-bold border border-slate-200">3 Jobs</span>
            </div>
            
            <div className="space-y-4">
              <JobRow name="GlobalBank Security Questionnaire" status="processing" progress={78} />
              <JobRow name="TechCorp Vendor Assessment" status="completed" progress={100} hasFlagged />
              <JobRow name="Stark Industries Compliance" status="queued" progress={0} />
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-900">Human Review Queue</h2>
              <span className="px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-md text-xs font-bold shadow-sm">12 Needs Review</span>
            </div>
            
            <div className="divide-y divide-slate-100">
              {[
                { q: "Describe your data at rest encryption methodology.", conf: 58, source: "Slack #sec-ops" },
                { q: "How is PII handled during model inference?", conf: 42, source: "Confluence / Architecture" },
              ].map((item, i) => (
                <div key={i} className="py-4 hover:bg-slate-50 -mx-6 px-6 transition-colors group cursor-pointer">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-2">{item.q}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] uppercase tracking-wide text-rose-600 font-bold bg-rose-50 border border-rose-100 px-2 py-0.5 rounded">
                          {item.conf}% Confidence
                        </span>
                        <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                          Source: <span className="text-slate-700">{item.source}</span>
                        </span>
                      </div>
                    </div>
                    <button className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}

function JobRow({ name, status, progress, hasFlagged = false }: { name: string, status: string, progress: number, hasFlagged?: boolean }) {
  return (
    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-sm transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {status === 'completed' ? <CheckCircle className="w-5 h-5 text-emerald-500" /> : 
           status === 'processing' ? <Play className="w-5 h-5 text-blue-600 fill-blue-600" /> :
           <div className="w-5 h-5 rounded-full border-2 border-slate-300" />}
          <span className="text-sm font-bold text-slate-800">{name}</span>
        </div>
        {hasFlagged && (
          <span className="flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md font-bold shadow-sm">
            <AlertTriangle className="w-3.5 h-3.5" /> Flagged Answers
          </span>
        )}
      </div>
      
      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden mb-2 shadow-inner">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${status === 'completed' ? 'bg-emerald-500' : 'bg-blue-600'}`} 
        />
      </div>
      <div className="flex justify-between">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{status}</span>
        <span className="text-xs font-bold text-slate-600">{progress}%</span>
      </div>
    </div>
  );
}
