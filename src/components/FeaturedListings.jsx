import { useMemo } from 'react';
import { MapPin, Star, Heart } from 'lucide-react';

const listingsSeed = [
  {
    id: 1,
    title: 'Skyline Loft at Aurora Tower',
    location: 'Downtown • 5th Ave',
    price: 3200,
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
    rating: 4.9,
    beds: 2,
  },
  {
    id: 2,
    title: 'Sunlit Corner in Vista Residences',
    location: 'Midtown • Park District',
    price: 2800,
    img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop',
    rating: 4.8,
    beds: 1,
  },
  {
    id: 3,
    title: 'Minimalist Haven at Horizon Place',
    location: 'Riverside • Pier 9',
    price: 4100,
    img: 'https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1600&auto=format&fit=crop',
    rating: 5,
    beds: 3,
  },
  {
    id: 4,
    title: 'Boutique Flat at The Meridian',
    location: 'Uptown • Museum Mile',
    price: 3500,
    img: 'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1600&auto=format&fit=crop',
    rating: 4.7,
    beds: 2,
  },
];

function FeaturedCard({ listing }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-lg">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={listing.img}
          alt={listing.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <button
        aria-label="Save listing"
        className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-gray-700 shadow-md backdrop-blur hover:bg-white"
      >
        <Heart className="h-5 w-5" />
      </button>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-gray-900">
            {listing.title}
          </h3>
          <div className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            {listing.rating.toFixed(1)}
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          {listing.location}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">${listing.price.toLocaleString()}/mo</p>
          <p className="text-sm text-gray-600">{listing.beds} bed{listing.beds > 1 ? 's' : ''}</p>
        </div>
      </div>
    </div>
  );
}

function FeaturedListings() {
  const listings = useMemo(() => listingsSeed, []);

  return (
    <div id="featured">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Featured Listings</h2>
          <p className="mt-1 text-gray-600">Handpicked apartments that match modern, urban living.</p>
        </div>
        <a href="#search" className="hidden md:inline-flex text-sm font-medium text-gray-900 underline-offset-4 hover:underline">
          Explore more
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {listings.map((l) => (
          <FeaturedCard key={l.id} listing={l} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedListings;
