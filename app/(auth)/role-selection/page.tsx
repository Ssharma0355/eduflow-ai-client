"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RoleSelection() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<"CLIENT" | "EXPERT" | null>(null);

  const handleContinue = () => {
    if (!selectedRole) return;
    // Here you would typically update the user's profile in your DB
    console.log("Role Selected:", selectedRole);
    
    // Redirect logic
    if (selectedRole === "CLIENT") router.push("/client/dashboard");
    else router.push("/expert/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            How will you use EduFlow?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Choose your primary objective to get a personalized experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-8">
          {/* Client Option */}
          <div 
            onClick={() => setSelectedRole("CLIENT")}
            className={`cursor-pointer p-6 border-2 rounded-xl transition-all ${
              selectedRole === "CLIENT" 
                ? "border-blue-600 bg-blue-50" 
                : "border-gray-200 hover:border-blue-300"
            }`}
          >
            <h3 className="text-lg font-bold text-gray-900">I want to Learn & Hire</h3>
            <p className="text-sm text-gray-500 mt-1">
              Find experts, manage projects, and use AI tools to grow.
            </p>
          </div>

          {/* Expert Option */}
          <div 
            onClick={() => setSelectedRole("EXPERT")}
            className={`cursor-pointer p-6 border-2 rounded-xl transition-all ${
              selectedRole === "EXPERT" 
                ? "border-blue-600 bg-blue-50" 
                : "border-gray-200 hover:border-blue-300"
            }`}
          >
            <h3 className="text-lg font-bold text-gray-900">I want to Teach & Earn</h3>
            <p className="text-sm text-gray-500 mt-1">
              Offer services, accept projects, and mentor students.
            </p>
          </div>
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedRole}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-all ${
            selectedRole 
              ? "bg-blue-600 hover:bg-blue-700" 
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue as {selectedRole ? (selectedRole === "CLIENT" ? "Client" : "Expert") : "..."}
        </button>
      </div>
    </div>
  );
}