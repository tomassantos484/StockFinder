'use client';

import { useState } from 'react';

interface Store {
  location_id: string;
  store_name: string;
  mailing_address: {
    address_line1: string;
    city: string;
    state: string;
    postal_code: string;
  };
  store_positions: Array<{
    aisle: number;
    block: string;
  }>;
}

interface SearchResult {
  itemName: string;
  success: boolean;
  stores: Store[];
}

export default function SearchProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSearchResult(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/checkStock`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemName: searchTerm,
          zipCode: zipCode,
          website: 'target'
        }),
      });

      const data = await response.json();
      setSearchResult(data);
    } catch (err) {
      setError('Failed to search for product. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-montserrat font-semibold text-[#111827] mb-4">
          Search for Products
        </h2>
        <form onSubmit={handleSearch} className="flex gap-4">
          <input
            type="text"
            placeholder="Enter product name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#34D399] text-gray-900 placeholder:text-gray-500"
            required
          />
          <input
            type="text"
            placeholder="Enter ZIP code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="w-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#34D399] text-gray-900 placeholder:text-gray-500"
            required
            pattern="[0-9]{5}"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="bg-[#34D399] text-white px-6 py-2 rounded-md hover:bg-[#2EB37A] transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>

      {/* Results Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-montserrat font-semibold text-[#111827] mb-4">
          Search Results
        </h2>
        
        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}

        {!searchResult && !error && (
          <p className="text-gray-500">
            Enter a product name and ZIP code to search for availability.
          </p>
        )}

        {searchResult && !searchResult.success && (
          <p className="text-amber-600">
            {searchResult.itemName} is not in stock at any nearby stores.
          </p>
        )}

        {searchResult && searchResult.success && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {searchResult.itemName}
            </h3>
            
            <div className="space-y-4">
              {searchResult.stores.map((store) => (
                <div 
                  key={store.location_id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-[#111827] mb-2">
                    {store.store_name}
                  </h4>
                  <p className="text-gray-600 mb-2">
                    {store.mailing_address.address_line1}<br />
                    {store.mailing_address.city}, {store.mailing_address.state} {store.mailing_address.postal_code}
                  </p>
                  {store.store_positions && store.store_positions.length > 0 && (
                    <div className="text-sm text-gray-500">
                      <p className="font-medium">In-Store Location:</p>
                      <ul className="list-disc list-inside">
                        {store.store_positions.map((pos, idx) => (
                          <li key={idx}>
                            Aisle {pos.aisle}, Block {pos.block}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 