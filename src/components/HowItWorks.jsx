import { Search, MapPin, Shield } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Search & Filter',
    desc: 'Use powerful filters to narrow by neighborhood, price, size, and amenities.',
  },
  {
    icon: MapPin,
    title: 'Explore Neighborhoods',
    desc: 'See proximity to parks, transit, and hotspots with interactive maps.',
  },
  {
    icon: Shield,
    title: 'Apply with Confidence',
    desc: 'Verified listings and secure applications make moving stress‑free.',
  },
];

function HowItWorks() {
  return (
    <div className="rounded-3xl border bg-white p-6 sm:p-8 shadow-sm">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">How it works</h2>
      <p className="mt-1 text-gray-600 max-w-2xl">From discovery to move‑in, we streamline every step so you can focus on finding the perfect place.</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {steps.map((s, i) => (
          <div key={i} className="rounded-2xl border bg-white/70 p-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">{s.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
