import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/marketing/Footer";
import { Zap, Shield, Users, Code } from "lucide-react";

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Why EduFlow?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tools tailored for ambitious learners
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine the speed of AI with the depth of human expertise to ensure you never get stuck on a coding problem again.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
              
              {/* Feature 1 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Real-time AI Assistant</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Our custom-trained LLM understands context. Paste your error logs, GitHub repo links, or file structure, and get instant, context-aware debugging help 24/7.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Vetted Expert Marketplace</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  When AI hits its limit, click "Hire Expert". We instantly match you with a senior developer who specializes in your specific stack (e.g., Next.js, FastAPI).
                </p>
              </div>

              {/* Feature 3 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Secure Escrow Payments</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Funds are held safely until the milestone is approved. Disputes are handled by admin moderation, ensuring safety for both Clients and Experts.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Interactive Code Sandbox</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Run code directly in the browser during your sessions. Experts can edit your files in real-time to demonstrate best practices.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}