import "./ProfileBody.css";
import { ReactElement } from "react";
import * as React from "react";

export interface SkillsInfo {
  name: string;
  level: string;
}

export interface HobbiesInfo {
  name: string;
  level: string;
}

export interface ProfileBodyProps {
  aboutMeInfo: string;
  experience?: {
    title: string;
    post: string;
    period: string;
    description: string;
  }[];
  education?: {
    institution: string;
    period: string;
    specialty: string;
  }[];
  skills: {
    items: SkillsInfo[];
  };
  hobbies: {
    items: HobbiesInfo[];
  };
}

function ProfileBody(profileBody: ProfileBodyProps): ReactElement {
  return (
    <div className="ProfileBody">
      <div className="ProfileBody__aboutMe">
        <h2>ОБО МНЕ</h2>
        <p>
          <span className="ProfileBody__aboutMe-info">
            {profileBody.aboutMeInfo}
          </span>
        </p>
      </div>

      {profileBody.experience && (
        <div className="ProfileBody__experience">
          <h2>ОПЫТ</h2>
          {profileBody.experience.map((exp, index) => (
            <div key={index} className="ProfileBody__experience-item">
              <h3 className="ProfileBody__experience-title">{exp.title}</h3>
              <p className="ProfileBody__experience-post"> {exp.post} </p>
              <p className="ProfileBody__experience-period">{exp.period}</p>
              <p className="ProfileBody__experience-description">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {profileBody.education && (
        <div className="ProfileBody__education">
          <h2>ОБРАЗОВАНИЕ</h2>
          {profileBody.education.map((edu, index) => (
            <div key={index} className="ProfileBody__education-item">
              <h3 className="ProfileBody__education-institution">
                {edu.institution}
              </h3>
              <p className="ProfileBody__education-specialty">
                {edu.specialty}
              </p>
              <p className="ProfileBody__education-period">{edu.period}</p>
            </div>
          ))}
        </div>
      )}

      <div className="ProfileBody__skills">
        <h2>НАВЫКИ</h2>
        <div className="ProfileBody__skills-container">
          {profileBody.skills.items.map((skill, index) => (
            <div key={index} className="ProfileBody__skill-item">
              <div
                className="ProfileBody__skillCircle-progress"
                style={
                  { "--progress": `${skill.level}%` } as React.CSSProperties
                }
              >
                <span className="ProfileBody__skill-percent">
                  {skill.level}%
                </span>
              </div>
              <p className="ProfileBody__skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ProfileBody__hobbies">
        <h2>ХОББИ</h2>
        <div className="ProfileBody__hobbies-container">
          {profileBody.hobbies.items.map((hobby, index) => (
            <div key={index} className="ProfileBody__hobby-item">
              <div
                className="ProfileBody__hobbyCircle-progress"
                style={
                  { "--progress": `${hobby.level}%` } as React.CSSProperties
                }
              >
                <span className="ProfileBody__hobby-percent">
                  {hobby.level}%
                </span>
              </div>
              <p className="ProfileBody__hobby-name">{hobby.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileBody;
