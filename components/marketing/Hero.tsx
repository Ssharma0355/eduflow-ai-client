import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
          Master your skills with <br />
          <span className="text-blue-600">AI + Human Experts</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          EduFlow AI bridges the gap between self-paced learning and expert mentorship. 
          Get instant AI assistance or hire top-tier experts for your projects.
        </p>
        
        <div className="mt-10 flex justify-center gap-x-6">
          <Link href="/signup">
             <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
               Start Learning
             </button>
          </Link>
          <Link href="/how-it-works">
             <button className="px-8 py-3 rounded-full bg-white text-slate-900 ring-1 ring-slate-200 font-semibold text-lg hover:bg-gray-50 transition">
               Hire an Expert
             </button>
          </Link>
        </div>
      </div>
    </section>
  );
}