import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const PortComp = () => {
  return (
    <PortCompSub>
      <div className="featurette mt-0 mx-2 d-flex align-items-center">
        <div className="col-lg-8 col-md-8 col-sm-12 order-md-2 p-5 cst-height">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="featurette-heading d-flex align-items-center justify-content-between fs-3 py-3 fw-bold text-uppercase"
          >
            Creative Portfolio
            <div className="custom-divider"></div>
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="nav nav-pills mb-3"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Youtube
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Image
              </button>
            </li>
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="tab-content"
            id="pills-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="d-flex justify-content-between flex-wrap cst-gap">
                <div className="image-with-text img-fluid">
                  <div className="bg-img-1"></div>
                  <div className="content bg-light text-dark p-2 mx-auto">
                    <h2 className="fs-5">Name</h2>
                    <p className="fs-6 mb-0">Para</p>
                  </div>
                </div>

                <div className="image-with-text img-fluid">
                  <div className="bg-img-2"></div>
                  <div className="content bg-light text-dark p-2 mx-auto">
                    <h2 className="fs-5">Name</h2>
                    <p className="fs-6 mb-0">Para</p>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between flex-wrap cst-gap mt-5">
                <div className="image-with-text img-fluid">
                  <div className="bg-img-3"></div>
                  <div className="content bg-light text-dark p-2 mx-auto">
                    <h2 className="fs-5">Name</h2>
                    <p className="fs-6 mb-0">Para</p>
                  </div>
                </div>

                <div className="image-with-text img-fluid">
                  <div className="bg-img-4"></div>
                  <div className="content bg-light text-dark p-2 mx-auto">
                    <h2 className="fs-5">Name</h2>
                    <p className="fs-6 mb-0">Para</p>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between flex-wrap cst-gap mt-5">
                <div className="image-with-text img-fluid">
                  <div className="bg-img-5"></div>
                  <div className="content bg-light text-dark p-2 mx-auto">
                    <h2 className="fs-5">Name</h2>
                    <p className="fs-6 mb-0">Para</p>
                  </div>
                </div>

                <div className="image-with-text img-fluid">
                  <div className="bg-img-6"></div>
                  <div className="content bg-light text-dark p-2 mx-auto">
                    <h2 className="fs-5">Name</h2>
                    <p className="fs-6 mb-0">Para</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="image-with-text img-fluid">
                <div className="bg-img-2"></div>
                <div className="content bg-light text-dark p-2 mx-auto">
                  <h2 className="fs-5">Name</h2>
                  <p className="fs-6 mb-0">Para</p>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="d-flex justify-content-between mt-5">
                <div className="image-with-text img-fluid">
                  <div className="bg-img-5"></div>
                  <div className="content bg-light text-dark p-2 mx-auto">
                    <h2 className="fs-5">Name</h2>
                    <p className="fs-6 mb-0">Para</p>
                  </div>
                </div>

                <div className="image-with-text img-fluid">
                  <div className="bg-img-6"></div>
                  <div className="content bg-light text-dark p-2 mx-auto">
                    <h2 className="fs-5">Name</h2>
                    <p className="fs-6 mb-0">Para</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="col-md-5 order-md-1 cst-home-img"></div>
      </div>
    </PortCompSub>
  );
};

export default PortComp;

const PortCompSub = styled.div`
@media (max-width: 576px) {
    .p-5{
      padding: 1rem !important;
    }
  }
  @media (max-width: 767px) {
    .cst-height {
      height: calc(100vh - 125px);
      width: 100%;
    }
    .cst-home-img {
      display: none;
    }
    .image-with-text{
      width: 100% !important;
    }
    .cst-gap{
      gap: 40px;
    }
  }
  .custom-divider {
    height: 2px; /* Thickness of the divider */
    background-color: #ccc; /* Color of the divider */
    margin: 20px 0; /* Space around the divider */
    width: 65%; /* Full width */
  }
  .bg-img-1 {
    width: 100%;
    height: 60vh;
    background: url("/images/2.jpg") no-repeat center center / cover;
  }
  .bg-img-2 {
    width: 100%;
    height: 60vh;
    background: url("/images/1.jpg") no-repeat center center / cover;
  }
  .bg-img-3 {
    width: 100%;
    height: 60vh;
    background: url("/images/3.jpg") no-repeat center center / cover;
  }
  .bg-img-4 {
    width: 100%;
    height: 60vh;
    background: url("/images/6.jpg") no-repeat center center / cover;
  }
  .bg-img-5 {
    width: 100%;
    height: 60vh;
    background: url("/images/4.jpg") no-repeat center center / cover;
  }
  .bg-img-6 {
    width: 100%;
    height: 60vh;
    background: url("/images/5.jpg") no-repeat center center / cover;
  }
  .image-with-text {
    position: relative;
    width: 49%;
  }
  .image-with-text:hover::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .content {
    position: absolute;
    transform: translateY(100%);
    transition: all 0.3s ease;
    left: 5%;
    opacity: 0;
    z-index: 3;
    bottom: 7%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
  .image-with-text:hover .content {
    transform: translateY(0);
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
  .nav-link.active {
    color: #fff;
    background-color: #000;
  }
  .nav-link {
    border-radius: 0;
    color: #000;
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
