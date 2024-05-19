"use client";

import { useState } from 'react';

// Dummy data for clinics
const clinics = [
  { name: 'Clinic 1', location: 'Location 1', distance: '2 miles', status: 'Waiting' },
  { name: 'Clinic 2', location: 'Location 2', distance: '5 miles', status: 'Waiting' },
  { name: 'Clinic 3', location: 'Location 3', distance: '1 mile', status: 'Waiting' },
  { name: 'Clinic 4', location: 'Location 4', distance: '1 mile', status: 'Not in line' },
  // Add more clinics as needed
];

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Process the search query here
    console.log('Searching for:', searchQuery);
    // You can navigate to another page or display search results as needed
  };

  const handleJoinWaitlist = () => {
    // Handle the "Join the Waitlist" action here
    console.log('Join the Waitlist Now');
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
          <button
            onClick={handleJoinWaitlist}
            className="mt-4 p-2 w-full bg-clinicCustomColor-400 text-white rounded-md hover:bg-orange-500 transition duration-300"
          >
            Join the Waitlist Now
          </button>
        </div>
        <div className="overflow-y-auto h-96 w-full border border-gray-200 p-4 rounded-md">
          {clinics.map((clinic, index) => (
            <div key={index} className="border border-gray-300 rounded-md p-4 mb-4 shadow-md relative">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{clinic.name}</h3>
                  <p>{clinic.location}</p>
                  <p>{clinic.distance}</p>
                </div>
                <button
                  className={`px-2 py-1 text-sm rounded ${clinic.status === 'Waiting' ? 'bg-red-500 text-white' : 'bg-gray-500 text-white'}`}
                >
                  {clinic.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}