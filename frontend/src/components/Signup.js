import { Formik } from "formik"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import './signup.css';

const Signup = () => {

  const navigate = useNavigate();

  const userSubmit = async (formdata, {setSubmitting}) => {
    console.log(formdata);

  setSubmitting(true);
  const res = await fetch('http://localhost:5000/user/add', {
    method : 'POST',
    body : JSON.stringify(formdata),
    headers : {'Content-Type' : 'application/json'}
   });

   console.log(res.status);
   setSubmitting(false);

   if(res.status===200){
    Swal.fire({
      icon:"success",
      title: 'Success',
      text : 'You Have Registered Successfully'
    })
    navigate('/login');
   }else{
    //error lelert
   }


  }

  return (
    <div>
      <div className="container-fluid mycontainer1 text-light">
        <div className="row ">
          <div className="col  d-flex justify-content-center mt-5">
            <Formik initialValues={{firstname:'', lastname:'', email:'', password:'' }} onSubmit={userSubmit}>
            {({ values, handleSubmit, handleChange }) => (
            <form className='mb-5 myform1' onSubmit={handleSubmit}>
              <h3 className='text-center text-danger p-3'>Sign Up</h3>
              {/* 2 column grid layout with text inputs for the first and last names */}
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" name="firstname" value={values.firstname} onChange={handleChange} id="form3Example1" className="form-control bg-light" />
                    <label className="form-label" htmlFor="form3Example1">
                      First name
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input type="text" name="lastname" value={values.lastname} onChange={handleChange} id="form3Example2" className="form-control bg-light" />
                    <label className="form-label" htmlFor="form3Example2">
                      Last name
                    </label>
                  </div>
                </div>
              </div>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input type="email" name="email" id="form3Example3" value={values.email} onChange={handleChange} className="form-control bg-light" />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input type="password" name="password" value={values.password} onChange={handleChange} id="form3Example4" className="form-control bg-light" />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>
              {/* Checkbox */}
              <div className="form-check d-flex justify-content-center mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  defaultValue=""
                  id="form2Example33"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-danger btn-block mb-4">
                Sign up
              </button>
              {/* Register buttons */}
              <div className="text-center">
                <p>or sign up with:</p>
                <button type="button" className="btn btn-secondary text-danger btn-floating mx-1">
                  <i className="fab fa-facebook-f" />
                </button>
                <button type="button" className="btn btn-secondary  text-danger btn-floating mx-1">
                  <i className="fab fa-google" />
                </button>
                <button type="button" className="btn btn-secondary text-danger btn-floating mx-1">
                  <i className="fab fa-twitter" />
                </button>
                <button type="button" className="btn btn-secondary text-danger btn-floating mx-1">
                  <i className="fab fa-github" />
                </button>
              </div>
            </form>
            )}
            </Formik> 
          </div>
        </div>
      </div>

    </div>
  )
}

export default Signup