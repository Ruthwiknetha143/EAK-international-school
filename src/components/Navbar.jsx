import React from "react";

function Navbar() {


  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light-subtle shadow-sm sticky-top">
      <div className="container py-2">

        <a href="#">
          <img src="/logo.png" width="110" className="img-fluid navbar-brand mb-0" />
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#myNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar-nav mx-auto gap-lg-3">
            <li className="nav-item"><a className="nav-link" href="#why-us">Why Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#programs">Programs</a></li>
            <li className="nav-item"><a className="nav-link" href="#facilities">Facilities</a></li>
            <li className="nav-item"><a className="nav-link" href="#process">Admission Process</a></li>
            <li className="nav-item"><a className="nav-link" href="#fees">Fees</a></li>
            <li className="nav-item"><a className="nav-link" href="#faqs">FAQ</a></li>
          </ul>

          <a className="btn btn-primary second-c fw-bold rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#EnquiryModal">Enquire Now</a>
        </div>

      </div>
    </nav>

  );
}

export default Navbar;
