

export default function Page() {
    return (
        <div>
            <div className=" flex justify-center items-start p-6 rounded-md">

                <div className="flex justify-center items-start p-6">
                    {/* Left Column */}
                    <div className="flex flex-col items-center mr-4 ">
                        <div className="text-center mb-4">
                            <div className='p-3 rounded-xl bg-gradient-to-r from-clinicCustomColor-400 to-clinicCustomColor-500'>
                                {/* <h1 className="text-3xl text-white font-semibold mb-2 p-1">Available Walk-In Clinics Near You</h1> */}
                                <div className="m-12 text-white ">
                                    <div>
                                        <h1 className=" font-extrabold text-6xl p-5">Queue Status</h1>
                                        <div className="p-5 py-8">
                                            <h5 className="font-bold text-3xl pb-6">You are in position <b>5</b> at <b>WELL Health Medical Centre</b></h5>
                                            <h5 className="font-bold text-3xl">With a <b>30 minute</b> wait.</h5>
                                            <div className=" pt-16">
                                                <div>
                                                    <h5>We will contact you via text or phone call <b>10 minutes</b> prior to your apointment to confirm your spot.</h5>
                                                    <h5>In the event of no confirmation, we will cancel your apointment.</h5>
                                                    <h5>Please re-renter the waitlist at your earliest convenience.</h5>
                                                </div>
                                                
                                        </div>
                                            </div>
                                            
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    )
}