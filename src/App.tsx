import ProfileCard, {ProfileProps} from './Profile';
import { useState } from 'react';
import "./Profile.css";
import "./ProfileBody.css"
import './assets/fonts.css';
import ProfileBody from "./ProfileBody.tsx";


function App() {
    const [currentProfile, setCurrentProfile] = useState(0);
    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentProfile(Number(e.target.value));
    }
    const exampleProfile: ProfileProps = {
        id: 0,
        avatarUrl : "https://i.redd.it/harry-dubois-the-protagonist-of-disco-elysium-v0-5aw0ug8swd4d1.jpg?width=369&format=pjpg&auto=webp&s=bc882555863be225f6fa1c251c2853133df16e22",
        name : "Гарри",
        surname : "Дю Бойс",
        job : "Детектив",
        email : "hurry@mail.ru",
        phoneNumber : "+1 234 567 890",
        webSite : "sober.com",
        town : "Ревашоль",

        specialisations : {
            items : [
                "Либерал",
                "Запой",
                "Бомжекоп",
            ]
        },

        languages : {
            items: [
                { name: "Английский", level: 5 },
                { name: "Ревашольский", level: 3 }
            ]
        },

        socials : {
            linkedScroll : "@hurryLink",
            mageBook : "hurryBook",
            portalgram : "@hurryGram",
        },

        body: {
            aboutMeInfo: "Я — детектив с сомнительной репутацией...",
            experience: [
                {
                    title: "Отдел морали RCM",
                    period: "<неизвестно> – настоящее время",
                    description: "Расследовал громкие дела через систему галлюцинаторного дедуктивного метода..."
                }
            ],
            education: [
                {
                    institution: "Академия полиции Ревоколя",
                    period: "<год окончания утерян>",
                    specialty: "Курс 'Как не застрелить себя во время чистки оружия'"
                }
            ],
            skills : {
                items :[
                    {name : "Внутренняя империя", level : 70},
                    {name : "Грубая сила", level : 50},
                    {name : "Раскрывать дела", level : 90},
                ]
            },
            hobbies : {
                items :[
                    {name : "Пить", level : 100},
                    {name : "Раскрывать дела", level : 90},
                ]

            }
        }
    }


    const Profiles : ProfileProps[] = [
        exampleProfile,
    ]
    return (
        <div className="App">
            <div className = "Profile__selector">
                <select
                    value = {currentProfile}
                    onChange = {handleProfileChange}
                    className = "Profile__dropdown"
                >
                    {Profiles.map((profile, index) => (
                        <option key={profile.id} value={index}>
                            {profile.name} {profile.surname}
                        </option>
                    ))}
                </select>
            </div>
            <div className="Profile__container">
                <ProfileCard {...Profiles[currentProfile]} />
                <div className="ProfileBody__container">
                    {Profiles[currentProfile].body && (
                        <ProfileBody {...Profiles[currentProfile].body!} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default App
