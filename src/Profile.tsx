import "./Profile.css";
import mailIconUrl from './images/mail.svg';
import phoneIconUrl from './images/phone.svg';
import webSiteIconUrl from './images/group.svg';
import locationIconUrl from './images/location.svg';
import circleIconUrl from './images/circle.svg';

export interface ProfileProps {
    id : number;
    avatarUrl : string;
    name: string;
    surname: string;
    job : string;
    email : string;
    phoneNumber : string;
    webSite : string;
    town : string;
    specialisations : {
        items : string[];
    }
    languages : {
        items : string[];
    }
    socials : {
        linkedScroll : string;
        mageBook : string;
        portalgram: string,
    }
}


function ProfileCard(profile: ProfileProps) {
    return(
        <div className="ProfileCard">
            <div className = "ProfileCard__avatar">
                <img src  = {profile.avatarUrl } className="profile-avatar"/>
            </div>

            <div className = "ProfileCard__header-info">
                <h1>
                    <span className="ProfileCard__header-info-name"> {profile.name} </span>
                    <span className="ProfileCard__header-info-surname"> {profile.surname} </span>
                    <span className="ProfileCard__header-info-job"> {profile.job} </span>
                </h1>
            </div>

            <div className = "ProfileCard__body-info">
                <h2>
                    <p> <img src = {mailIconUrl} className="ProfileCard__body-info-mailIcon"/> {profile.email} </p>
                    <p> <img src = {phoneIconUrl} className="ProfileCard__body-info-phoneIconUrlIcon"/> {profile.phoneNumber} </p>
                    <p> <img src = {webSiteIconUrl} className="ProfileCard__body-info-webSiteIconUrl"/> {profile.webSite} </p>
                    <p> <img src = {locationIconUrl} className="ProfileCard__body-info-locationIconUrl"/> {profile.town} </p>
                </h2>
            </div>

            <div className = "ProfileCard__specialisations">
                <h2> <b> Специализация </b>
                    <ul>
                        {profile.specialisations.items.map((item) => (
                            <li key = {item}> {item} </li>
                        ))}
                    </ul>
                </h2>
            </div>

            <div className = "ProfileCard__languages">
                <h2> <b> Языки </b>
                    {profile.languages.items.map((item) => (
                        <p key = {item}> {item} <img src = {circleIconUrl}/> </p>
                    ))}
                </h2>
            </div>

            <div className = "ProfileCard__socials">
                <h2> <b> Социальные сети </b>
                    <p> <li> LinkedScroll: {profile.socials.linkedScroll} </li>  </p>
                    <p> <li> MageBook: {profile.socials.mageBook}  </li> </p>
                    <p> <li> Portalgram: {profile.socials.portalgram} </li> </p>
                </h2>
            </div>
        </div>
    )

}

export default ProfileCard;