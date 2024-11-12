import React from "react";
import styled from "styled-components";
import { MdPlayArrow } from "react-icons/md";
import { motion } from "framer-motion";
import { MdOutlineLightbulb } from "react-icons/md";

const AboutComp = () => {
  return (
    <About>
      <div className="featurette mt-0 mx-2 d-flex align-items-center">
        <div className="col-md-8 order-md-2 p-5 cst-height">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="featurette-heading d-flex justify-content-between align-items-center fs-3 py-3 fw-bold text-uppercase"
          >
            About me
            <div className="custom-divider"></div>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: -100, x: "-100%" }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 100, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="row d-flex justify-content-between gap-4"
          >
            <p className="fs-5 col-lg-5 col-md-12 col-sm-12">
              Hello there! My name is SHAHZAIB. I am a Web Developer, and I'm
              very passionate and dedicated to my work. <br />
              <br /> With 1 years experience as a professional a
              <strong> Web Development </strong>, I have acquired the skills and
              knowledge necessary to make your project a success.
            </p>
            <div className="fs-6 col-lg-5 col-md-12 col-sm-12 overflow-hidden">
              <div className=" d-flex gap-5 justify-content-between">
                <p className="fw-bold fs-5">Name:</p>
                <p className="">SHAHZAIB</p>
              </div>
              <div className="d-flex gap-5 justify-content-between">
                <p className="fw-bold fs-5">Address:</p>
                <p className="">Lahore, Punjab</p>
              </div>
              <div className="d-flex gap-5 justify-content-between">
                <p className="fw-bold fs-5">Study:</p>
                <p className="">Superior University</p>
              </div>
              <div className="d-flex gap-5 justify-content-between">
                <p className="fw-bold fs-5">Degree:</p>
                <p className="">Computer Science</p>
              </div>
              <div className="d-flex gap-5 justify-content-between">
                <p className="fw-bold fs-5">Mail:</p>
                <p className="">mshahzaib455@gmail.com</p>
              </div>
              <div className="d-flex gap-5 justify-content-between">
                <p className="fw-bold fs-5">Phone:</p>
                <p className="">+92 307 4054792</p>
              </div>
            </div>
          </motion.div>

          <div className="row d-flex justify-content-between gap-4 py-1">
            <div className="content col-lg-5 col-md-12 col-sm-12">
              <h2 className="featurette-heading fs-4 mt-5 fw-bold text-uppercase">
                SERVICES
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className=" py-3"
              >
                <p className="fs-5">{<MdPlayArrow />}Web Development</p>
                <p className="fs-5">{<MdPlayArrow />}Graphic Design</p>
                <p className="fs-5">{<MdPlayArrow />}Landing Page</p>
                <p className="fs-5">{<MdPlayArrow />}On-Page SEO</p>
                <p className="fs-5">{<MdPlayArrow />}Web Hosting</p>
              </motion.div>
            </div>

            <div className="content col-lg-5 col-md-12 col-sm-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className=" py-3"
              >
                <div className="">
                  <h2 className=" featurette-heading fs-4 mt-5 fw-bold text-uppercase">
                    PROGRAMMING
                  </h2>
                  <div className="style-1 mt-5">
                    <div className="style-2">
                      <div className="style-3">
                        <span className="style-4">HTML &amp; CSS</span>
                        <span className="style-5">90%</span>
                      </div>
                    </div>
                  </div>
                  <div className="style-1 mt-5">
                    <div className="style-2 line-2">
                      <div className="style-3">
                        <span className="style-4">JAVASCRIPT</span>
                        <span className="style-5">80%</span>
                      </div>
                    </div>
                  </div>
                  <div className="style-1 mt-5">
                    <div className="style-2 line-3">
                      <div className="style-3">
                        <span className="style-4">SHOPIFY</span>
                        <span className="style-5">80%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* More about detail */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="containere"
          >
            <div className="row mb-lg-9 mb-5">
              <div className="col-xl-10 offset-xl-1 col-md-12">
                <div className="row"></div>
              </div>
            </div>
            <div className="row w-100">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="mb-5 mb-lg-0 text-center text-lg-start">
                  <h2 className="mb-3">My process of Ideas</h2>
                  <p className="mb-0">
                    I am dedicated web developer with a strong focus on building
                    efficient and responsive web applications. He has expertise
                    in technologies like React and consistently works on
                    troubleshooting and optimizing code for seamless user
                    experiences. I values concise and effective coding
                    practices, always striving to improve his craft.
                  </p>
                </div>
              </div>
              <div className="col-lg-12 mt-5">
                <div className="row gap-5">
                  <div className="col-lg-5 col-md-12 col-sm-12 col-10 cst-shadow px-4">
                    <div className="mb-lg-8 py-3 text-center text-lg-start px-3 px-lg-0">
                      <div className="mb-1 fs-3 cst-icon">
                        <MdOutlineLightbulb />
                      </div>

                      <h3 className="h4">Ideation</h3>
                      <p className="mb-0 pe-lg-4">
                        We craft a plan aligned with your business objectives,
                        submit a comprehensive proposal.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12 col-10 cst-shadow px-4">
                    <div className="mb-lg-8 py-3 text-center text-lg-start px-3 px-lg-0">
                      <div className="mb-1 fs-3 cst-icon">
                        <MdOutlineLightbulb />
                      </div>

                      <h3 className="h4">Design</h3>
                      <p className="mb-0 pe-lg-4">
                        We design the Idea in Figma and seek approval. We offer
                        2 free design iterations.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12 col-10 cst-shadow px-4">
                    <div className="mb-lg-8 py-3 text-center text-lg-start px-3 px-lg-0">
                      <div className="mb-1 fs-3 cst-icon">
                        <MdOutlineLightbulb />
                      </div>

                      <h3 className="h4">Development</h3>
                      <p className="mb-0 pe-lg-4">
                        Agile Development: Sprints, Milestones, and weekly
                        Progress Tracking.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12 col-10 cst-shadow px-4">
                    <div className="mb-lg-8 py-3 text-center text-lg-start px-3 px-lg-0">
                      <div className="mb-1 fs-3 cst-icon">
                        <MdOutlineLightbulb />
                      </div>

                      <h3 className="h4">Delivery</h3>
                      <p className="mb-0 pe-lg-4">
                        Complete Project Delivery with Complimentary One Month
                        Maintenance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* detail end */}
        </div>
        <div className="col-md-5 order-md-1 cst-home-img"></div>
      </div>
    </About>
  );
};

