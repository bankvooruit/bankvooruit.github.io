export const voorstelling_id = "2022-goudje";
export const background = "Website_Achtergrond.png";
export const backgroundColor = "midnight";

export const verhaal = {
  titel: "Goudje en de heldere maan",
  korte_inhoud:
    "Mevrouw Goudraad is de beste naaister van het hele land. Ze maakt alle kledij voor de koning en zijn hofhouding. Het was voor haar een hele eer toen haar werd gevraagd om voor de prinses een bruidsjurk te maken. Het moet de mooiste bruidsjurk zijn die er ooit in de wereld geweest is. Alle mensen zullen vol bewondering kijken naar de prinses. Maar de avond voor het huwelijk loopt het fout. Er ontbreekt iets aan de bruidsjurk. Goudje moet 's nachts op avontuur. Zal het haar lukken om de bruidsjurk op tijd af te krijgen?",
  type_voorstelling:
    "Goudje en de heldere maan is een sprookjesachtige vertelling voor kinderen. De verteller wordt bijgestaan door Theater Bank Vooruit zodat kinderen het gevoel krijgen middenin in het verhaal te zitten. Zoals altijd gaan de inkomsten van de voorstelling naar het goede doel.",
  eigenschappen: [
    {
      label: "Auteur",
      value: "Kirsten Goossens en Theater Bank Vooruit",
    },
    {
      label: "Regie",
      value: "Theater Bank Vooruit",
    },
    {
      label: "Acteurs",
      value: "Theater Bank Vooruit",
    },
    {
      label: "Geluiden en muziek",
      value: "Toon De Ceulaer",
    },
  ],
};

export const voorstellingen = {
  Vorselaar: {
    locatie: "Vorselaar",
    wanneer: {
      date: "2022-12-17",
      dag: "Zaterdag 17 december 2022",
      uren: ["10u30", "13u30"],
    },
    waar: {
      gebouw: "LDC Sprankel",
      adres: "Nieuwstraat 13, 2290 Vorselaar",
    },
    goede_doelen: ["Levensloop"],
    // reservatie_link: ""
  },
  Nijlen: {
    locatie: "Nijlen",
    wanneer: {
      date: "2022-12-18",
      dag: "Zondag 18 december 2022",
      uren: ["10u30"],
    },
    waar: {
      gebouw: "Info volgt later",
      adres: "",
    },
    goede_doelen: ["Amikoj"],
    extra: "Georganiseerd door de Gezinsbond",
    // reservatie_link: ""
  },
  Grobbendonk: {
    locatie: "Grobbendonk",
    wanneer: {
      date: "2022-12-27",
      dag: "Dinsdag 27 december 2022",
      uren: ["10u30"],
    },
    waar: {
      gebouw: "Volle Vaart",
      adres: "Vaartkom 6, 2280 Grobbendonk",
    },
    goede_doelen: ["Levensloop"],
    // reservatie_link: ""
  },
  Olen: {
    locatie: "Olen",
    wanneer: {
      date: "2022-12-28",
      dag: "Woensdag 28 december 2022",
      uren: ["10u30"],
    },
    waar: {
      gebouw: "Theaterzaal Het Vierde Oor",
      adres: "Domein Teunenberg, 2250 Olen",
    },
    goede_doelen: ["SandersOntbijt", "OlenTegenKanker"],
    reservatie_link:
      "https://be.ticketgang.eu/orgFrameSaleNew.php?org=2621&event=120984#",
  },
  Ranst: {
    locatie: "Ranst",
    wanneer: {
      date: "2023-01-03",
      dag: "Dinsdag 3 januari 2023",
      uren: ["10u30"],
    },
    waar: {
      gebouw: "GC Den Boomgaard",
      adres: "GC Den Boomgaard, Antwerpsesteenweg 43, 2520 Broechem",
    },
    goede_doelen: ["Feestvarken"],
  },
  Hulshout: {
    locatie: "Hulshout",
    wanneer: {
      date: "2023-01-04",
      dag: "Woensdag 4 januari 2023",
      uren: ["14u30"],
    },
    waar: {
      gebouw: "Gemeenschapscentrum IJzermael",
      adres: "Monseigneur Raeymaekersstraat 11, 2235 Hulshout",
    },
  },
  Lier: {
    locatie: "Lier",
    wanneer: {
      date: "2023-01-08",
      dag: "Zondag 8 januari 2023",
      uren: ["10u30"],
    },
    waar: {
      gebouw: "Feestzaal Sint-Ursula-Instituut ",
      adres: "Kanunnik-Davidlaan 15, 2500 Lier",
    },
    goede_doelen: ["CoopAfrika"],
  },
};

export const goede_doelen = {
  OlenTegenKanker: {
    naam: "Olen tegen kanker",
    omschrijving:
      "Olen tegen kanker organiseert fondswervende activiteiten, voorziet informatie over kanker aan kankerpatiënten in Olen en organiseert activiteiten voor kankerpatiënten en hun naasten",
    website: "https://www.Facebook.com/OlenTegenKanker ",
    foto: "Olen_OlenTegenKanker_logo.png",
    voorstellingen: ["Olen"],
  },
  SandersOntbijt: {
    naam: "Sanders ontbijt (Rondoufonds)",
    omschrijving:
      "Het Rondoufonds steunt wetenschappelijk onderzoek naar de ziekte van Duchenne",
    website: "https://www.rondoufonds.be/",
    foto: "Olen_rondoufonds_logo.png",
    voorstellingen: ["Olen"],
  },
  Levensloop: {
    naam: "Levensloop Neteland",
    omschrijving: "Ondersteuning mensen met kanker en kankeronderzoek",
    website:
      "https://www.levensloop.be/relays/neteland-vorselaar-grobbendonk-2022 ",
    foto: "Vorselaar_Levensloop_Logo.jpg",
    voorstellingen: ["Vorselaar", "Grobbendonk"],
  },
  Feestvarken: {
    naam: "Feestvarken",
    omschrijving:
      "Feestvarken verzorgt verjaardagspaketten voor kinderen in armoede",
    website: "https://www.feestvarkenvzw.be",
    foto: "Ranst_Feestvarkenvzw_Logo.jpg",
    voorstellingen: ["Ranst"],
  },
  CoopAfrika: {
    naam: "Coop Africa",
    omschrijving:
      "Fietsen voor leerlingen in Oeganda zodat ze meer kansen krijgen om naar school te gaan",
    website: "https://www.coop-africa.org/nl/ ",
    foto: "Lier_Coopafrica_logo.jpg",
    voorstellingen: ["Lier"],
  },
  Amikoj: {
    naam: "Amikoj",
    omschrijving: "Woonzorgproject voor jongeren met een beperking",
    website: "https://www.amikoj.be ",
    foto: "Nijlen_Amikoj_logo.png",
    voorstellingen: ["Nijlen"],
  },
};
