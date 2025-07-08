import React from "react";
import profile from "../../assets/images/about/profile.png";
import { RiMailSendLine } from "@remixicon/react";
import SlideUp from "../../utlits/animations/slideUp";
const Summery = () => {
  return (
    <section id="about" className="about-single-area innerpage-single-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4 setHeightHome">
            <SlideUp>
              <div className="about-image-part h-100">
                <img src="/AbdullahNiaz.jpg" alt="About Me" />
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <h2>I’m Abdullah Niaz, a Frontend Developer.</h2>
                <p>
                  I’m Abdullah Niaz, a frontend developer based in Pakistan with
                  nearly two years of experience building responsive and
                  interactive web interfaces. I specialize in React.js and
                  Next.js, leveraging tools like Tailwind CSS, Reactstrap, and
                  Bootstrap to create modern, user-focused designs. My work
                  emphasizes smooth user experiences, enhanced with AOS
                  animations and a mobile-first approach.
                </p>
                <p>
                  Currently, I’m part of the team at Jetnetix Solutions, where
                  I’ve had the opportunity to work on a variety of web
                  applications across different industries. With a solid
                  foundation in frontend technologies, I’m now setting my sights
                  on full-stack development — aiming to expand my expertise into
                  the backend world by learning Node.js and exploring
                  server-side technologies.
                </p>
                <div className="hero-btns">
                  <a href="contact.html" className="theme-btn">
                    Get In touch
                    <i>
                      {" "}
                      <RiMailSendLine size={16} />{" "}
                    </i>
                  </a>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default Summery;
