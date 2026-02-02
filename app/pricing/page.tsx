import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/marketing/Footer";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free Learner",
    id: "tier-free",
    href: "/signup",
    priceMonthly: "$0",
    description: "Perfect for exploring courses and basic AI assistance.",
    features: [
      "Access to community projects",
      "Basic AI Chat (GPT-3.5)",
      "Browse Expert Marketplace",
      "5 Project uploads",
    ],
    featured: false,
  },
  {
    name: "Pro Student",
    id: "tier-pro",
    href: "/signup?plan=pro",
    priceMonthly: "$19",
    description: "Unlock advanced AI tools and priority expert matching.",
    features: [
      "Everything in Free",
      "Advanced AI (GPT-4) Code Review",
      "Priority Expert Matching",
      "Unlimited Project uploads",
      "Private Project repositories",
    ],
    featured: true,
  },
  {
    name: "Expert / Team",
    id: "tier-team",
    href: "/signup?plan=team",
    priceMonthly: "$49",
    description: "For experts and teams managing multiple students.",
    features: [
      "Zero fees on earnings",
      "Team collaboration tools",
      "Dedicated account manager",
      "API Access",
      "Custom contracts",
    ],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Invest in your growth
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you are just starting to learn or you are a professional expert, we have a plan for you.
            </p>
          </div>
          
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 ${
                  tier.featured ? "bg-gray-900 ring-gray-900 text-white shadow-2xl scale-105" : "bg-white text-gray-900"
                }`}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className={`text-lg font-semibold leading-8 ${tier.featured ? "text-white" : "text-gray-900"}`}>
                    {tier.name}
                  </h3>
                </div>
                <p className={`mt-4 text-sm leading-6 ${tier.featured ? "text-gray-300" : "text-gray-600"}`}>
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight">{tier.priceMonthly}</span>
                  <span className={`text-sm font-semibold leading-6 ${tier.featured ? "text-gray-300" : "text-gray-600"}`}>/month</span>
                </p>
                <a
                  href={tier.href}
                  className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    tier.featured
                      ? "bg-blue-500 text-white hover:bg-blue-400 focus-visible:outline-blue-500"
                      : "bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600"
                  }`}
                >
                  Get started
                </a>
                <ul role="list" className={`mt-8 space-y-3 text-sm leading-6 ${tier.featured ? "text-gray-300" : "text-gray-600"}`}>
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className={`h-6 w-5 flex-none ${tier.featured ? "text-blue-400" : "text-blue-600"}`} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}