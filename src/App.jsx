import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import FeaturedListings from './components/FeaturedListings';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />

      <main className="relative z-10">
        <section className="container mx-auto px-4 -mt-24">
          <SearchBar />
        </section>

        <section className="container mx-auto px-4 pt-16">
          <FeaturedListings />
        </section>

        <section className="container mx-auto px-4 pt-20 pb-24">
          <HowItWorks />
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-gray-600 bg-white/70 backdrop-blur">
        <p>
          © {new Date().getFullYear()} Skyline Homes — Find your next apartment with ease.
        </p>
      </footer>
    </div>
  );
}

export default App;
