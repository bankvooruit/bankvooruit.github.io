export const voorstelling_id = "2024-roloc";
export const background = "Website_Achtergrond.png";
export const backgroundColor = "midnight";

export const verhaal = {
  titel: "De legende van Roloc",
  korte_inhoud:
    "Vijf vrienden mogen de oude zolder van een theaterzaal opruimen. Tussen de vele toneelattributen vinden ze een mysterieus dagboek waarin niets staat. Of toch wel? Enkel Floris kan lezen wat er in het dagboek staat. Het dagboek vertelt het verhaal van Roloc die 100 jaar geleden verliefd werd op Violet. Jammer genoeg voelde Violet niets voor Roloc. Roloc werd zo boos hierover dat hij een vloek uitsprak over onze kleurrijke wereld. Elke 100 jaar kan de vloek gedurende 1 dag ongedaan worden gemaakt. Die dag is vandaag. Om de vloek ongedaan te maken, moeten de vrienden terugkeren in de tijd en allerlei opdrachten oplossen. Enkel zo kunnen ze voorkomen dat weldra alle kleuren uit onze wereld verdwijnen. Lukt het hen om met de hulp van iedereen in de zaal de wereld te redden? Kom samen met Noor, Lena, Floris en Sam het mysterie oplossen en geniet van een heerlijke familievoorstelling met zang, dans en onze huispianist Toon.",
  type_voorstelling:
    "De legende van Roloc is een typische Bank Vooruit-voorstelling. Live muziek, zang en dans begeleiden een verhaal vol humor en avontuur. De kinderen lossen samen met de acteurs het mysterie op en zorgen zo voor de grote redding! Plezier gegarandeerd vanaf 5 jaar.",
  // terugblik: "'De Code van de Kaart' zorgde in december 2019 opnieuw voor heel wat lachende gezichten in de zaal. Samen met de kinderen losten onze vijf vrienden een nieuw mysterie op. Dankzij alle bezoekers werden opnieuw verschillende goede doelen gesteund. Dank je wel aan alle helpende handen en enthousiaste bezoekers.",
  eigenschappen: [
    {
      label: "Auteur",
      value: "Stijn Neefs & Theater Bank Vooruit",
    },
    {
      label: "Regie",
      value: "Katrien Debois & Theater Bank Vooruit",
    },
    {
      label: "Acteurs",
      value: "Theater Bank Vooruit",
    },
    {
      label: "Muziek",
      value: "Toon De Ceulaer",
    },
    {
      label: "Productie",
      value: "Dominique Maerten",
    },
  ],
  promo_beelden: [
    {
      beeld: "titel_transparant.png",
      omschrijving: "De legende van Roloc",
    },
    {
      beeld: "boek_transparant.png",
      omschrijving: "Oplichtend boek",
    },
  ],
  sfeerbeelden: [],
};

