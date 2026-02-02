"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PlusCircle, FolderOpen, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  
  // In a real app, you'd fetch the role from your auth context
  const menuItems = [
    { name: "Dashboard", href: "/client/dashboard", icon: LayoutDashboard },
    { name: "New Project", href: "/client/create-project", icon: PlusCircle },
    { name: "My Projects", href: "/client/projects", icon: FolderOpen },
    { name: "Settings", href: "/client/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 flex flex-col z-10">
      <div className="h-16 flex items-center px-8 border-b border-gray-100">
        <span className="text-xl font-bold text-blue-600">EduFlow AI</span>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive 
                  ? "bg-blue-50 text-blue-700" 
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-400"}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}