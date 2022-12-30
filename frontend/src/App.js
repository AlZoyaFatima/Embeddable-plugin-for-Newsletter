import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import Plugin from "./components/Plugin"
import Auth from "./components/Auth"

function App() {
  return (
    <div>
      <Toaster />
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<Navigate to="/home" />} path="/" />
          <Route element={<Home />} path="home" />
          <Route element={<Login />} path="login" />
          <Route element={<Signup />} path="signup" />
          <Route
            element={
              <Auth>
                <Dashboard />
              </Auth>
            }
            path="dashboard"
          />
          <Route element={<Plugin />} path="plugin" />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
