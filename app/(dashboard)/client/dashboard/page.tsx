"use client";
import React from "react";
import Link from "next/link";
import { 
  Plus, 
  Clock, 
  CheckCircle, 
  TrendingUp, 
  MoreVertical, 
  Search
} from "lucide-react";

export default function Dashboard() {
  // Mock Data
  const stats = [
    { label: "Active Projects", value: "3", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Completed", value: "12", icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
    { label: "Total Spent", value: "$450", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  const recentProjects = [
    { 
      id: 1, 
      title: "Fix React useEffect Infinite Loop", 
      category: "Web Development", 
      expert: "Sarah J.", 
      status: "In Progress", 
      date: "Feb 02, 2026",
      amount: "$50"
    },
    { 
      id: 2, 
      title: "Explain Transformers in NLP", 
      category: "Data Science", 
      expert: "David L.", 
      status: "Pending Review", 
      date: "Feb 01, 2026",
      amount: "$120"
    },
    { 
      id: 3, 
      title: "Portfolio Design Review", 
      category: "Design", 
      expert: "Pending", 
      status: "Open", 
      date: "Jan 28, 2026",
      amount: "$80"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* --- Header Section --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-black">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back, John! Here's what's happening today.</p>
        </div>
        <Link href="/client/create-project">
          <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto">
            <Plus size={18} />
            New Project
          </button>
        </Link>
      </div>

      {/* --- Stats Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-black">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* --- Recent Projects Section --- */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
        
        {/* Table Header / Filter */}
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-black">Recent Projects</h2>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black w-full sm:w-64"
            />
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Project Name</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Expert</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm font-medium text-black">{project.title}</p>
                    <p className="text-xs text-gray-500">{project.category}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {project.expert !== "Pending" ? (
                         <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                           {project.expert.charAt(0)}
                         </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-xs">?</div>
                      )}
                      <span className="text-sm text-gray-700">{project.expert}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {project.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                    {project.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      project.status === "In Progress" ? "bg-blue-50 text-blue-700 border-blue-100" :
                      project.status === "Completed" ? "bg-green-50 text-green-700 border-green-100" :
                      project.status === "Open" ? "bg-gray-100 text-gray-700 border-gray-200" :
                      "bg-yellow-50 text-yellow-700 border-yellow-100"
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer Link */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-xl text-center">
            <Link href="/client/projects" className="text-sm text-blue-600 font-medium hover:text-blue-700">
                View all projects
            </Link>
        </div>
      </div>
    </div>
  );
}