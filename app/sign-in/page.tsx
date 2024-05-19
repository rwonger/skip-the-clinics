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
                  <h2>Welcome to SkipToClinic</h2>
                  <p>Don't have an account?</p>
                  <Link
                        href="/sign-in"
                        className="btn btn-white btn-outline-white">
                        <span>Sign Up</span> <ArrowRightIcon className="w-5 md:w-6" />
                  </Link>
                  {/* <a href="#" className="btn btn-white btn-outline-white">Sign Up</a> */}
                </div>
              </div>
              {/* <div className="login-wrap p-4 p-lg-5"> */}
              <div>
                  <div>
                  <div className="bg-white items-center justify-center flex">
                    <div className="bg-white rounded-lg w-100 p-8 mx-10">
                      <p className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</p>
                      <form>
                        <div className="form-group mb-3">
                          <label className="label" htmlFor="name">Email Address</label>
                          <input type="text" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="form-group mb-3">
                          <label className="label" htmlFor="name">Email Address</label>
                          <input type="text" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="form-group mb-3">
                          <label className="label" htmlFor="name">Email Address</label>
                          <input type="text" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="form-group mb-3">
                          <label className="label" htmlFor="name">Email Address</label>
                          <input type="text" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="items-center justify-between flex">
                          <div className="items-center flex">
                            <input type="checkbox" className="rounded border-gray-300 focus:ring-indigo-500 h-4 w-4 text-indigo-600" />
                            <label className="ml-2 text-xs text-gray-700">I agree to the terms and conditions</label>
                          </div>
                        </div>
                        <div className="mt-6">
                          <button type="submit" className="inline-flex border border-indigo-500 focus:outline-none
                        focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full items-center justify-center rounded-md py-2
                        px-4 bg-indigo-600 text-sm font-medium text-white shadow-sm">Sign Up</button>
                        </div>
                      </form>
                    </div>
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
  
  