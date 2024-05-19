import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import '/app/styles/bootstrap/bootstrap.min.css';




export default function Page() {


    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            {/* <link rel="stylesheet" href="#" /> */}
            {/* TODO: add href for .css for thog */}
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center">
                                    <div className="text w-100">
                                        <h2>Register for SkipToClinic</h2>
                                        <ul>
                                            <li>
                                                • Simplify access to walk-in clinic services
                                            </li>
                                            <li>
                                                • Skip the in-person wait times for walk-in clinics
                                            </li>
                                            <li>
                                                • Instantly queue to the nearest walk-in clinics with a single click
                                            </li>
                                        </ul>
                                        {/* <a href="#" className="btn btn-white btn-outline-white">Sign Up</a> */}
                                    </div>
                                </div>
                                {/* <div className="login-wrap p-4 p-lg-5"> */}
                                <div className="login-wrap">
                                    <div>
                                        <div className="bg-white w-full p-8">
                                            <h3 className="mb-4">Your Information</h3>
                                            <form>
                                                <div className="form-group mb-3">
                                                    <label className="label" htmlFor="name">Address</label>
                                                    <input type="text" className="form-control" placeholder="Ender your address" required />
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label className="label" htmlFor="name">Postal Code</label>
                                                        <input type="text" className="form-control" placeholder="Ender your postal code" required />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label className="label" htmlFor="name">City</label>
                                                        <input type="text" className="form-control" placeholder="Enter your city" required />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-5">
                                                        <label className="label" htmlFor="name">State/Province</label>
                                                        <input type="text" className="form-control" placeholder="Enter your state" required />
                                                    </div>
                                                    <div className="form-group col-md-7">
                                                        <label className="label" htmlFor="name">Country</label>
                                                        <input type="text" className="form-control" placeholder="Enter your country" required />
                                                    </div>
                                                </div>

                                                <div className="form-group mb-3">
                                                    <label className="label" htmlFor="name">Personal Health Number</label>
                                                    <input type="text" className="form-control" placeholder="" required />
                                                </div>
                                                {/* replace with submit button for form functionality */}
                                                {/* <div className="form-group">
                      <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
                    </div> */}
                                                <div className="form-group mt-4">
                                                    <Link
                                                        href="/dashboard"
                                                        className="form-control btn btn-primary submit px-3">
                                                        <span>Sign In</span>
                                                    </Link></div>

                                            </form>
                                        </div>
                                    </div>
                                    {/* </div> */}

                                    {/* <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Your Information</h3>
                  </div>
                </div>
                <form action="#" className="signin-form">
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="name">Email Address</label>
                    <input type="text" className="form-control" placeholder="Email" required />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password" required />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
                  </div>
                </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
}

{/* <div className="items-center justify-between flex">
                          <div className="items-center flex">
                            <input type="checkbox" className="rounded border-gray-300 focus:ring-indigo-500 h-4 w-4 text-indigo-600" />
                            <label className="ml-2 text-xs text-gray-700">I agree to the terms and conditions</label>
                          </div>
                        </div> */}