export default AboutComp;

const About = styled.div`
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
    width: 80%; /* Full width */
  }
  @media (max-width: 1245px) {
    .custom-divider {
      height: 2px; /* Thickness of the divider */
      background-color: #ccc; /* Color of the divider */
      margin: 20px 0; /* Space around the divider */
      width: 60%; /* Full width */
    }
  }
  .cst-shadow {
    box-shadow: 0px 2px 18px #e9e9e9;
  }
  .cst-shadow:hover {
    background: #000;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  .cst-shadow:hover h3 {
    color: #fff;
  }
  .cst-shadow:hover p {
    color: #fff;
  }
  .cst-shadow:hover .cst-icon {
    color: #fff;
  }
  p {
    color: #000;
  }
  .Typewriter {
    color: #000 !important;
  }
  .cst-height {
    height: calc(100vh - 135px);
    overflow-y: auto;
  }
  .cst-width {
    width: 45vw;
  }
  .line {
    width: 70%;
    stroke: fill;
  }
  .cst-home-img {
    background: url("/images/home.jpg") no-repeat
      center center / cover;
    height: calc(100vh - 135px);
    width: 33vw;
  }

  .style-1 {
    height: 3px !important;
    width: 100%;
    min-width: 100%;
    background-color: rgba(0, 0, 0, 0.07);
    border-radius: 50px;
    margin-bottom: 55px;
  }
  .style-2 {
    height: 100%;
    width: 90%;
    background-color: rgb(0, 0, 0);
    border-radius: inherit;
  }
  .line-2 {
    width: 80%;
  }
  .line-3 {
    width: 80%;
  }
  .style-3 {
    display: flex;
    justify-content: space-between;
    align-items: start;
    position: relative;
    top: -35px;
  }
  .style-4 {
    padding-top: 5px;
    padding-bottom: 5px;
    /* color: rgb(125, 119, 137); */
  }
  .style-5 {
    padding-top: 5px;
    padding-bottom: 5px;
    /* color: rgb(125, 119, 137); */
  }
`;
