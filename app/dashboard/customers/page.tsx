

export default function Page() {
    return (
        <section className="ftco-section">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap  justify-center">
          </div>
          <div className="flex flex-wrap  justify-center">
            <div className="md:w-full lg:w-4/5">
              <div className="wrap md:flex">
                <div className="text-wrap p-6 lg:p-12 text-center flex items-center">
                
                </div>
                {/* <div className="login-wrap p-6 lg:p-12"> */}
                <div className="login-wrap">
                  <div>
                    <div className="bg-white w-full p-8">
                    <h1 className='text-xl py-8'>Your Information</h1>
                      <form>
                        <div className="flex flex-wrap -mr-1 -ml-1">
                          <div className="mb-4 md:w-1/2 pr-4 ">
                            <label className="label" htmlFor="name">First Name</label>
                            <input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="First Name" required disabled/>
                          </div>
                          <div className="mb-4 md:w-1/2  pl-4">
                            <label className="label" htmlFor="name">Last Name</label>
                            <input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Last Name" required disabled/>
                          </div>
                        </div>
                        <div className="mb-4 mb-3">
                          <label className="label" htmlFor="dob">Date of Birth</label>
                          <input type="date" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="dob" required disabled/>
                        </div>
                        <div className="mb-4 mb-3">
                          <label className="label" htmlFor="name">Phone Number</label>
                          <input type="tel" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="123-456-7890" required disabled/>
                        </div>
                        <div className="mb-4 mb-3">
                          <label className="label" htmlFor="name">E-mail Address</label>
                          <input type="email" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="email@email.com" required disabled/>
                        </div>
                        <div className="mb-4 mb-3">
                          <label className="label" htmlFor="name">Address</label>
                          <input type="email" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Current Address" required disabled/>
                        </div>
                        <div className="flex flex-wrap -mr-1 -ml-1">
                          <div className="mb-4 md:w-1/2 pr-4 ">
                            <label className="label" htmlFor="name">Postal Code</label>
                            <input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Current Postal Code" required disabled/>
                          </div>
                          <div className="mb-4 md:w-1/2  pl-4">
                            <label className="label" htmlFor="name">City</label>
                            <input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Current City" required disabled/>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mr-1 -ml-1">
                          <div className="mb-4 md:w-1/2 pr-4 ">
                            <label className="label" htmlFor="name">State/Province</label>
                            <input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Current State/Province" required disabled/>
                          </div>
                          <div className="mb-4 md:w-1/2  pl-4">
                            <label className="label" htmlFor="name">Country</label>
                            <input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Current Country" required disabled/>
                          </div>
                        </div>
                        <div className="mb-4 mb-3">
                          <label className="label" htmlFor="name">Personal Health Number</label>
                          <input type="email" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="9********" required disabled/>
                        </div>
                        {/* replace with submit button for form functionality */}

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}