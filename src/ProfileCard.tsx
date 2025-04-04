import "./ProfileCard.css";
import { ProfileBodyProps } from "./ProfileBody.tsx";
import mailIconUrl from "./images/mail.svg";
import phoneIconUrl from "./images/phone.svg";
import webSiteIconUrl from "./images/group.svg";
import locationIconUrl from "./images/location.svg";

export interface LanguageItem {
  name: string;
  level: number;
}

export interface ProfileCardProps {
  id: number;
  avatarUrl: string;
  name: string;
  surname: string;
  job: string;
  email: string;
  phoneNumber: string;
  webSite: string;
  town: string;
  specialisations: {
    items: string[];
  };
  languages: {
    items: LanguageItem[];
  };
  socials: {
    linkedScroll: string;
    mageBook: string;
    portalgram: string;
  };
  body?: ProfileBodyProps;
}

const KNOWLEDGE_LEVELS = [1, 2, 3, 4, 5];

function ProfileCard(profile: ProfileCardProps) {
  return (
    <div className="ProfileCard">
      <div className="ProfileCard__avatar">
        <img src={profile.avatarUrl} className="ProfileCard__profile-avatar" />
      </div>

      <div className="ProfileCard__header-info">
        <h1>
          <span className="ProfileCard__header-info-name">{profile.name}</span>
          <span className="ProfileCard__header-info-surname">
            {profile.surname}
          </span>
          <span className="ProfileCard__header-info-job"> {profile.job} </span>
        </h1>
      </div>

      <div className="ProfileCard__body-info">
        <h2 className="ProfileCard__body-info-header">
          <p>
            <img
              src={mailIconUrl}
              className="ProfileCard__body-info-mailIcon"
            />
            {profile.email}
          </p>
          <p>
            <img
              src={phoneIconUrl}
              className="ProfileCard__body-info-phoneIconUrlIcon"
            />
            {profile.phoneNumber}
          </p>
          <p>
            <img
              src={webSiteIconUrl}
              className="ProfileCard__body-info-webSiteIconUrl"
            />
            <a
              className="ProfileCard__body-info-webSite-link"
              href={`https://${profile.webSite}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.webSite}
            </a>
          </p>
          <p>
            <img
              src={locationIconUrl}
              className="ProfileCard__body-info-locationIconUrl"
            />
            {profile.town}
          </p>
        </h2>
      </div>

      <div className="ProfileCard__specialisations">
        <h2 className="ProfileCard__specialisations-header">
          <b> Специализация </b>
        </h2>
        <ul>
          {profile.specialisations.items.map((item) => (
            <li key={item}> {item} </li>
          ))}
        </ul>
      </div>

      <div className="ProfileCard__languages">
        <h2 className="ProfileCard__languages-title">
          <b>Языки</b>
        </h2>
        <ul className="ProfileCard__languages-list">
          {profile.languages.items.map((language) => (
            <li className="ProfileCard__languages-item" key={language.name}>
              <span>{language.name}</span>
              <div className="ProfileCard__languages-circles">
                {KNOWLEDGE_LEVELS.map((level) => (
                  <div
                    key={level}
                    className={`circle ${level <= language.level ? "ProfileCard__languages-circleFilled" : "ProfileCard__languages-circleEmpty"}`}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="ProfileCard__socials">
        <h2>
          <b>Социальные сети </b>
          <ul>
            <li>
              <b> LinkedScroll: </b> {profile.socials.linkedScroll}
            </li>
            <li>
              <b> MageBook: </b> {profile.socials.mageBook}
            </li>
            <li>
              <b> Portalgram: </b> {profile.socials.portalgram}
            </li>
          </ul>
        </h2>
      </div>
    </div>
  );
}

export default ProfileCard;
