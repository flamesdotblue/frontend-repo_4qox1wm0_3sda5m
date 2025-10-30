import { useState } from 'react';
import { Search, MapPin, Home } from 'lucide-react';

function SearchBar() {
  const [form, setForm] = useState({ location: '', minPrice: '', maxPrice: '', beds: 'any' });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(form).toString();
    // For now we just update the URL hash to simulate a search action
    window.location.hash = `search?${query}`;
  };

  return (
    <form
      id="search"
      onSubmit={submit}
      className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-3 rounded-2xl border bg-white/80 backdrop-blur p-4 shadow-xl"
    >
      <div className="md:col-span-2">
        <label className="flex items-center gap-2 text-sm text-gray-600 mb-1">
          <MapPin className="h-4 w-4" /> Location
        </label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={onChange}
          placeholder="Neighborhood or city"
          className="w-full rounded-xl border-gray-200 bg-white px-4 py-3 focus:border-gray-900 focus:ring-gray-900/20"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Min Price</label>
        <input
          type="number"
          name="minPrice"
          value={form.minPrice}
          onChange={onChange}
          placeholder="$1,500"
          className="w-full rounded-xl border-gray-200 bg-white px-4 py-3 focus:border-gray-900 focus:ring-gray-900/20"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Max Price</label>
        <input
          type="number"
          name="maxPrice"
          value={form.maxPrice}
          onChange={onChange}
          placeholder="$4,000"
          className="w-full rounded-xl border-gray-200 bg-white px-4 py-3 focus:border-gray-900 focus:ring-gray-900/20"
        />
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm text-gray-600 mb-1">
          <Home className="h-4 w-4" /> Bedrooms
        </label>
        <select
          name="beds"
          value={form.beds}
          onChange={onChange}
          className="w-full rounded-xl border-gray-200 bg-white px-4 py-3 focus:border-gray-900 focus:ring-gray-900/20"
        >
          <option value="any">Any</option>
          <option value="studio">Studio</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3+</option>
        </select>
      </div>

      <div className="flex items-end">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 font-medium text-white shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
        >
          <Search className="h-5 w-5" /> Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
