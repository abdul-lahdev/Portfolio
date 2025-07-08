import SlideUp from "../../utlits/animations/slideUp";
import PortfolioTabs from "./portfolioTabs";

const Portfolio = ({ className }) => {
  return (
    <section id="portfolio" className={`mdScreen projects-area ${className}`}>
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-12">
              <SlideUp>
                <div className="section-title text-center">
                  <h2>Works & Projects</h2>
                  <p>
                    Check out some of my design projects, meticulously crafted
                    with love and dedication, each one reflecting the passion
                    and soul I poured into every detail.
                  </p>
                </div>
              </SlideUp>
            </div>
            <div className="col-12 mt-3">
              <SlideUp>
                <PortfolioTabs />
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
