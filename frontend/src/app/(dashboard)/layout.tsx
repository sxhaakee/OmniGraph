import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative p-8">
        {/* Subtle top shadow */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-black/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 w-full h-full max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
