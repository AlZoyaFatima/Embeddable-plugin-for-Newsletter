import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css';



const Navbar = () => {
  return (
    <div>
      <>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <a className="navbar-brand mt-2 mt-lg-0" href="/home">
                <h2>EPFN</h2>
              </a>


              
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mynav ">


                  
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                      Sign up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard">
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/plugin">
                      Plugin
                    </NavLink>
                  </li>
                </ul>
              </div>


            </div>







          

        </nav>

      </>

    </div>
  )
}

export default Navbar