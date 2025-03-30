import "./ProfileBody.css";

export interface SkillsInfo{
    name: string;
    level: number;
}

export interface HobbiesInfo{
    name: string;
    level: number;
}

export interface ProfileBodyProps {
    aboutMeInfo: string;
    experience?: {
        title: string;
        period: string;
        description: string;
    }[];
    education?: {
        institution: string;
        period: string;
        specialty: string;
    }[];
    skills : {
        items : SkillsInfo[];
    }
    hobbies : {
        items : HobbiesInfo[];
    }
}

function ProfileBody (profileBody: ProfileBodyProps): Element{
    return(
        <div className="ProfileBody">
            <div className="ProfileBody__aboutMe">
                <h2>Обо мне </h2>
                <p> <span className = "ProfileBody__aboutMe-info"> {profileBody.aboutMeInfo} </span> </p>
            </div>

            {profileBody.experience && (
                <div className="ProfileBody__experience">
                    <h2>Опыт</h2>
                    {profileBody.experience.map((exp, index) => (
                        <div key={index} className="ProfileBody__experience-item">
                            <h3 className="ProfileBody__experience-title">{exp.title}</h3>
                            <p className="ProfileBody__experience-period">{exp.period}</p>
                            <p className="ProfileBody__experience-description">{exp.description}</p>
                        </div>
                    ))}
                </div>
            )}

            {profileBody.education && (
                <div className= "ProfileBody__education">
                <h2>Образование</h2>
                    {profileBody.education.map((edu, index) => (
                        <div key ={index} className= "ProfileBody__education-item">
                            <h3 className= "ProfileBody__education-institution">{edu.institution}</h3>
                            <p className= "ProfileBody__education-period">{edu.period}</p>
                            <p className= "ProfileBody__education-specialty">{edu.specialty}</p>
                        </div>
                    ))}
                </div>
            )}

            <div className="ProfileBody__skills">
                <h2>Навыки</h2>
                <div className="ProfileBody__skills-container">
                    {profileBody.skills.items.map((skill, index) => (
                        <div key={index} className="ProfileBody__skill-item">
                            <div
                                className="ProfileBody__skillCircle-progress"
                                style={{ "--p": skill.level }}
                            >
                                <span className="ProfileBody__skill-percent">{skill.level}%</span>
                            </div>
                            <p className="skill-name">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfileBody;