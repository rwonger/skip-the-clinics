import Link from "next/link";
import '/app/styles/bootstrap/bootstrap.min.css';
import LoginForm from "../ui/login-form";
import { useState } from "react";
import { redirect } from 'next/navigation';


export default function Page() {
  async function login(formData:any) {
    "use server";
    var success = false;
    debugger;
    const username = formData.get("username");
    const password = formData.get("password");
    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
    .then(response => {
      if (response.redirected) {
        success = true;
      }
    })
    .catch(error => {
      console.log(error);
    });
    if (success) {
      redirect('/dashboard');
    }
  }

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
                      href="/sign-up"
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
                  <form action={login} className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="name">Email Address</label>
                      <input type="text" className="form-control" name="username" placeholder="Username" required />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="password">Password</label>
                      <input type="password" className="form-control" name="password" placeholder="Password" required />
                    </div>
                    {/* replace with submit button for form functionality */}
                    <div className="form-group">
                      <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
                    </div>
                    {/* <div className="form-group mt-4">
                          <Link
                            href="/dashboard"
                            className="form-control btn btn-primary submit px-3">
                              <span>Sign In</span>
                          </Link>
                        </div> */}
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

