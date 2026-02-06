"use client"
import Link from 'next/link'
import React, { useState, FormEvent } from 'react'

const ClientVerification = () => {
  // --- STATE MANAGEMENT ---
  
  // 1. Email Verification State
  const [email, setEmail] = useState<string>("user@example.com"); // Simulate default signup email
  const [otp, setOtp] = useState<string>("");
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // 2. Role Selection State
  const [role, setRole] = useState<'student' | 'professional' | null>(null);

  // 3. Details Form State
  const [details, setDetails] = useState({
    collegeName: "",
    degree: "", // For students
    company: "",
    years: "", // For professionals
  });

  // --- HANDLERS ---

  // Step 1: Send OTP
  const handleSendOtp = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setOtpSent(true);
    setLoading(false);
    alert(`OTP sent to ${email}`);
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async () => {
    setLoading(true);
    // Simulate API verification
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (otp === "1234") { // Mock validation
      setIsEmailVerified(true);
      setLoading(false);
    } else {
      alert("Invalid OTP (Try 1234)");
      setLoading(false);
    }
  };

  // Step 3: Final Submission
  const handleFinalSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Final Submission:", {
      email,
      role,
      details
    });
    alert("Profile Verified & Updated Successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-lg w-full space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        
        {/* Header / Back Link */}
        <div>
           <Link href="/role-selection" className="text-sm text-indigo-600 hover:text-indigo-500 flex items-center gap-1 font-medium mb-4">
             ← Back
           </Link>
           <h2 className="text-2xl font-bold text-gray-900">Account Verification</h2>
           <p className="text-sm text-gray-500">Please verify your email to proceed to profile setup.</p>
        </div>

        {/* ----------------------------------------------------------
           SECTION 1: EMAIL VERIFICATION
           ---------------------------------------------------------- */}
        <div className={`p-5 rounded-lg border ${isEmailVerified ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              1. Email Verification
              {isEmailVerified && <span className="text-green-600 text-sm">✓ Verified</span>}
            </h3>
          </div>

          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                disabled={isEmailVerified || otpSent} // Lock if sent or verified
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-600 cursor-not-allowed"
              />
            </div>

            {/* OTP Section - Only show if not yet verified */}
            {/* OTP Section - Only show if not yet verified */}

            {!isEmailVerified && (
              <>
                {otpSent && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
                    <input
                      type="text"
                      placeholder="Enter 1234"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                )}

                <button
                  onClick={otpSent ? handleVerifyOtp : handleSendOtp}
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {loading ? "Processing..." : (otpSent ? "Verify OTP" : "Send OTP")}
                </button>
              </>
            )}
          </div>
        </div>

        {/* ----------------------------------------------------------
           SECTION 2: ROLE SELECTION & DETAILS (Hidden until Verified)
           ---------------------------------------------------------- */}
        {isEmailVerified && (
          <form onSubmit={handleFinalSubmit} className="space-y-6 animate-fade-in-up">
            
            {/* Role Toggle */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">2. Select Your Role</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`p-4 border rounded-lg text-center transition-all ${
                    role === 'student' 
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-600' 
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => setRole('professional')}
                  className={`p-4 border rounded-lg text-center transition-all ${
                    role === 'professional' 
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-600' 
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  Professional
                </button>
              </div>
            </div>

            {/* Dynamic Details Form */}
            {role && (
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 space-y-4">
                <h3 className="font-medium text-gray-900">
                  3. {role === 'student' ? "College Details" : "Work Details"}
                </h3>

                {role === 'student' ? (
                  // STUDENT FIELDS
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">College / University Name</label>
                      <input
                        required
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        value={details.collegeName}
                        onChange={(e) => setDetails({...details, collegeName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Degree / Major</label>
                      <input
                        required
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        value={details.degree}
                        onChange={(e) => setDetails({...details, degree: e.target.value})}
                      />
                    </div>
                  </>
                ) : (
                  // PROFESSIONAL FIELDS
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Company Name</label>
                      <input
                        required
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        value={details.company}
                        onChange={(e) => setDetails({...details, company: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                      <input
                        required
                        type="number"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        value={details.years}
                        onChange={(e) => setDetails({...details, years: e.target.value})}
                      />
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Final Submit Button - Only shows if role is selected */}
            {role && (
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Complete Verification
              </button>
            )}
          </form>
        )}
      </div>
    </div>
  )
}

export default ClientVerification