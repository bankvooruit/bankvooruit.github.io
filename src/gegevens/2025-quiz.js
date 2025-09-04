export const quiz_id = "2025-quiz";

const link_inschrijvingsformulier =
  "https://qrto.org/Vckhsc";
const korte_inhoud =
  "Een lichtvoetige familiequiz voor iedereen die al eens van quizzen houdt. In samenwerking met Theaterling, ten voordele van de MS-Liga Vlaanderen";
// const terugblik =
//    "In het najaar van 2023 hielden we een te gekke en zeer gesmaakte Bank Vooruit-quiz in Lille. Bedankt aan alle ploegen die toen aanwezig waren. Dankzij jullie kunnen we in 2024 'De legende van Roloc' maken en alle ticketopbrengsten wegschenken. Dikke merci en wie weet... tot een volgende Quiz!",


export const quiz = {
  jaartal: "2025",
  link_inschrijvingsformulier,
  flyer: "quizFlyer.jpg",
  korte_inhoud,
  // terugblik,
  eigenschappen: [
    {
      label: "Wat",
      value: korte_inhoud,
    },
    {
      label: "Wanneer",
      value: [
        "Zaterdag 29 november 2025",
        "Deuren openen 19u, eerste vraag om 19u30",
      ],
    },
    {
      label: "Waar",
      value: ["Zaal 't Hof", "Grote Markt 41", "2200 Herentals"],
    },
    {
      label: "Ploegen",
      value: "Ploegen van maximaal 5 personen",
    },
    {
      label: "Inschrijvingsgeld",
      value: "€25 per ploeg",
    },
    {
      label: "Inschrijven",
      value: [
        {
          label: "Vul het inschrijfformulier in!",
          link: link_inschrijvingsformulier,
        },
        'Je inschrijving is pas geldig na ontvangst van het inschrijvingsgeld op rekeningnummer: BE93 9734 1677 3567 met de vermelding: "ploegnaam + TBV Quiz"',
        "Indien u zich wenst uit te schrijven, stuurt u een mail naar theaterbankvooruit@gmail.com",
      ],
    },
  ],
};

export const sponsors = {
  JulesDestrooper: {
    label: "Jules Destrooper",
    website: "https://www.jules-destrooper.com/nl",
    met_dank: "Met dank aan onze lekkere sponsor",
    logo: "JulesDestrooper.png",
  },
};