import BankVooruit from "../pages/BankVooruit";
import Sponsoring from "../pages/Sponsoring";

import * as gegevens2017Acht from "./2017-acht";
import * as gegevens2018Quiz from "./2018-quiz";
import * as gegevens2019CVDK from "./2019-code-vd-kaart";
import * as gegevens2022Goudje from "./2022-goudje";
import * as gegevens2023Quiz from "./2023-quiz";
import * as gegevens2024Roloc from "./2024-roloc";

import Project from "../components/Project";
import Quiz from "../components/Quiz";

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
    component: <Project {...gegevens2024Roloc} />,
  },
  { label: "Sponsoring", link: "/sponsoring", component: <Sponsoring /> },
  {
    label: "Om nooit te vergeten",
    link: [
      {
        label: "Quiz (2023)",
        link: "/2023-quiz",
        component: <Quiz {...gegevens2023Quiz} />,
      },
      {
        label: "Goudje en de heldere maan (2022)",
        link: "/2022-goudje",
        component: <Project {...gegevens2022Goudje} />,
      },
      {
        label: "Code van de Kaart (2019)",
        link: "/2019-code-vd-kaart",
        component: <Project {...gegevens2019CVDK} />,
      },
      {
        label: "Quiz (2018)",
        link: "/2018-quiz",
        component: <Quiz {...gegevens2018Quiz} />,
      },
      {
        label: "Acht (2017)",
        link: "/2017-acht",
        component: <Project {...gegevens2017Acht} />,
      },
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
