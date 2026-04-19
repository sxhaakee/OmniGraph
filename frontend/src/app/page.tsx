"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Database, Zap, Lock, BarChart, FileText, ChevronRight, CheckCircle2, Search, Bell, Home, Users, Settings } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";

export default function LandingPage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Hero Parallax
  const yHeroText = useTransform(heroProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(heroProgress, [0, 0.7], [1, 0]);
  
  // Mockup Parallax
  const yMockup = useTransform(heroProgress, [0, 1], ["0%", "-20%"]);
  const rotateXMockup = useTransform(heroProgress, [0, 0.6], [12, 0]);
  const scaleMockup = useTransform(heroProgress, [0, 0.6], [0.92, 1.02]);
  const boxShadowMockup = useTransform(
    heroProgress,
    [0, 0.6],
    ["0 20px 40px -10px rgba(0,0,0,0.1), 0 10px 20px -5px rgba(0,0,0,0.05)", "0 50px 100px -20px rgba(37,99,235,0.25), 0 30px 60px -30px rgba(0,0,0,0.1)"]
  );

  return (
    <SmoothScroll>
      <div className="bg-[#fafafa] selection:bg-blue-200 selection:text-blue-900 overflow-clip font-sans relative w-full">
        
        {/* Dynamic Background Grid & Blobs */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_80%,transparent_100%)] opacity-50"></div>
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-400/20 blur-[120px]" />
          <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-400/20 blur-[120px]" />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                <Database className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-tighter text-slate-900">
                OmniGraph
              </span>
            </div>
            <div className="hidden md:flex gap-8 lg:gap-10 text-sm font-bold text-slate-500">
              <a href="#product" className="hover:text-slate-900 transition-colors">Product</a>
              <a href="#solutions" className="hover:text-slate-900 transition-colors">Solutions</a>
              <a href="#security" className="hover:text-slate-900 transition-colors">Security</a>
            </div>
            <div className="flex gap-2 sm:gap-4 items-center">
              <Link href="/sales" className="hidden sm:block px-4 py-2 text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors">
                Sign In
              </Link>
              <Link href="/sales" className="px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold bg-slate-900 text-white rounded-full hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Dashboard
              </Link>
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section ref={heroRef} className="relative pt-32 sm:pt-48 pb-20 sm:pb-32 px-4 sm:px-6 z-10 w-full">
          <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="max-w-5xl mx-auto text-center relative z-20">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-blue-700 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6 sm:mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              OmniGraph 2.0 is live
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-7xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8"
            >
              Corporate Knowledge, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Weaponized.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0"
            >
              Turn thousands of scattered Slack threads, GitHub PRs, and messy G-Drives into an intelligent OS that answers RFPs in seconds.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto sm:max-w-none"
            >
              <Link href="/sales" className="w-full sm:w-auto px-8 py-3.5 sm:px-10 sm:py-4 text-base sm:text-lg font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 sm:gap-3">
                Start Building <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="/" className="w-full sm:w-auto px-8 py-3.5 sm:px-10 sm:py-4 text-base sm:text-lg font-bold bg-white text-slate-900 border border-slate-200 rounded-full hover:bg-slate-50 hover:shadow-lg transition-all text-center flex items-center justify-center gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" /> Read Docs
              </Link>
            </motion.div>
          </motion.div>

          {/* 3D PARALLAX REALISTIC MOCKUP */}
          <motion.div 
            style={{ y: yMockup, rotateX: rotateXMockup, scale: scaleMockup, boxShadow: boxShadowMockup }}
            className="max-w-6xl w-full mx-auto mt-20 sm:mt-32 relative perspective-[2000px] transform-gpu z-30 rounded-[2rem] sm:rounded-[2.5rem] bg-white/20 backdrop-blur-3xl border border-white/60 p-2 sm:p-4"
          >
            {/* Glossy Bezel */}
            <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] ring-1 ring-inset ring-white/50 pointer-events-none" />
            
            <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200/50 bg-slate-50 shadow-2xl overflow-hidden flex flex-col h-[450px] sm:h-[600px] lg:h-[700px] relative">
              
              {/* Fake Glare/Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-30 pointer-events-none transform -translate-x-1/2 -skew-x-12 z-50 animate-[glare_8s_ease-in-out_infinite]" />
              
              {/* Window Controls (Mac Style) */}
              <div className="h-12 bg-white border-b border-slate-200 flex items-center px-4 sm:px-6 relative z-10 shrink-0">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                </div>
                {/* Fake URL Bar */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 h-7 w-96 bg-slate-100 rounded-md border border-slate-200 items-center justify-center">
                  <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5"><Lock className="w-3 h-3" /> app.omnigraph.ai/sales</span>
                </div>
              </div>

              <div className="flex flex-1 overflow-hidden relative z-10">
                {/* Sidebar Mock - Hidden on mobile */}
                <div className="w-64 border-r border-slate-200 bg-white flex flex-col hidden lg:flex shrink-0">
                  <div className="p-6 pb-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Platform</div>
                    <div className="flex items-center gap-3 p-2.5 rounded-lg text-slate-600 hover:bg-slate-50 cursor-pointer">
                      <Home className="w-4 h-4 text-slate-400" /> <span className="text-sm font-semibold">Overview</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-blue-50 text-blue-700 cursor-pointer mt-1">
                      <FileText className="w-4 h-4 text-blue-600" /> <span className="text-sm font-bold">Revenue Engine</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 rounded-lg text-slate-600 hover:bg-slate-50 cursor-pointer mt-1">
                      <Users className="w-4 h-4 text-slate-400" /> <span className="text-sm font-semibold">Impact Engine</span>
                    </div>
                  </div>
                  <div className="mt-auto p-6 border-t border-slate-100">
                    <div className="flex items-center gap-3 p-2.5 rounded-lg text-slate-600 hover:bg-slate-50 cursor-pointer">
                      <Settings className="w-4 h-4 text-slate-400" /> <span className="text-sm font-semibold">Settings</span>
                    </div>
                  </div>
                </div>

                {/* Main Content Mock */}
                <div className="flex-1 p-4 sm:p-8 overflow-hidden bg-[#fafafa] relative flex flex-col">
                  {/* Top Bar Mock */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="hidden sm:flex relative items-center w-64 h-10 bg-white border border-slate-200 rounded-lg shadow-sm px-3">
                      <Search className="w-4 h-4 text-slate-400 mr-2" />
                      <span className="text-xs text-slate-400">Search RFPs...</span>
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                      <div className="relative">
                        <Bell className="w-5 h-5 text-slate-400" />
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#fafafa]" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 border-2 border-white shadow-sm" />
                    </div>
                  </div>
                  
                  {/* Content Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Revenue Engine</h2>
                    <p className="text-sm font-medium text-slate-500">Automate RFP responses using the corporate graph.</p>
                  </div>
                  
                  {/* KPI Cards Mock */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 shrink-0">
                    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[11px] font-bold text-slate-500">Active Jobs</span>
                        <div className="w-6 h-6 rounded bg-blue-50 flex items-center justify-center"><Zap className="w-3 h-3 text-blue-600" /></div>
                      </div>
                      <div className="text-2xl font-black text-slate-900">3</div>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hidden sm:block">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[11px] font-bold text-slate-500">Completed RFPs</span>
                        <div className="w-6 h-6 rounded bg-emerald-50 flex items-center justify-center"><CheckCircle2 className="w-3 h-3 text-emerald-600" /></div>
                      </div>
                      <div className="text-2xl font-black text-slate-900">142</div>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hidden lg:block">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[11px] font-bold text-slate-500">Confidence Score</span>
                        <div className="w-6 h-6 rounded bg-purple-50 flex items-center justify-center"><BarChart className="w-3 h-3 text-purple-600" /></div>
                      </div>
                      <div className="text-2xl font-black text-slate-900">94%</div>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[11px] font-bold text-slate-500">Needs Review</span>
                        <div className="w-6 h-6 rounded bg-amber-50 flex items-center justify-center"><Lock className="w-3 h-3 text-amber-600" /></div>
                      </div>
                      <div className="text-2xl font-black text-slate-900">12</div>
                    </div>
                  </div>

                  {/* Active Queue Mock */}
                  <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex-1 overflow-hidden flex flex-col">
                    <h3 className="text-sm font-bold text-slate-900 mb-4">Active Processing Queue</h3>
                    <div className="space-y-3">
                      <div className="p-3 sm:p-4 rounded-lg border border-slate-100 bg-slate-50">
                        <div className="flex justify-between items-center mb-2 sm:mb-3">
                          <span className="text-xs sm:text-sm font-bold text-slate-800 truncate pr-2">GlobalBank Security Questionnaire</span>
                          <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded shrink-0">Processing</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-blue-600 h-full w-[78%]" />
                        </div>
                      </div>
                      <div className="p-3 sm:p-4 rounded-lg border border-slate-100 bg-slate-50 hidden sm:block">
                        <div className="flex justify-between items-center mb-2 sm:mb-3">
                          <span className="text-xs sm:text-sm font-bold text-slate-800">TechCorp Vendor Assessment</span>
                          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">Completed</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[100%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>
        </section>

        {/* SCROLL-TRIGGERED FEATURE CARDS */}
        <section className="py-24 sm:py-40 relative z-20 bg-slate-900 overflow-hidden px-4 sm:px-6">
          {/* Animated dark blobs */}
          <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-blue-600/20 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-600/20 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-20 sm:mb-32 relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight"
              >
                Two powerful engines.<br />One unified graph.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="text-lg sm:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto"
              >
                Built entirely on Next.js 14 App Router and Supabase pgvector. <br className="hidden sm:block" />We handle the AI complexity so you can focus on scaling.
              </motion.p>
            </div>

            <div className="space-y-24 sm:space-y-40 relative z-10">
              
              {/* Feature 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring" }}
                className="flex flex-col lg:flex-row items-center gap-10 sm:gap-20"
              >
                <div className="flex-1 space-y-6 sm:space-y-8 w-full">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Revenue Engine</h3>
                  <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-medium">
                    Stop losing enterprise deals to slow RFP responses. Upload a vendor questionnaire, and our cross-encoder re-ranking algorithm generates perfect answers sourced securely from past Slack chats and GitHub PRs.
                  </p>
                  <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                    {['Answers in < 60 seconds', 'Cross-encoder accuracy', 'Human-in-the-loop review'].map(item => (
                      <li key={item} className="flex items-center gap-3 text-slate-300 font-bold text-sm sm:text-base">
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full relative group">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl sm:blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-50 group-hover:opacity-100" />
                  <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden h-[350px] sm:h-[450px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                    <motion.div 
                      animate={{ y: [0, -10, 0] }} 
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                      className="space-y-4 sm:space-y-5 relative z-10"
                    >
                      <div className="p-4 sm:p-5 bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-700/50 shadow-xl">
                        <p className="text-sm sm:text-base font-bold text-slate-200 mb-3 sm:mb-4">Q: Describe data at rest encryption.</p>
                        <div className="h-2 sm:h-3 w-full bg-slate-800 rounded-full overflow-hidden mb-2 sm:mb-3">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "92%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-emerald-500" 
                          />
                        </div>
                        <p className="text-[10px] sm:text-xs text-emerald-400 font-black uppercase tracking-widest">92% Confidence</p>
                      </div>
                      <div className="p-4 sm:p-5 bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-700/50 shadow-xl">
                        <p className="text-sm sm:text-base font-bold text-slate-200 mb-3 sm:mb-4">Q: How is PII handled?</p>
                        <div className="h-2 sm:h-3 w-full bg-slate-800 rounded-full overflow-hidden mb-2 sm:mb-3">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "64%" }}
                            transition={{ duration: 1.5, delay: 0.7 }}
                            className="h-full bg-amber-500" 
                          />
                        </div>
                        <p className="text-[10px] sm:text-xs text-amber-400 font-black uppercase tracking-widest">64% Needs Review</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring" }}
                className="flex flex-col lg:flex-row-reverse items-center gap-10 sm:gap-20"
              >
                <div className="flex-1 space-y-6 sm:space-y-8 w-full">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <BarChart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Impact Engine</h3>
                  <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-medium">
                    Traditional performance reviews are broken because they only track visible output. OmniGraph surfaces invisible labor—mentorship, debugging, and cross-team coordination—making your 10x collaborators visible.
                  </p>
                  <Link href="/hr/impact-report" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors text-base sm:text-lg pt-2 sm:pt-4">
                    View the HR Dashboard <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
                <div className="flex-1 w-full relative group">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl sm:blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-50 group-hover:opacity-100" />
                  <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl h-[350px] sm:h-[450px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none" />
                    <div className="relative w-full h-full">
                      <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-[80%] h-[80%] border-l-2 border-b-2 border-slate-700">
                        <motion.div animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute bottom-[80%] left-[80%] w-6 h-6 sm:w-8 sm:h-8 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)] border-2 border-white" />
                        <motion.div animate={{ scale: [1, 1.1, 1], y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute bottom-[20%] left-[30%] w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] border-2 border-white" />
                        <motion.div animate={{ scale: [1, 1.3, 1], x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 3.5 }} className="absolute bottom-[50%] left-[50%] w-5 h-5 sm:w-7 sm:h-7 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] border-2 border-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 sm:py-40 relative z-30 bg-blue-600 overflow-hidden px-4">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-white/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight">Ready to map your corporate knowledge?</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-medium mb-10 sm:mb-12">Join industry leaders using OmniGraph to accelerate revenue and reward true impact.</p>
            <button className="px-8 py-4 sm:px-12 sm:py-5 text-lg sm:text-xl font-bold bg-white text-blue-600 rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-white/20 transition-all">
              Get Started for Free
            </button>
          </motion.div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 sm:py-16 bg-slate-950 text-slate-500 text-center relative z-20 px-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Database className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300" />
            <span className="font-extrabold text-xl sm:text-2xl text-slate-300 tracking-tighter">OmniGraph</span>
          </div>
          <p className="text-sm sm:text-base font-medium">© 2024 OmniGraph AI Suite. Built with Next.js & Framer Motion.</p>
        </footer>
      </div>
    </SmoothScroll>
  );
}
