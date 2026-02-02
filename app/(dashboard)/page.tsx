import { ArrowUpRight, Clock, CheckCircle, AlertCircle } from "lucide-react";

// Reusable Stat Card Component
function StatCard({ title, value, change, icon: Icon, color }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm">
        <span className="text-green-600 font-medium flex items-center">
          <ArrowUpRight className="w-4 h-4 mr-1" /> {change}
        </span>
        <span className="text-gray-400 ml-2">from last month</span>
      </div>
    </div>
  );
}

export default function ClientDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Client</h1>
        <p className="text-gray-500 mt-1">Here is what is happening with your learning projects.</p>
      </div>

      {/* 1. Project Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Active Projects" 
          value="3" 
          change="+1" 
          icon={Clock} 
          color="bg-blue-500" 
        />
        <StatCard 
          title="Completed" 
          value="12" 
          change="+4" 
          icon={CheckCircle} 
          color="bg-green-500" 
        />
        <StatCard 
          title="Pending Review" 
          value="1" 
          change="0" 
          icon={AlertCircle} 
          color="bg-amber-500" 
        />
      </div>

      {/* 2. Recent Projects Table (Budget & Deadline View) */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-semibold text-gray-900">Recent Projects</h3>
          <button className="text-sm text-blue-600 font-medium hover:text-blue-700">View All</button>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expert</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[1, 2, 3].map((i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">React Performance Optimization</div>
                  <div className="text-xs text-gray-500">Development • React.js</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">AS</div>
                    <span className="text-sm text-gray-600">Alex Smith</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    In Progress
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">$500.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">in 2 days</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}