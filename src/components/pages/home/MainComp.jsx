import React from "react";
import styled from "styled-components";
import TypingText from "../../typewritereffects/TypingText";
import Button from "../../buttons/Button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MainComp = () => {
  return (
    <Main>
      <div className="featurette mt-0 mx-2 d-flex align-items-center cst-height">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="col-md-12 col-sm-12 order-md-2 px-5"
        >
          <h2 className="featurette-heading fw-bold">SHAHZAIB</h2>
          <div className="custom-divider"></div>
          <p className="fs-3 d-flex gap-2">Creative{<TypingText />}</p>
          <NavLink to="/contact">
            <Button
              label="Get in Touch"
              color="dark"
              size="large"
              navigateTo="/contact"
            />
          </NavLink>
        </motion.div>
        <div className="col-md-5 order-md-1 cst-home-img"></div>
      </div>
    </Main>
  );
};

export default MainComp;

const Main = styled.main`
  @media (max-width: 767px) {
    .cst-height {
      height: calc(100vh - 125px);
    }
    .cst-home-img {
      display: none;
    }
    h2 {
      font-size: 50px !important;
    }
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 40px !important;
    }
  }

  overflow: hidden;
  .custom-divider {
    height: 5px; /* Thickness of the divider */
    background-color: #000; /* Color of the divider */
    margin: 20px 0; /* Space around the divider */
    width: 8%; /* Full width */
  }

  h2 {
    font-size: 70px;
    color: #000;
  }
  p {
    color: #000;
  }
  .Typewriter {
    color: #000 !important;
  }
  .cst-home-img {
    background: url("/images/home.jpg") no-repeat
      center center / cover;
    height: calc(100vh - 135px);
    width: 33vw;
  }
`;
