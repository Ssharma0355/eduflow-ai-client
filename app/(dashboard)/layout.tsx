import Sidebar from "./Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      
      {/* md:ml-64 adds space on desktop so content isn't hidden.
         On mobile, the margin is 0 because the sidebar is hidden/overlay.
      */}
      <main className="flex-1 md:ml-64 p-8">
        {children}
      </main>
    </div>
  );
}