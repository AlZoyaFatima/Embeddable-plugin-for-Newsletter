import { Formik } from "formik"
import React from "react"
import Swal from "sweetalert2"
import './plugin.css';

const Plugin = ({ownerId}) => {


  const userSubmit = async (formdata, { setSubmitting }) => {
    console.log(formdata);

    setSubmitting(true);
    const res = await fetch('http://localhost:5000/subs/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: { 'Content-Type': 'application/json' }
    });

    console.log(res.status);
    setSubmitting(false);

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: 'Success',
        text: 'You Have Subscribed Successfully'
      })
    } else {
      //error lelert
    }


  }


  return (

    <div>
      <div className="container-fluid mycontainer2">

        <div className="row text-center justify-content-center ">
          
          <div className="col-2 ">
            <Formik initialValues={{ name: '', email: '', ownerid: ownerId, createdAt: new Date() }} onSubmit={userSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit} className="myform2" action="">
                  <h3 className='p-3'>Plugin</h3>
                  <label htmlFor="">User Name </label> <br />
                  <input type="text" value={values.name} onChange={handleChange} name="name" /> <br />
                  <label htmlFor="" >Email </label> <br />
                  <input type="email" value={values.email} onChange={handleChange} name="email" id="" />
                  <button className='btn mt-3 btn-dark' type="submit" >Submit</button>

                </form>
              )}
            </Formik>
          </div>
        </div>


      </div>
    </div>

  )
}

export default Plugin