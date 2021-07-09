import React from 'react';
import { Link } from 'react-router-dom';
import data from '../config/data';

const Profile = () => {
  const { profile } = data;
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
            <li className="item">
              <div className="date">
                <div className="period">{'asdfasdf'}</div>
              </div>
              <div className="article">
                <h4 className="title">
                  <div>회사</div>
                </h4>
                <div className="sub-text">
                  <div>포지션</div>
                  <div>요약</div>
                  <div>타입</div>
                </div>
                <ul className="info-text">
                  <li>works</li>
                  <li>스킬</li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
        <section className="profile-section"></section>
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
