"use client";
import { useState } from "react";

export default function CreateProjectPage() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Post a New Request</h1>
        <p className="text-gray-500 mt-1">Describe what you need help with. AI will suggest experts.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-8">
        
        {/* Section 1: Basic Info */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
            <input 
              type="text" 
              placeholder="e.g. Need help fixing React useEffect infinite loop"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2.5 px-3 border"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea 
              rows={5}
              placeholder="Provide details about your issue or learning goal..."
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2.5 px-3 border"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
               <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2.5 px-3 border bg-white">
                 <option>Web Development</option>
                 <option>Data Science</option>
                 <option>Design</option>
               </select>
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Required Skill Level</label>
               <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2.5 px-3 border bg-white">
                 <option>Junior (Learning)</option>
                 <option>Mid-Level</option>
                 <option>Senior Expert</option>
               </select>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 grid grid-cols-2 gap-6">
          {/* Section 2: Budget & Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Budget ($)</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">$</span>
              <input 
                type="number" 
                placeholder="100"
                className="w-full pl-8 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2.5 border"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
            <input 
              type="date" 
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2.5 px-3 border"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-4">
          <button type="button" className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Save Draft
          </button>
          <button 
            type="submit" 
            disabled={isLoading}
            className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-70"
          >
            {isLoading ? "Posting..." : "Post Project"}
          </button>
        </div>

      </form>
    </div>
  );
}