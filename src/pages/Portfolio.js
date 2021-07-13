import React from 'react';
import { Link } from 'react-router-dom';
import data from '../config/data';

const Portfolio = () => {
  const { project } = data;
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
            <span>W</span>ork experience <span className="etc">(회사 프로젝트)</span>
          </h3>
          <ul className="portfolio-list">
            {project.frontEnd.map((item) => (
              <li className="item" key={item.subject}>
                <div className="image">이미지 준비중{/* <img src={item.images} alt="" /> */}</div>
                <div className="text-box">
                  <h4 className="project-title">{item.subject}</h4>
                  <div className="summary">
                    <span>· {item.summary}</span>
                  </div>
                  <div className="description" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                  {item.url ? <div className="url"></div> : null}
                  <dl className="skils">
                    <dt>
                      <strong>Skils</strong>
                    </dt>
                    <dd>{item.skils}</dd>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        </section>
        {/* <section className="portfolio-section company">
          <h3 className="section-title">
            <span>P</span>ersonal project
          </h3>
        </section> */}
        <section className="portfolio-section">
          <h3 className="section-title">
            <span>P</span>ublishing project <span className="etc">(2020년 이전 퍼블리싱 프로젝트)</span>
          </h3>
          <p className="stack">stack : html5, sass, gulp, javascript, jquery</p>
          <ul className="old-project-list">
            {project.publish.map((item) => (
              <li key={item.subject}>
                {item.url ? (
                  <span className="link" onClick={() => window.open(item.url, '_blank')}>
                    {item.subject}
                  </span>
                ) : (
                  <span>{item.subject}</span>
                )}
              </li>
            ))}
            {project.etc.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
