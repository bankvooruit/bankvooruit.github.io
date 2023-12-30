import BankVooruit from "../pages/BankVooruit";
import Sponsoring from "../pages/Sponsoring";
import Roloc2024 from "../pages/2024Roloc";
import Quiz2023 from "../pages/2023Quiz";
import Goudje2022 from "../pages/2022Goudje";
import CodeVDKaart2019 from "../pages/2019CodeVDKaart";
import Quiz2018 from "../pages/2018Quiz";
import Acht2017 from "../pages/2017Acht";

export const logo = "theaterbankvooruit.png";
export const background = "Website_Achtergrond.png";
export const backgroundColor = "midnight";

export const links = [
  {
    label: "Theater Bank Vooruit",
    link: "/bankvooruit",
    component: <BankVooruit />,
  },
  {
    label: "De legende van Roloc",
    link: "/2024-roloc",
    component: <Roloc2024 />,
  },
  { label: "Sponsoring", link: "/sponsoring", component: <Sponsoring /> },
  {
    label: "Om nooit te vergeten",
    link: [
      { label: "Quiz (2023)", link: "/2023-quiz", component: <Quiz2023 /> },
      {
        label: "Goudje en de heldere maan (2022)",
        link: "/2022-goudje",
        component: <Goudje2022 />,
      },
      {
        label: "Code van de Kaart (2019)",
        link: "/2019-code-vd-kaart",
        component: <CodeVDKaart2019 />,
      },
      { label: "Quiz (2018)", link: "/2018-quiz", component: <Quiz2018 /> },
      { label: "Acht (2017)", link: "/2017-acht", component: <Acht2017 /> },
    ],
  },
];

export const home = links[1];

export const icon_links = [
  {
    label: "Stuur Theater Bank Vooruit een e-mail",
    link: "mailto:theaterbankvooruit@gmail.com",
    icon_image: "email.png",
  },
  {
    label: "Theater Bank Vooruit op Facebook",
    link: "http://www.facebook.com/theaterbankvooruit",
    icon_image: "facebook.png",
  },
  {
    label: "Uit met vlieg",
    link: "https://uitmetvlieg.be/",
    icon_image: "vlieg.png",
  },
];
