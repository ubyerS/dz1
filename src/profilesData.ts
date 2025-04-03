import { ProfileProps } from "./Profile.tsx";
import kimAvatarUrl from "./assets/kim.jfif";

const HURRY_PROFILE: ProfileProps = {
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

const KIM_PROFILE: ProfileProps = {
  id: 1,
  avatarUrl: kimAvatarUrl,
  name: "Ким",
  surname: "Кицураги",
  job: "Офицер полиции",
  email: "kim@revachol.pd",
  phoneNumber: "+1 234 567 891",
  webSite: "justice.rev",
  town: "Ревашоль",
  specialisations: {
    items: [
      "Меткий стрелок",
      "Тактика",
      "Протокол",
      "Криминалистика",
      "Переговоры",
      "Мотоциклы",
    ],
  },

  languages: {
    items: [
      { name: "Ревашольский", level: 5 },
      { name: "Семенинский", level: 4 },
      { name: "Изоляционионский", level: 2 },
    ],
  },

  socials: {
    linkedScroll: "@kimLink",
    mageBook: "kimBook",
    portalgram: "@kimGram",
  },

  body: {
    aboutMeInfo:
      "Профессиональный офицер с безупречной репутацией. Верен уставу, но не лишён гибкости мышления. Специализируюсь на сложных операциях, требующих хладнокровия и точности. Предпочитаю факты домыслам, а протокол — импровизации. Хотя иногда и сам грешу курьёзными экспериментами.",

    experience: [
      {
        title: "Ревейхольская Полиция",
        post: "Офицер Специальных Операций",
        period: "1910–н.в.",
        description:
          'Руководство сложными операциями; разработка тактики задержаний; дело "Бледный всадник" (обезвреживание снайпера-фанатика); рекорд по точности стрельбы в департаменте.',
      },
      {
        title: "Мото-клуб 'Смерч'",
        post: "Механик/Гонщик (неофициально)",
        period: "1905–1910",
        description:
          'Техническое обслуживание мотоциклов; участие в подпольных гонках "Красная линия"; разработка модификаций двигателей.',
      },
    ],

    education: [
      {
        institution: "Академия Правопорядка Ревейхола",
        specialty: "Курс 'Тактические операции и баллистика'",
        period: "1908",
      },
      {
        institution: "Технический Колледж Грейс-Корт",
        specialty: "Механика двигателей внутреннего сгорания",
        period: "1903–1905",
      },
    ],

    skills: {
      items: [
        { name: "Меткость", level: "95" },
        { name: "Хладнокровие", level: "90" },
        { name: "Механика", level: "85" },
        { name: "Протокол", level: "80" },
        { name: "Логика", level: "75" },
      ],
    },

    hobbies: {
      items: [
        { name: "Мотоциклы", level: "100" },
        { name: "Коллекционирование очков", level: "80" },
        { name: "Стрельба", level: "95" },
        { name: "Чтение протоколов", level: "70" },
      ],
    },
  },
};

const PROFILES: ProfileProps[] = [HURRY_PROFILE, KIM_PROFILE];

export default PROFILES;
