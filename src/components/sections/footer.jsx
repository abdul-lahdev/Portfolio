import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="main-footer mt-3">
      {/* <div className="footer-bottom pt-50 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text"></div>
            </div>
            <div className="col-lg-6">
              <div className="copyright-text extra-copyright">
                <p>Crafted with ❤️ theme_ocean</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
