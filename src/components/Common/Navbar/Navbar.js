import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (     
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link ms-5 active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-5" href="/">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-5" href="/">Service</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-5" href="/">Testimonial</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-5" href="/">Contact</a>
          </li>
          <li class="nav-item">
            <Link className="nav-link mr-5" to="/dashboard">Dashboard</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link mr-5" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;