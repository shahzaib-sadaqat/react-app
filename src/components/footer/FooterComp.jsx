import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const FooterComp = () => {
  return (
    <Footer className="mx-3 d-flex justify-content-between">
      <div className="copyright">
        <div className="py-3 fs-6">Copyright © 2024</div>
      </div>
      <div className="social-icons d-flex align-items-center gap-3 fs-5">
        <FaFacebookF className="fb" />
        <FaInstagram className="In" />
        <FaTwitter className="Tw" />
        <FaLinkedin className="Ld" />
      </div>
    </Footer>
  );
};

export default FooterComp;

const Footer = styled.div`
  background: #f6fbff;
  .fb,
  .In,
  .Tw,
  .Ld {
    cursor: pointer;
  }
  .fb:hover {
    transform: scale(1.5);
    transition: all 0.3s ease-in-out;
  }
  .In:hover {
    transform: scale(1.5);
    transition: all 0.3s ease-in-out;
  }
  .Tw:hover {
    transform: scale(1.5);
    transition: all 0.3s ease-in-out;
  }
  .Ld:hover {
    transform: scale(1.5);
    transition: all 0.3s ease-in-out;
  }
`;
