"use client";
import { useState } from "react";
import { X, UploadCloud, FileText } from "lucide-react"; // Import icons

export default function CreateProjectPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Convert FileList to Array and append to existing files
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (indexToRemove: number) => {
    setFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call including files
    console.log("Submitting with files:", files);
    setTimeout(() => setIsLoading(false), 2000);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-black">Post a New Request</h1>
        <p className="text-sm sm:text-base text-gray-500 mt-1">Describe what you need help with. AI will suggest experts.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 space-y-6 sm:space-y-8">
        
        {/* Section 1: Basic Info */}
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
            <input 
              id="title"
              type="text" 
              placeholder="e.g. Need help fixing React useEffect infinite loop"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2.5 px-3 border transition-colors text-black placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea 
              id="description"
              rows={5}
              placeholder="Provide details about your issue or learning goal..."
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2.5 px-3 border transition-colors resize-none text-black placeholder:text-gray-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
             <div>
               <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
               <select id="category" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2.5 px-3 border bg-white text-black">
                 <option>Web Development</option>
                 <option>Data Science</option>
                 <option>Design</option>
               </select>
             </div>
             <div>
               <label htmlFor="skill" className="block text-sm font-medium text-gray-700 mb-1">Required Skill Level</label>
               <select id="skill" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2.5 px-3 border bg-white text-black">
                 <option>Junior (Learning)</option>
                 <option>Mid-Level</option>
                 <option>Senior Expert</option>
               </select>
             </div>
          </div>
        </div>

        {/* Section 2: File Upload (New) */}
        <div className="pt-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Reference or to follow</label>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:bg-gray-50 transition-colors text-center cursor-pointer relative">
            <input 
              type="file" 
              multiple 
              accept=".pdf"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
              <UploadCloud className="w-8 h-8 text-blue-500" />
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
              </div>
              <p className="text-xs text-gray-500">PDF files only</p>
            </div>
          </div>

          {/* Selected Files List */}
          {files.length > 0 && (
            <ul className="mt-4 space-y-2">
              {files.map((file, index) => (
                <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="bg-red-100 p-1.5 rounded-md">
                      <FileText className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-sm text-black truncate max-w-[200px] sm:max-w-md">{file.name}</span>
                    <span className="text-xs text-gray-500">({(file.size / 1024).toFixed(0)} KB)</span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => removeFile(index)}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Section 3: Budget & Time */}
        <div className="border-t border-gray-100 pt-6 sm:pt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget ($)</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">$</span>
              <input 
                id="budget"
                type="number" 
                placeholder="100"
                className="w-full pl-8 pr-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2.5 border transition-colors text-black placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
            <input 
              id="deadline"
              type="date" 
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2.5 px-3 border transition-colors text-black"
            />
          </div>
        </div>

        <div className="pt-4 flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4">
          <button 
            type="button" 
            className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Save Draft
          </button>
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? "Posting..." : "Post Project"}
          </button>
        </div>

      </form>
    </div>
  );
}