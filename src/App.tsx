import ProfileCard, { ProfileProps } from "./Profile";
import { useState } from "react";
import "./Profile.css";
import "./ProfileBody.css";
import "./assets/fonts.css";
import ProfileBody from "./ProfileBody.tsx";
import * as React from "react";

function App() {
  const [currentProfile, setCurrentProfile] = useState<number>(0);
  const handleProfileChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentProfile(Number(e.target.value));
  };
  const EXAMPLE_PROFILE: ProfileProps = {
    id: 0,
    avatarUrl:
      "https://i.redd.it/harry-dubois-the-protagonist-of-disco-elysium-v0-5aw0ug8swd4d1.jpg?width=369&format=pjpg&auto=webp&s=bc882555863be225f6fa1c251c2853133df16e22",
    name: "Гарри",
    surname: "Дю Бойс",
    job: "Детектив",
    email: "hurry@mail.ru",
    phoneNumber: "+1 234 567 890",
    webSite: "sober.com",
    town: "Ревашоль",

    specialisations: {
      items: [
        "Либерал",
        "Запой",
        "Бомжекоп",
        "Криминалистика",
        "Экзистенциальные расследования",
      ],
    },

    languages: {
      items: [
        { name: "Английский", level: 5 },
        { name: "Ревашольский", level: 3 },
        { name: "Семенинский", level: 4 },
        { name: "Изоляционионский", level: 1 },
      ],
    },

    socials: {
      linkedScroll: "@hurryLink",
      mageBook: "hurryBook",
      portalgram: "@hurryGram",
    },

    body: {
      aboutMeInfo:
        "Закаленный в боях с самим собой детектив с обостренным чувством справедливости и хронической нехваткой аспирина. Специализируюсь на делах, где граница между преступником и жертвой тоньше лезвия бритвы. Умею находить clues в самых неожиданных местах — от протоколов до дна стакана.",
      experience: [
        {
          title: "Департамент Правопорядка Ревейхола",
          post: "Старший детектив (с перерывами)",
          period: "1907–1912, 1914–н.в.",
          description:
            'Расследование убийств, краж и метафизических инцидентов; вел дело "Белое сияние" (разоблачил культ); автор теории "Палач-Фантом".',
        },
        {
          title: 'Бар "Кафе Рене"',
          post: "Консультант по крепким напиткам",
          period: "1912–1914",
          description:
            'Разработал авторский коктейль "Полицейский сон", проводил психоанализ за барной стойкой, установил рекорд по количеству разбитых стульев.',
        },
      ],
      education: [
        {
          institution: "Академия Правопорядка Ревоколя",
          specialty: "Курс 'Как не застрелить себя во время чистки оружия'",
          period: "<год окончания утерян>",
        },
        {
          institution: "Университет Грейс-Корт (неоконченное)",
          specialty: "Философия и теология",
          period: "1901–1903",
        },
      ],
      skills: {
        items: [
          { name: "Внутренняя империя", level: "70" },
          { name: "Грубая сила", level: "50" },
          { name: "Раскрывать дела", level: "90" },
        ],
      },
      hobbies: {
        items: [
          { name: "Пить", level: "100" },
          { name: "Раскрывать дела", level: "90" },
        ],
      },
    },
  };

  const PROFILES: ProfileProps[] = [EXAMPLE_PROFILE];
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
