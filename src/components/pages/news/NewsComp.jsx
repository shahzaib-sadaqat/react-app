import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NewsComp = () => {
  return (
    <NewsData>
      <div className="featurette mt-0 mx-2 d-flex align-items-center">
        <div className="col-md-8 order-md-2 p-5 cst-height">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="featurette-heading d-flex align-items-center justify-content-between fs-3 py-3 fw-bold text-uppercase"
          >
            Latest News
            <div className="custom-divider"></div>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="main"
          >
            <div className="row g-4 py-3 row-cols-1 row-cols-lg-1">
              <div className="col d-flex cst-col align-items-center">
                <div className="icon-square text-dark flex-shrink-0 me-3">
                  <span className="fw-bold border-radius-5 p-3 fs-5 rounded-circle cst-span">
                    01
                  </span>
                </div>
                <div className="vertical-divider"></div>
                <div className="px-4">
                  <p>August 9, 2024 Branding 0 Comments</p>
                  <h3 className="cst-ah">Reasons Why People Use Discord</h3>
                </div>
                <div className="img-fluid w-25 text-end img-show">
                  <img className="w-50" src="/images/1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row g-4 py-3 row-cols-1 row-cols-lg-1">
              <div className="col d-flex cst-col align-items-center">
                <div className="icon-square text-dark flex-shrink-0 me-3">
                  <span className="fw-bold border-radius-5 p-3 fs-5 rounded-circle cst-span">
                    02
                  </span>
                </div>
                <div className="vertical-divider"></div>
                <div className="px-4">
                  <p>August 9, 2024 Branding 0 Comments</p>
                  <h3 className="cst-ah">Why We Should Read Fewer Books</h3>
                </div>
                <div className="img-fluid w-25 text-end img-show">
                  <img className="w-50" src="/images/1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row g-4 py-3 row-cols-1 row-cols-lg-1">
              <div className="col d-flex cst-col align-items-center">
                <div className="icon-square text-dark flex-shrink-0 me-3">
                  <span className="fw-bold border-radius-5 p-3 fs-5 rounded-circle cst-span">
                    03
                  </span>
                </div>
                <div className="vertical-divider"></div>
                <div className="px-4">
                  <p>August 9, 2024 Branding 0 Comments</p>
                  <h3 className="cst-ah">A Final Farewell to the iPod</h3>
                </div>
                <div className="img-fluid w-25 text-end img-show">
                  <img className="w-50" src="/images/1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row g-4 py-3 row-cols-1 row-cols-lg-1">
              <div className="col d-flex cst-col align-items-center">
                <div className="icon-square text-dark flex-shrink-0 me-3">
                  <span className="fw-bold border-radius-5 p-3 fs-5 rounded-circle cst-span">
                    04
                  </span>
                </div>
                <div className="vertical-divider"></div>
                <div className="px-4">
                  <p>August 9, 2024 Branding 0 Comments</p>
                  <h3 className="cst-ah">
                    Dealing with Spring Allergy Symptoms
                  </h3>
                </div>
                <div className="img-fluid w-25 text-end img-show">
                  <img className="w-50" src="/images/1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row g-4 py-3 row-cols-1 row-cols-lg-1">
              <div className="col d-flex cst-col align-items-center">
                <div className="icon-square text-dark flex-shrink-0 me-3">
                  <span className="fw-bold border-radius-5 p-3 fs-5 rounded-circle cst-span">
                    05
                  </span>
                </div>
                <div className="vertical-divider"></div>
                <div className="px-4">
                  <p>August 9, 2024 Branding 0 Comments</p>
                  <h3 className="cst-ah">How to Take a Break from Yourself</h3>
                </div>
                <div className="img-fluid w-25 text-end img-show">
                  <img className="w-50" src="/images/1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row g-4 py-3 row-cols-1 row-cols-lg-1">
              <div className="col d-flex cst-col align-items-center">
                <div className="icon-square text-dark flex-shrink-0 me-3">
                  <span className="fw-bold border-radius-5 p-3 fs-5 rounded-circle cst-span">
                    06
                  </span>
                </div>
                <div className="vertical-divider"></div>
                <div className="px-4">
                  <p>August 9, 2024 Branding 0 Comments</p>
                  <h3 className="cst-ah">The Age of Extinction Is Here</h3>
                </div>
                <div className="img-fluid w-25 text-end img-show">
                  <img className="w-50" src="/images/1.jpg" alt="" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="col-md-5 order-md-1 cst-home-img"></div>
      </div>
    </NewsData>
  );
};

export default NewsComp;

const NewsData = styled.div`
@media (max-width: 576px) {
    .p-5{
      padding: 1rem !important;
    }
    .col-10{
      width: 100% !important;
    }
  }
  @media (max-width: 767px) {
    .cst-height {
      height: calc(100vh - 125px);
    }
    .cst-home-img {
      display: none;
    }
  }
  .custom-divider {
    height: 2px; /* Thickness of the divider */
    background-color: #ccc; /* Color of the divider */
    margin: 20px 0; /* Space around the divider */
    width: 75%; /* Full width */
  }
  .vertical-divider {
    width: 2px; /* Thickness of the divider */
    background-color: #ccc; /* Color of the divider */
    margin: 20px; /* Space around the divider */
    height: 100%; /* Full width */
    transform: rotateZ(20deg);
  }
  .cst-span {
    background-color: #b9b8c3 !important;
  }
  .img-show {
    display: none;
  }
  .cst-col {
    transition: all 0.8s ease;
    position: relative;
    cursor: pointer;
  }
  .cst-col:hover .img-show {
    position: absolute;
    top: -10px;
    right: 10%;
    display: block;
    transition: all 0.8s ease;
  }
  .cst-ah {
    display: inline-block;
    position: relative;
    text-decoration: none;
    padding: 5px 0;
  }
  .cst-ah::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    border-radius: 5px;
    height: 0.1em;
    bottom: 0;
    left: 0;
    background: currentcolor;
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
  }
  .cst-ah:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  p {
    color: #000;
    margin-bottom: 0;
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
