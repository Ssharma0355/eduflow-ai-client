import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/marketing/Hero"; 
import Features from "@/components/marketing/features/page";// Corrected import path (Component, not page)
import Footer from "@/components/marketing/Footer";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        {/* Added top padding handles in Hero component, but ensuring spacing here if needed */}
        <Hero />

        {/* 3. Social Proof / Stats Strip */}
        <div className="bg-blue-600 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-y-12 gap-x-8 text-center sm:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                <dt className="text-base leading-7 text-blue-100">Active Experts</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">1,200+</dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                <dt className="text-base leading-7 text-blue-100">Projects Completed</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">8.5k+</dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                <dt className="text-base leading-7 text-blue-100">User Satisfaction</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">98%</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* 4. Features Grid */}
        {/* Ensure your Features component uses responsive grid classes like 'grid-cols-1 lg:grid-cols-2' */}
        <Features />

        {/* 5. How It Works (Simple Steps) */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How EduFlow Works</h2>
              <p className="mt-4 text-lg text-gray-600">Get started in three simple steps.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4 md:px-0">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Post a Project</h3>
                <p className="text-gray-600 leading-relaxed">Describe what you need help with or what you want to learn.</p>
              </div>
              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborate</h3>
                <p className="text-gray-600 leading-relaxed">Use AI for quick answers or hire an expert for deep dives.</p>
              </div>
              {/* Step 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Master & Grow</h3>
                <p className="text-gray-600 leading-relaxed">Complete the project, gain the skill, and level up your career.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CTA Section */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-12 px-6 sm:py-24 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 pb-16 lg:pb-0">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to accelerate your learning?
                  <br />
                  Start using EduFlow today.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Join thousands of developers and students mastering new skills through collaboration.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link
                    href="/signup"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get started
                  </Link>
                  <Link href="/features" className="text-sm font-semibold leading-6 text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              {/* Optional: Add an image or graphic on the right side for desktop */}
            </div>
          </div>
        </div>
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}