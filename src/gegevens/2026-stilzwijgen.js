export const voorstelling_id = "2026-stilzwijgen";
export const background = "Website_Achtergrond.jpg";
export const backgroundColor = "black";

export const verhaal = {
  titel: "Stilzwijgen",
  korte_inhoud:
    "Stilzwijgen is een aangrijpende, maar tegelijk herkenbare verhaal over zes jongeren die samen opgroeien in een weeshuis onder het harde regime van de strenge en meedogenloze Mariette De Bok, de beruchte Savooi. Regels zijn er keihard, en wie zich verzet, voelt dat meteen. Jaren later komen de jongeren opnieuw samen. Ze zijn volwassen geworden, maar de schaduw van hun verleden hangt nog steeds over hen. Durven ze eindelijk terugvechten tegen de macht van de Savooi, of blijven ze ook nu gevangen in angst en stilzwijgen? ",
  type_voorstelling:
    "Met een mix van rauwe emoties, zwarte humor en ontroerende verhalen legt de voorstelling bloot hoe veerkrachtig jongeren kunnen zijn, zelfs na diepe wonden. Het is een voorstelling vol spanning, herkenning en hoop, een must-see voor iedereen die wil ervaren hoe krachtig je kan zijn, zelfs in de donkerste omstandigheden. Vanaf 10 jaar.",
  // terugblik: "'De Code van de Kaart' zorgde in december 2019 opnieuw voor heel wat lachende gezichten in de zaal. Samen met de kinderen losten onze vijf vrienden een nieuw mysterie op. Dankzij alle bezoekers werden opnieuw verschillende goede doelen gesteund. Dank je wel aan alle helpende handen en enthousiaste bezoekers.",
  eigenschappen: [
    {
      label: "Auteur",
      value: "Theater Bank Vooruit",
    },
    {
      label: "Regie",
      value: "Stijn Neefs",
    },
    {
      label: "Acteurs",
      value: "Theaterling en Theater Bank Vooruit",
    },
  ],
  promo_beelden: [
    {
      beeld: "flyer.jpeg",
      omschrijving:
        "Stilzwijgen: een dame met haar wijsvinger voor haar lippen en een toegeplakte mond",
    },
  ],
  // sfeerbeelden: [
  //   "Roloc 01.jpg",
  //   "Roloc 02.jpg",
  //   "Roloc 03.jpg",
  //   "Roloc 04.jpg",
  //   "Roloc 05.jpg",
  //   "Roloc 06.jpg",
  //   "Roloc 07.jpg",
  //   "Roloc 08.jpg",
  //   "Roloc 09.jpg",
  //   "Roloc 10.jpg",
  //   "Roloc 11.jpg",
  //   "Roloc 12.jpg",
  //   "Roloc 13.jpg",
  // ],
};

export const voorstellingen = {
  Herentals: {
    locatie: "Herentals",
    wanneer: [
      {
        date: "2026-02-20",
        dag: "Vrijdag 20 februari 2026",
        uren: ["20u00"],
      },
      {
        date: "2026-02-21",
        dag: "Zaterdag 21 februari 2026",
        uren: ["20u00"],
      },
      {
        date: "2026-02-22",
        dag: "Zondag 22 februari 2026",
        uren: ["15u00"],
      },
      {
        date: "2026-02-28",
        dag: "Zaterdag 28 februari 2026",
        uren: ["20u00"],
      },
      {
        date: "2026-03-01",
        dag: "Zondag 1 maart 2026",
        uren: ["15u00"],
      },
      {
        date: "2026-03-06",
        dag: "Vrijdag 6 maart 2026",
        uren: ["20u00"],
      },
      {
        date: "2026-03-07",
        dag: "Zaterdag 7 maart 2026",
        uren: ["20u00"],
      },
      {
        date: "2026-03-08",
        dag: "Zondag 8 maart 2026",
        uren: ["15u00"],
      },
    ],
    waar: {
      gebouw: "Kunstencampus Zaal Scène",
      adres: "Molenvest 21, 2200 Herentals",
    },
    goede_doelen: ["MSLiga"], // verwijs naar de "keys" van de goede doelen
    //extra: "Deze voorstelling is een try-out",
    reservatie_link:
      "https://tickets.roodfluweel.be/theaterspektakel/Production/Details/bfd4111d-b0ff-44f0-963e-025a5fb06ee4",
    // uitverkocht: true,
    //verzamelde_centjes: ["€700,00"],
  },
};

export const goede_doelen = {
  MSLiga: {
    naam: "MS Liga",
    omschrijving:
      "MS Liga deelt informatie over de auto-immuunziekte Multiple Sclerose (MS) en leven met MS, praktische tips, en brengt je in contact met lotgenoten die je begrijpen. Laat je ondersteunen, deel ervaringen, en ontdek hoe jij mee in actie kan komen in de strijd tegen MS.",
    website: "https://www.ms-vlaanderen.be/nl",
    foto: "ms-liga.jpg",
    voorstellingen: ["Herentals"], // verwijs naar de "keys" van de voorstellingen
  },
};
