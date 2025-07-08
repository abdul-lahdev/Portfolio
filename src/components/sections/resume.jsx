import { RiBookLine } from "@remixicon/react";
import React from "react";
import SlideUp from "../../utlits/animations/slideUp";

const Resume = () => {
  return (
    <section id="resume" className="resume-area">
      <div className="container">
        <div className="resume-items">
          <div className="row">
            {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
            <div className="col-xl-6 col-md-6">
              <div className="single-resume h-100">
                <h2>Experience</h2>
                <div className="experience-list">
                  <Card
                    year={"Nov 2023 - Present"}
                    title={"Frontend Developer"}
                    institution={"Jetnetix Solutions"}
                  />
                  {/* <Card
                    year={"2021 - 2023"}
                    title={"Marketing Expert GRP"}
                    institution={"Envato Theme Developer"}
                  />
                  <Card
                    year={"2021 - 2022"}
                    title={"Web Designer"}
                    institution={"Web Developer & Business Partner"}
                  /> */}
                </div>
              </div>
            </div>
            {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
            <div className="col-xl-6 col-md-6">
              <div className="experience-list">
                <div className="single-resume">
                  <h2>Education</h2>
                  <Card
                    year={"2019 - 2023"}
                    title={"Bachelor Degree of Computer Science"}
                    institution={"Iqra University"}
                  />
                  <Card
                    year={"2016 - 2018"}
                    title={"Intermediate"}
                    institution={"Govt. College Formen"}
                  />
                  <Card
                    year={"2014 - 2016"}
                    title={"Matriculation"}
                    institution={"Al Saqib Public School"}
                  />
                </div>
              </div>
            </div>
            {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

const Card = ({ year, title, institution }) => {
  return (
    <SlideUp>
      <div className="resume-item">
        <div className="icon">
          <RiBookLine />
        </div>
        <div className="content">
          <span className="years">{year}</span>
          <h4>{title}</h4>
          <span className="company"> {institution} </span>
          {/* <p>
            At Jetnetix Solutions, I build visually impressive and responsive
            CRM systems and websites using modern technologies such as Next.js,
            React.js, Tailwind CSS, Bootstrap, Reactstrap, Material UI, and core
            frontend tools.
          </p> */}
        </div>
      </div>
    </SlideUp>
  );
};