export const voorstellingen = {
  Herenthout: {
    locatie: "Herenthout",
    wanneer: {
      date: "2024-03-17",
      dag: "Zondag 17 maart 2024",
      uren: ["10u30"],
    },
    waar: {
      gebouw: "Zaal Lux",
      adres: "Markt 23, 2270 Herenthout",
    },
    goede_doelen: ["KruimelKrachtig"], // verwijs naar de "keys" van de goede doelen
    extra: "Deze voorstelling is een try-out",
    reservatie_link:
      "https:// www.i-active.be/ords/f?p=167:52:::::P52_SLEUTEL,P52_VOLGNR:2363F9BA0805FF3A70DD7E6105F638DE,15560045",
    // uitverkocht: true,
    // verzamelde_centjes: ["€435,80", "€435,80"],
  },
  Vorselaar: {
    locatie: "Vorselaar",
    wanneer: {
      date: "2024-03-30",
      dag: "Zaterdag 30 maart 2024",
      uren: ["10u30"],
    },
    waar: {
      gebouw: "De Kampus",
      adres: "Cardijnlaan 8, 2290 Vorselaar",
    },
    goede_doelen: ["vzwOpWeg"], // verwijs naar de "keys" van de goede doelen
    reservatie_link: "https:// vorselaar.be/bankvooruit/",
    // extra: "Deze voorstelling is een try-out",
    uitverkocht: true,
    // verzamelde_centjes: ["€591,55"],
  },
  Olen: {
    locatie: "Olen",
    wanneer: {
      date: "2024-04-02",
      dag: "Dinsdag 2 april 2024",
      uren: ["10u30"],
    },
    waar: {
      gebouw: "Theaterzaal Het Vierde Oor",
      adres: "Domein Teunenberg, 2250 Olen",
    },
    goede_doelen: ["Feestvarken"], // verwijs naar de "keys" van de goede doelen
    reservatie_link:
      "https://be.ticketgang.eu/orgFrameSaleNew.php?org=2621&event=141799#",
    // extra: "Deze voorstelling is een try-out",
    // uitverkocht: true,
    // verzamelde_centjes: ["€674,00"],
  },
  Hulshout: {
    locatie: "Hulshout",
    wanneer: {
      date: "2024-04-03",
      dag: "Woensdag 3 april 2024",
      uren: ["10u30"],
    },
    waar: {
      gebouw: "Gemeenschapscentrum IJzermael",
      adres: "Monseigneur Raeymaekersstraat 11, 2235 Hulshout",
    },
    goede_doelen: ["WinterbarDeSchrans"], // verwijs naar de "keys" van de goede doelen
    reservatie_link: "https:// www.ticketgang.be/tickets/hulshout#",
    // extra: "Deze voorstelling is een try-out",
    // uitverkocht: true,
    // verzamelde_centjes: ["€1290,65"],
  },
  Grobbendonk: {
    locatie: "Grobbendonk",
    wanneer: {
      date: "2024-04-04",
      dag: "Donderdag 4 april 2024",
      uren: ["10u30"],
    },
    waar: {
      gebouw: "Volle Vaart",
      adres: "Vaartkom 6, 2280 Grobbendonk",
    },
    goede_doelen: ["Levensloop"], // verwijs naar de "keys" van de goede doelen
    reservatie_link: "https:// www.grobbendonk.be/kindertheater",
    // extra: "Deze voorstelling is een try-out",
    // uitverkocht: true,
    // verzamelde_centjes: ["€513,40"],
  },
  Nijlen: {
    locatie: "Nijlen",
    wanneer: {
      date: "2024-04-10",
      dag: "Woensdag 10 april 2024",
      uren: ["14u00"],
    },
    waar: {
      gebouw: "Gemeenschapscentrum 't Dorp",
      adres: "Berlaarsesteenweg 2, 2560 Kessel",
    },
    goede_doelen: ["Levensloop"], // verwijs naar de "keys" van de goede doelen
    reservatie_link:
      "https://be.ticketgang.eu/orgFrameSaleNew.php?org=145039&event=141391#https://be.ticketgang.eu/orgFrameSaleNew.php?org=145039&event=141391#",
    extra: "Georganiseerd door de Gezinsbond",
    // uitverkocht: true,
    // verzamelde_centjes: ["€435,80", "€435,80"],
  },
  Ranst: {
    locatie: "Ranst",
    wanneer: {
      date: "2024-04-11",
      dag: "Donderdag 11 april 2024",
      uren: ["10u30"],
    },
    waar: {
      gebouw: "GC Den Boomgaard",
      adres: "Antwerpsesteenweg 43, 2520 Broechem",
    },
    goede_doelen: ["Vonk"], // verwijs naar de "keys" van de goede doelen
    reservatie_link: "https:// www.ranst.be/theaterbankvooruit",
    // extra: "Deze voorstelling is een try-out",
    // uitverkocht: true,
    // verzamelde_centjes: ["€900,00"],
  },
};

export const goede_doelen = {
  KruimelKrachtig: {
    naam: "Werkgroep Kruimel Krachtig",
    // omschrijving: "Eén-op-éénbegeleiding van personen met een beperking.",
    // website: "https:// www.vzwopweg.be",
    foto: "kruimelkrachtig.jpg",
    voorstellingen: ["Herenthout"], // verwijs naar de "keys" van de voorstellingen
  },
  vzwOpWeg: {
    naam: "vzw Op Weg",
    omschrijving: "Eén-op-éénbegeleiding van personen met een beperking.",
    website: "https://www.vzwopweg.be",
    foto: "vzwopweg.png",
    voorstellingen: ["Vorselaar"], // verwijs naar de "keys" van de voorstellingen
  },
  Feestvarken: {
    naam: "Feestvarken vzw",
    omschrijving:
      "Verjaardagspakketten voor kinderen die opgroeien in armoede.",
    website: "https://feestvarkenvzw.be/",
    foto: "feestvarken.png",
    voorstellingen: ["Olen"], // verwijs naar de "keys" van de voorstellingen
  },
  WinterbarDeSchrans: {
    naam: "Winterbar De Schrans - Kom op tegen Kanker",
    omschrijving:
      "Deze lokale vereniging zamelt centen in voor de strijd tegen kanker.",
    // website: "https:// feestvarkenvzw.be/",
    foto: "komoptegenkanker.png",
    voorstellingen: ["Hulshout"], // verwijs naar de "keys" van de voorstellingen
  },
  Levensloop: {
    naam: "Levensloop Neteland",
    omschrijving: "Ondersteuning mensen met kanker en kankeronderzoek",
    // website: "https:// www.levensloop.be/relays/neteland-vorselaar-grobbendonk-2022 ",
    foto: "levensloopneteland.jpeg",
    voorstellingen: ["Nijlen", "Grobbendonk"], // verwijs naar de "keys" van de voorstellingen
  },
  Vonk: {
    naam: "Vonk",
    omschrijving:
      "Vonk is een groeiplek in Boechout voor jongeren tussen 15 en 23 jaar met een psychische kwetsbaarheid.",
    website: "https://www.vonkplek.be",
    foto: "vonk.png",
    voorstellingen: ["Ranst"], // verwijs naar de "keys" van de voorstellingen
  },
};
