import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import { FaArrowRight } from "react-icons/fa";

const projectData = {
  nextjs: [
    {
      img: "/images/third.jpg",
      title: "Solar Centrum",
      url: "https://solarcentrum-gw2y.vercel.app/admin",
      desp: "Developed a custom CRM solution using Next.js and Reactstrap, integrating dynamic data visualizations with ApexCharts for enhanced user insights.",
    },
    {
      img: "/images/first.jpg",
      title: "Fund Next Website",
      url: "https://fund-next-r.vercel.app/",
      desp: "Developed a dynamic website using Next.js and added smooth animations using libraries like AOS . The project was partially completed due to external client constraints but demonstrates my front-end expertise in building scalable and interactive UIs.",
    },
    {
      img: "/images/second.jpg",
      title: "Orcary Crm",
      url: "https://orcary-mb.vercel.app/",
      desp: "Engineered a robust customer relationship management system that enhanced client interaction and streamlined internal workflows.It is still in Progress",
    },
    {
      img: "/images/fourth.jpg",
      title: "Fan X CRM",
      url: "https://fanx-comp.vercel.app/",
      desp: "Developed a scalable CRM solution with React and Bootstrap, emphasizing performance, intuitive UX, and maintainable code structure.",
    },
  ],

  html: [
    {
      img: "/images/fifth.jpg",
      title: "Nexis Flow Crm",
      url: "https://www.jetnetixsolutions.com/NexisFlow/",
      desp: "Customized a visually polished CRM application tailored to specific client requirements using HTML, CSS, and Bootstrap, focusing on usability and brand alignment.",
    },
    {
      img: "/images/sixth.jpg",
      title: "CMS Crm",
      url: "https://www.jetnetixsolutions.com/systemize_dev/login",
      desp: "Delivered a fully functional content and customer management platform built with HTML, CSS, JavaScript, and Bootstrap, featuring a clean, grid-based UI layout. (admin@gmail.com | pass:1234)",
    },
    {
      img: "/images/h2.jpg",
      title: "AVR Website",
      url: "https://www.jetnetixsolutions.com/avr/",
      desp: "Crafted an interactive frontend with HTML, CSS, JavaScript, and Bootstrap, incorporating AOS animations for smooth transitions and enhanced user experience.",
    },
    {
      img: "/images/h3.jpg",
      title: "Blockstar Website",
      url: "https://blockstar.netlify.app/",
      desp: "Built a dark-themed, fully responsive website with HTML, CSS, and JavaScript, optimized for modern aesthetics and device adaptability.",
    },
  ],
};

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState("nextjs");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <Col xxl="4" xl="4" md="6" sm="6" className="mb-4" key={index}>
        <div className="project-box">
          <img src={project.img} alt="Project" className="img-fluid" />
          <div className="overlay">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <FaArrowRight size={24} color="#fff" />
            </a>
          </div>
        </div>
        <p className="mt-3 mb-1 projectTitle">{project.title}</p>
        <p className="">{project.desp}</p>
      </Col>
    ));

  return (
    <div className="portfolio-tabs">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "nextjs" })}
            onClick={() => toggle("nextjs")}
          >
            Next.js / Reacjs
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "html" })}
            onClick={() => toggle("html")}
          >
            HTML
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab} className="pt-4">
        <TabPane tabId="nextjs">
          <Row>{renderProjects(projectData.nextjs)}</Row>
        </TabPane>

        <TabPane tabId="html">
          <Row>{renderProjects(projectData.html)}</Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default PortfolioTabs;
