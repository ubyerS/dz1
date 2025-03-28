import ProfileCard from './Profile'
import "./Profile.css"
import './assets/fonts.css';

function App() {
  const exampleProfile: ProfileCard = {
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
          items : [
              "english",
              "fdl;gfl;glf",
          ]
      },

      socials : {
          linkedScroll : "@hurryLink",
          mageBook : "hurryBook",
          portalgram : "@hurryGram",
      }
  }
  return (
      <div className="App">
          <ProfileCard {...exampleProfile} />
      </div>
  )
}

export default App
