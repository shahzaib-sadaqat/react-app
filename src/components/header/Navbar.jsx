import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <h2 className="navbar-brand fw-bold fs-3">SHAHZAIB.</h2>
          {/* Hamburger toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Add image element for tablet screens */}
            <img
              src="/images/home.jpg"
              alt="Menu Image"
              className="menu-image img-fluid p-2"
            />
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/news"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  background: #f6fbff;

  a {
    padding: 8px 20px !important;
  }

  .active {
    background: #333333;
    color: #fff !important;
    padding: 8px 20px !important;
    transition: all 0.3s ease-in;
  }

  /* Hide the image by default */ 
  .menu-image {
    display: none;
    width: 100px; /* Adjust the width as needed */
    height: auto;
    margin-left: 20px; /* Add space between the image and menu if needed */
  }

  /* Display the image only on tablet screens (768px - 991px) */
  @media (max-width: 991px) {
    .menu-image {
      display: inline-block;
    }
  }
`;
