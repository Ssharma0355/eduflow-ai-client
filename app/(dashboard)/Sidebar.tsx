"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  PlusCircle, 
  FolderOpen, 
  Settings, 
  LogOut, 
  Menu, // Icon for opening menu
  X     // Icon for closing menu
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const menuItems = [
    { name: "Dashboard", href: "/client/dashboard", icon: LayoutDashboard },
    { name: "New Project", href: "/client/create-project", icon: PlusCircle },
    { name: "My Projects", href: "/client/projects", icon: FolderOpen },
    { name: "Settings", href: "/client/settings", icon: Settings },
  ];

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* --- Mobile Trigger Button --- */}
      {/* Only visible on small screens (md:hidden) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
      <button 
    onClick={toggleMenu}
    // We add a conditional class here: if menu is open, use 'hidden', otherwise 'block'
    className={`p-2 bg-white rounded-md shadow-md border border-gray-200 text-gray-700 ${isMobileMenuOpen ? "hidden" : "block"}`}
  >
    <Menu size={24} />
  </button>
      </div>

      {/* --- Overlay Background (Mobile Only) --- */}
      {/* Closes menu when clicking outside the sidebar */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* --- Sidebar Component --- */}
      <aside 
        className={`
          fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
      >
        <div className="h-16 flex items-center px-8 border-b border-gray-100 justify-between">
          <span className="text-xl font-bold text-blue-600">EduFlow AI</span>
          {/* Close button inside sidebar for mobile convenience */}
          <button onClick={closeMenu} className="md:hidden text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu} // Close sidebar when a link is clicked on mobile
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
    </>
  );
}