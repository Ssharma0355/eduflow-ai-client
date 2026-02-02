import { Bot, Users, Rocket, ShieldCheck } from "lucide-react";

const features = [
  {
    name: 'AI-Powered Guidance',
    description: 'Get instant feedback on your code or project structure from our advanced AI assistant before hiring an expert.',
    icon: Bot,
  },
  {
    name: 'Vetted Expert Marketplace',
    description: 'Connect with verified professionals for detailed reviews, complex debugging, or 1-on-1 mentorship.',
    icon: Users,
  },
  {
    name: 'Project-Based Learning',
    description: 'Learn by doing. Post real-world projects and get paid assistance to build them while you learn.',
    icon: Rocket,
  },
  {
    name: 'Secure Payments & Escrow',
    description: 'Your funds are held safely in escrow until the project milestones are met and you are satisfied.',
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-wide">Faster Growth</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to master your craft
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            EduFlow AI isn't just a freelance platform. It's a growth engine designed to help you learn faster through collaboration.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}