"use client";

import { useState } from 'react';

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Process the search query here
    console.log('Searching for:', searchQuery);
    // You can navigate to another page or display search results as needed
  };

  return (
    <div className="flex justify-center items-start p-6">
      {/* Left Column */}
      <div className="flex flex-col items-center mr-4">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold mb-2">Dashboard Page</h1>
          <form onSubmit={handleSearch}>
            <div className="flex justify-center items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 w-72 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="p-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 transition duration-300"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="text-left">
          <h2 className="text-xl font-bold mb-2">Nearby Clinics</h2>
          <ul>
            <li>Clinic 1</li>
            <li>Clinic 2</li>
            {/* Add more clinic items */}
          </ul>
        </div>
      </div>


    </div>
  );
}