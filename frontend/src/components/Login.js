import React from "react"
import "./login.css"
import { Formik } from "formik"
import Swal from "sweetalert2"

const Login = () => {
  const userSubmit = async (formdata) => {
    console.log(formdata)

    const res = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })

    console.log(res.status)

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "WellDone!!",
        text: "Loggedin Successfully!!",
      })

      const data = await res.json();
      console.log(data);
      sessionStorage.setItem('user', JSON.stringify(data));

    } else if (res.status === 401) {
      Swal.fire({
        icon: "error",
        title: "OOops!!",
        text: "Loggin Failed!!",
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "OOops!!",
        text: "Some Error Occured!!",
      })
    }
  }
  return (
    <div>
      <div className="container-fluid ">
        <div className="row myrow">
          <div className="col leftcol p-0">
            <img
              className="img-fluid leftcol"
              src="https://cdn.dribbble.com/users/2561416/screenshots/15218794/login_background_4x.png"
              alt=""
            />
          </div>
          <div className="col d-flex justify-content-center rightcol p-0 text-light">
            <Formik initialValues={{ email: "", password: "" }} onSubmit={userSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit} className="myform">
                  <h3 className="text-center p-3">Login</h3>

                  <div className="form-outline mb-4 myinput">
                    <input
                      type="email"
                      id="form2Example1"
                      className="form-control bg-light"
                      value={values.email}
                      onChange={handleChange}
                      name="email"
                    />
                    <label className="form-label" htmlFor="form2Example1">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4  myinput">
                    <input
                      type="password"
                      id="form2Example2"
                      className="form-control bg-light"
                      value={values.passwordl}
                      onChange={handleChange}
                      name="password"
                    />
                    <label className="form-label" htmlFor="form2Example2">
                      Password
                    </label>
                  </div>

                  <div className="row mb-4 text-center myinput">
                    <a href="#!" className="text-light">
                      Forgot password?
                    </a>
                  </div>

                  <button type="submit" className="btn btn-primary  btn-block mb-4 myinput">
                    log in
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
