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
                    
                  </div>
                </div>
                {/* <div className="login-wrap p-4 p-lg-5"> */}
                <div className="login-wrap">
                  <div>
                    <div className="bg-white w-full p-8">
                      <h3 className="mb-4">Your information</h3>
                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label className="label" htmlFor="name">First Name</label>
                            <input type="text" className="form-control" placeholder="First Name" required />
                          </div>
                          <div className="form-group col-md-6">
                            <label className="label" htmlFor="name">Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" required />
                          </div>
                        </div>
                        <div className="form-group mb-3">
                          <label className="label" htmlFor="dob">Date of Birth</label>
                          <input type="date" className="form-control" id="dob" required />
                        </div>
                        <div className="form-group mb-3">
                          <label className="label" htmlFor="name">Phone Number</label>
                          <input type="tel" className="form-control" placeholder="123-456-7890" required />
                        </div>
                        <div className="form-group mb-3">
                          <label className="label" htmlFor="name">E-mail Address</label>
                          <input type="email" className="form-control" placeholder="email@email.com" required />
                        </div>
                        {/* replace with submit button for form functionality */}
                        <div className="d-flex justify-content-end mx-2">
                          <Link
                            href="/sign-up-next"
                            className="btn btn-primary px-4">
                            <ArrowRightIcon className="w-5 md:w-6" />
                          </Link>
                        </div>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


  );
}

