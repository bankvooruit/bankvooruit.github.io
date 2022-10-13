import BankVooruit from "../pages/BankVooruit";
import Sponsoring from "../pages/Sponsoring";
import Goudje2022 from "../pages/2022Goudje";
import CodeVDKaart from "../pages/2019CodeVDKaart";
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
    label: "Goudje en de heldere maan",
    link: "/2022-goudje",
    component: <Goudje2022 />,
  },
  { label: "Sponsoring", link: "/sponsoring", component: <Sponsoring /> },
  {
    label: "Om nooit te vergeten",
    link: [
      {
        label: "Code van de Kaart (2019)",
        link: "/2019-code-vd-kaart",
        component: <CodeVDKaart />,
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
  {
    label: "Opendoek",
    link: "https://opendoek.be/",
    icon_image: "opendoek.png",
  },
];
