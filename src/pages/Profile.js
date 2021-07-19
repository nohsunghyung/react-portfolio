import React from 'react';
import data from '../config/data';
// import noh from '../resources/images/noh.png';
import noh from '../resources/images/noh-image01.jpg';

const Profile = () => {
  const { profile, career, project } = data;
  const { name, position, phone, links, introduce } = profile;
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-inner">
          <section className="info-section">
            <div className="user-image">
              <img src={noh} alt="프로필사진" />
            </div>
            <div className="user-info">
              <h1 className="user-name">{name}</h1>
              <h3 className="user-position">{position}</h3>
              <div className="user-phone">{phone}</div>
              <div className="info-wrapper">
                <div className="info-list">
                  {links.map((link) => (
                    <div className="url" key={link.name}>
                      {link.name === 'email' ? (
                        <a href={`mailto:${link.url}`} className="link">
                          {link.url}
                        </a>
                      ) : (
                        <span className="link" onClick={() => window.open(`${link.url}`, '_blank')}>
                          {link.url}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="profile-section intro-section">
            <h3 className="section-title">
              <span>나는</span>
            </h3>
            <p className="profile-text" dangerouslySetInnerHTML={{ __html: introduce }}></p>
          </section>
          <section className="profile-section">
            <h3 className="section-title small">
              <span>어디서</span>
            </h3>
            <ul className="list-container">
              {career.map((item) => (
                <li className="item" key={item.company}>
                  <div className="date">
                    <div className="period">{item.date}</div>
                  </div>
                  <div className="article">
                    <h4 className="title">
                      <div>{item.company}</div>
                    </h4>
                    <div className="sub-text">
                      <div>{item.position}</div>
                    </div>
                    <ul className="info-text">
                      {item.works.map((work, index) => (
                        <li key={index}>{work}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className="profile-section portfolio">
            <h3 className="section-title">
              <span>무엇을</span>
            </h3>
            <ul className="portfolio-list">
              {project.frontEnd.map((item) => (
                <li className="item" key={item.subject}>
                  <div className="image">
                    <img src={item.images} alt="" />
                  </div>
                  <div className="text-box">
                    <h4 className="project-title">{item.subject}</h4>
                    <ul className="summary">
                      {item.summary.map((list, index) => (
                        <li key={index}>· {list}</li>
                      ))}
                    </ul>
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
            <div className="old-project-container">
              <h3 className="title">
                퍼블리싱 프로젝트<span> (2020년 이전)</span>
              </h3>
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
            </div>
          </section>
          <section className="profile-section"></section>
          {/* <profile-list
  				:profileData="profileData.project.oldProject"
  				:oldChk="true"
  			></profile-list> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
