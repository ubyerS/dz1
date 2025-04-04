import * as React from "react";
import { useState } from "react";
import ProfileCard from "./ProfileCard.tsx";
import ProfileBody from "./ProfileBody";
import PROFILES from "./profilesData";


function App() {
  const [currentProfile, setCurrentProfile] = useState<number>(0);
  const handleProfileChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentProfile(Number(e.target.value));
  };

  return (
    <div className="App">
      <div className="Profile__selector">
        <select
          value={currentProfile}
          onChange={handleProfileChange}
          className="Profile__dropdown"
        >
          {PROFILES.map((profile, index) => (
            <option key={profile.id} value={index}>
              {profile.name} {profile.surname}
            </option>
          ))}
        </select>
      </div>
      <div className="Profile__container">
        <ProfileCard {...PROFILES[currentProfile]} />
        <div className="ProfileBody__container">
          {PROFILES[currentProfile].body && (
            <ProfileBody {...PROFILES[currentProfile].body!} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
