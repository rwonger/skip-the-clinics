import Link from "next/link";
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
                      <span>Sign Up</span>
                    </Link>
                    {/* <a href="#" className="btn btn-white btn-outline-white">Sign Up</a> */}
                  </div>
                </div>
                <div className="login-wrap p-4 p-lg-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Sign In</h3>
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


  );
}

