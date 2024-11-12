import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RiBox3Line } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";

const ServComp = () => {
  return (
    <ServicesData>
      <div className="featurette mt-0 mx-2 d-flex align-items-center">
        <div className="col-md-8 order-md-2 p-5 cst-height">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="featurette-heading d-flex align-items-center justify-content-between fs-3 py-3 fw-bold text-uppercase"
          >
            Services
            <div className="custom-divider"></div>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="row align-items-md-stretch justify-content-center gap-5"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="col-lg-5 col-md-10 col-sm-12 cst-col shadow-sm rounded-3"
            >
              <div className="py-5 px-2 text-center">
                <h2 className="cst-icon">
                  <RiBox3Line />
                </h2>
                <h2 className="h2">3D Animation</h2>
                <p className="p">
                  Developing website involves creating your website, making it
                  one of the most vital parts of your marketing
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100, y: -100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -100, y: 100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="col-lg-5 col-md-10 col-sm-12 cst-col shadow-sm rounded-3"
            >
              <div className="py-5 px-2 text-center">
                <h2 className="cst-icon">
                  <MdOndemandVideo />
                </h2>
                <h2 className="h2">Explainer Videos</h2>
                <p className="p">
                  Developing website involves creating your website, making it
                  one of the most vital parts of your marketing
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="row align-items-md-stretch justify-content-center gap-5 mt-5"
          >
            <div className="col-lg-5 col-md-10 col-sm-12 cst-col shadow-sm rounded-3">
              <div className="py-5 px-2 text-center">
                <h2 className="cst-icon">
                  <RiBox3Line />
                </h2>
                <h2 className="h2">App Development</h2>
                <p className="p">
                  Developing website involves creating your website, making it
                  one of the most vital parts of your marketing
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-10 col-sm-12 cst-col shadow-sm rounded-3">
              <div className="py-5 px-2 text-center">
                <h2 className="cst-icon">
                  <MdOndemandVideo />
                </h2>
                <h2 className="h2">Educational Video</h2>
                <p className="p">
                  Developing website involves creating your website, making it
                  one of the most vital parts of your marketing
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="row align-items-md-stretch justify-content-center gap-5 mt-5"
          >
            <div className="col-lg-5 col-md-10 col-sm-12 cst-col shadow-sm rounded-3">
              <div className="py-5 px-2 text-center">
                <h2 className="cst-icon">
                  <RiBox3Line />
                </h2>
                <h2 className="h2">3D Game Art</h2>
                <p className="p">
                  Developing website involves creating your website, making it
                  one of the most vital parts of your marketing
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-10 col-sm-12 cst-col shadow-sm rounded-3">
              <div className="py-5 px-2 text-center">
                <h2 className="cst-icon">
                  <MdOndemandVideo />
                </h2>
                <h2 className="h2">Presentations</h2>
                <p className="p">
                  Developing website involves creating your website, making it
                  one of the most vital parts of your marketing
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="col-md-5 order-md-1 cst-home-img"></div>
      </div>
    </ServicesData>
  );
};

export default ServComp;

const ServicesData = styled.div`
  @media (max-width: 767px) {
    .cst-height {
      height: calc(100vh - 125px);
      width: 100%;
    }
    .cst-home-img {
      display: none;
    }
    .ms-5 {
      margin-left: 0 !important;
    }
    .me-5 {
      margin-right: 0 !important;
    }
  }
  .custom-divider {
    height: 2px; /* Thickness of the divider */
    background-color: #ccc; /* Color of the divider */
    margin: 20px 0; /* Space around the divider */
    width: 80%; /* Full width */
  }
  p {
    color: #000;
  }

  .cst-col:hover {
    background-color: #000;
    color: #fff;
    transition: all 0.5s ease;
    cursor: pointer;
  }
  .cst-col:hover .h2 .p {
    color: #fff;
  }
  .cst-col:hover .p {
    color: #fff;
  }
  .cst-icon {
    font-size: 3vw;
  }
  .cst-height {
    height: calc(100vh - 135px);
    overflow-y: auto;
  }
  .cst-width {
    width: 45vw;
  }
  .cst-home-img {
    background: url("/images/home.jpg") no-repeat
      center center / cover;
    height: calc(100vh - 135px);
    width: 33vw;
  }
`;
