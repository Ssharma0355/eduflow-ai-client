import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <span className="text-2xl font-bold text-white">EduFlow AI</span>
            <p className="text-sm leading-6 text-gray-300">
              Bridging the gap between self-paced learning and expert mentorship.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Platform</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/find-expert" className="text-sm leading-6 text-gray-300 hover:text-white">Find an Expert</Link></li>
                  <li><Link href="/become-expert" className="text-sm leading-6 text-gray-300 hover:text-white">Become an Expert</Link></li>
                  <li><Link href="/pricing" className="text-sm leading-6 text-gray-300 hover:text-white">Pricing</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Documentation</Link></li>
                  <li><Link href="#" className="text-sm leading-6 text-gray-300 hover:text-white">API Status</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; 2026 EduFlow AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}