import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { GrMapLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

const ContComp = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "53d4f5ef-1bd2-41f9-926b-90994703c6d8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });

      // Clear the form fields
      event.target.reset();
    }
  };

  return (
    <ContData>
      <div className="featurette mt-0 mx-2 d-flex align-items-center">
        <div className="col-lg-8 col-md-8 col-sm-12 order-md-2 p-5 cst-height">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="featurette-heading d-flex align-items-center justify-content-between fs-3 py-3 fw-bold text-uppercase"
          >
            Contact
            <div className="custom-divider"></div>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: -50, x: "-100%" }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="row g-4 gap-2 py-5 justify-content-between row-cols-1 row-cols-lg-4"
          >
            <div className="feature col text-center border py-3 px-2">
              <div className="feature-icon fs-1">
                <GrMapLocation />
              </div>
              <p>Lahore, Punjab</p>
            </div>
            <div className="feature col text-center border py-3 px-2">
              <div className="feature-icon fs-1">
                <HiOutlineMail />
              </div>
              <p className="text-break">mshahzaib455@gmail.com</p>
            </div>
            <div className="feature col text-center border py-3 px-2">
              <div className="feature-icon fs-1">
                <AiOutlinePhone />
              </div>
              <p>+92 307 4054792</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="d-flex justify-content-start flex-wrap gap-2 col-dir"
          >
            <section className="contact flex-fill">
              <form onSubmit={onSubmit}>
                <div className="input-box mb-3">
                  {/* <label>Full Name</label> */}
                  <input
                    type="text"
                    className="field"
                    placeholder="Enter your name"
                    name="name"
                    required
                  />
                </div>
                <div className="input-box my-3">
                  {/* <label>Email Address</label> */}
                  <input
                    type="email"
                    className="field"
                    placeholder="Enter your email"
                    name="email"
                    required
                  />
                </div>
                <div className="input-box my-3">
                  {/* <label>Your Message</label> */}
                  <textarea
                    name="message"
                    className="field mess"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </section>
            <div className="map text-center flex-fill">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435521.9536726809!2d74.00473526794504!3d31.482517988876463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731253327917!5m2!1sen!2s"
                allowfullscreen=""
                width={"100%"}
                height={"100%"}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
        <div className="col-md-5 order-md-1 cst-home-img"></div>
      </div>
    </ContData>
  );
};

export default ContComp;

const ContData = styled.div`
  @media (max-width: 972px) {
    .col-dir {
      flex-direction: column-reverse;
    }
  }
  @media (max-width: 576px) {
    .p-5 {
      padding: 1rem !important;
    }
    .col-10 {
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
  @media (min-width: 900px) {
    .col {
      width: 30% !important;
    }
  }
  p {
    color: #000;
  }
  form {
    width: 95%;
  }
  .input-box .field {
    width: 100%;
    height: 50px;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 15px;
    font-size: 16px;
    margin-top: 8px;
  }
  .input-box .field.mess {
    height: 200px;
  }
  form button {
    padding: 10px 20px;
    height: 55px;
    border: none;
    border-radius: 6px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
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
