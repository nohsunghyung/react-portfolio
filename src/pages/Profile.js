import React from 'react';
import { Link } from 'react-router-dom';
import data from '../config/data';

const Profile = () => {
  const { profile, career, project } = data;
  const { name, position, birth, links, introduce } = profile;
  return (
    <div className="profile-content">
      <div className="profile-inner">
        <section className="info-section">
          <div className="user-image">
            <img src="" alt="프로필사진" />
          </div>
          <div className="user-info">
            <h1 className="user-name">{name}</h1>
            <h3 className="user-position">{position}</h3>
            <div className="info-wrapper">
              <div className="info-list">
                {links.map((link) => (
                  <div className="url" key={link.name}>
                    {link.name === 'email' ? (
                      <a href={`mailto:${link.url}`} className="link">
                        {link.url}
                      </a>
                    ) : (
                      <span
                        className="link"
                        onClick={() => window.open(`${link.url}`, '_blank')}
                      >
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
            <span>I</span>ntroduce
          </h3>
          <p
            className="profile-text"
            dangerouslySetInnerHTML={{ __html: introduce }}
          ></p>
        </section>
        <section className="profile-section">
          <h3 className="section-title">
            <span>C</span>areer
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
        <section className="profile-section">
          <h3 className="section-title">
            <span>W</span>ork project
          </h3>
          <ul className="list-container">
            {project.frontEnd.map((item) => (
              <li className="item" key={item.subject}>
                {/* <div className="date">
                  <div className="period">{'-'}</div>
                </div> */}
                <div className="article">
                  <h4 className="title">
                    <div>{item.subject}</div>
                  </h4>
                  <div className="sub-text">
                    <div>{item.summary}</div>
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
        <section className="profile-section"></section>
        {/* <profile-list
				:profileData="profileData.project.oldProject"
				:oldChk="true"
			></profile-list> */}
      </div>
    </div>
  );
};

export default Profile;
