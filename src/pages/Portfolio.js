import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="portfolio-content">
      <section className="keyvisual-section">
        <div className="keyvisual">
          <div className="text-area">
            <h2 className="subject">Portfolio</h2>
            <Link to="/profile" className="btn-view">
              이력서보기
            </Link>
          </div>
        </div>
      </section>
      <div className="section-inner">
        <section className="portfolio-section personal">
          <h3 className="section-title">
            <span>P</span>ersonal project
          </h3>
          {/* <personal-project
					:itemList="profileData.project.personal"
				></personal-project> */}
        </section>
        <section className="portfolio-section company">
          <h3 className="section-title">
            <span>W</span>ork experience
          </h3>
          <p className="stack">
            stack : html5, css3, scss, gulp, javascript, jquery
          </p>
          {/* <portfolio-list
					:itemList="profileData.project.company"
				></portfolio-list> */}
        </section>
        <section className="portfolio-section">
          <h3 className="section-title">
            <span>B</span>efore project
          </h3>
          <p className="stack">stack : html5, css3, javascript, jquery</p>
          {/* <old-portfolio
					:itemList="profileData.project.oldProject"
				></old-portfolio> */}
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
