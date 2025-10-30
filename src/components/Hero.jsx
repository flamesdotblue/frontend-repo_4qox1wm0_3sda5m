import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <div className="relative w-full min-h-[80vh] md:min-h-[88vh]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white pointer-events-none" />

      <div className="relative container mx-auto px-4 pt-28 md:pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Live in style • Curated apartments
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Discover luxury apartments in the heart of the city
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-700">
            Explore modern spaces with panoramic skyline views. Filter by neighborhood,
            price, and amenities to find a home that truly fits your lifestyle.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#search"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
            >
              Start Searching
            </a>
            <a
              href="#featured"
              className="inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur px-6 py-3 text-gray-900 shadow hover:bg-white"
            >
              View Featured
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
