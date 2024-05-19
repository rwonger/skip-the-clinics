"use client";
import { useState } from 'react';
import { redirect } from 'next/navigation';

// Dummy data for clinics
const clinics = [
  {name:"Pacific Medical Clinic", location:1, distance: 10},
  {name:"Simply Wellness Medical", location:2, distance: 9},
  {name:"Commercial Drive Medical Clinic", location:3, distance: 5},
  {name:"Fraser Care Clinic", location:4, distance: 13},
  {name:"Southeast Urgent and Primary Care Centre", location:5, distance: 4},
  {name:"WELL Health Medical Centres", location:6, distance: 2},
  {name:"East Van Medical Clinic", location:7, distance: 8},
  {name:"Care Point Medical Clinic", location:8, distance: 9},
  {name:"Keefer Walk-in and Medical Clinic", location:9, distance: 4}
  // Add more clinics as needed
];

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  
  async function getClinics() {
    const response = await fetch('http://localhost:8000/locations');
    const clinics = response.json();
  }

  const handleSearch = (event:any) => {
    event.preventDefault();
    // Process the search query here
    console.log('Searching for:', searchQuery);
    // You can navigate to another page or display search results as needed
  };

  async function handleJoinWaitlist() {
    const response = await fetch('http://localhost:8000/enqueue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        healthNumber: "12345",
        clinicIds: [1, 2, 3]
      }),
    })
    redirect('/joined');
  };

  return (
    <div className=" flex justify-center items-start p-6 rounded-md">
      {/* <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" /> */}
      <div className="flex justify-center items-start p-6">
        {/* Left Column */}
        <div className="flex flex-col items-center mr-4 ">
          <div className="text-center mb-4">
            <div className='p-3 rounded-xl bg-gradient-to-r from-clinicCustomColor-400 to-clinicCustomColor-500'>
              {/* <h1 className="text-3xl text-white font-semibold mb-2 p-1">Available Walk-In Clinics Near You</h1> */}
              <img className="rounded-lg" src="/map_pic.png"></img>
            </div>
            {/* <form action={getClinics}>
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
          </form> */}
            <button
              onClick={handleJoinWaitlist}
              className="mt-4 p-2 w-full font-semibold bg-clinicCustomColor-400 text-white rounded-md hover:bg-orange-500 transition duration-300"
            >
              Join the Waitlist Now
            </button>
          </div>

          <div className='mr-auto px-3 pb-3'>
            <h3 className='text-lg'><b>9</b> available <b>Walk-In Clinics</b> near me in Vancouver, BC</h3>
          </div>
          <div className="overflow-y-auto h-96 w-full border border-gray-200 p-4 rounded-md">
            {clinics.map((clinic, index) => (
              <div key={index} className="border border-gray-300 rounded-md p-4 mb-4 shadow-md relative">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{clinic.name}</h3>
                    <p>#{clinic.location}</p>
                    <p>{clinic.distance} km away </p>
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
    </div>

  );
}