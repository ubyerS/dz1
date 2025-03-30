import ProfileCard, {ProfileProps} from './Profile';
import { useState } from 'react';
import "./Profile.css";
import './assets/fonts.css';

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
        }
    }

    const Profiles : ProfileProps[] = [
        exampleProfile,
    ]
    return (
        <div className="App">
            <div className = "profile-selector">
                <select
                    value = {currentProfile}
                    onChange = {handleProfileChange}
                    className = "profile-dropdown"
                >
                    {Profiles.map((profile, index) => (
                        <option key={profile.id} value={index}>
                            {profile.name} {profile.surname}
                        </option>
                    ))}
                </select>
            </div>
            <ProfileCard {...exampleProfile} />
        </div>
    )
}

export default App
