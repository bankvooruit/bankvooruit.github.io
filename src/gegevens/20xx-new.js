/**
 * Dit bestand bevat alle informatie over een voorstelling
 */

// een unieke naam voor de voorstelling, hiermee kan je ernaar verwijzen vanuit de Menu component en alle afbeeldingen moeten in een gelijknamig mapje zitten (onder "public")
export const voorstelling_id = ""; // bijvoorbeeld: "2024-roloc";
// de bestandsnaam voor de achtergrond, moet in het mapje "public/afbeedlingen/<voorstelling_id>" zitten
export const background = "Website_Achtergrond.png";
// naam of hexcode van de achtergrondkleur
export const backgroundColor = "[#ead16fff]";

export const verhaal = {
  // naam van de voorstelling
  titel: "De legende van Roloc",
  // een korte omschrijving van het verhaal
  korte_inhoud:
    " Vijf vrienden mogen de oude zolder van een theaterzaal opruimen. Tussen de vele toneelattributen vinden ze een mysterieus dagboek waarin niets staat. Of toch wel? Enkel Floris kan lezen wat er in het dagboek staat. Het dagboek vertelt het verhaal van Roloc die 100 jaar geleden verliefd werd op Violet. Jammer genoeg voelde Violet niets voor Roloc. Roloc werd zo boos hierover dat hij een vloek uitsprak over onze kleurrijke wereld. Elke 100 jaar kan de vloek gedurende 1 dag ongedaan worden gemaakt. Die dag is vandaag. Om de vloek ongedaan te maken, moeten de vrienden terugkeren in de tijd en allerlei opdrachten oplossen. Enkel zo kunnen ze voorkomen dat weldra alle kleuren uit onze wereld verdwijnen. Lukt het hen om met de hulp van iedereen in de zaal de wereld te redden? Kom samen met Noor, Lena, Floris en Sam het mysterie oplossen en geniet van een heerlijke familievoorstelling met zang, dans en onze huispianist Toon.",
  // een korte uitleg dat beschrijft wat voor een soort voorstelling en voor wie dit is
  type_voorstelling:
    "De legende van Roloc is een typische Bank Vooruit-voorstelling. Live muziek, zang en dans begeleiden een verhaal vol humor en avontuur. De kinderen lossen samen met de acteurs het mysterie op en zorgen zo voor de grote redding! Plezier gegarandeerd vanaf 5 jaar.",
  // een kort tekstje dat we tonen nadat de voorstelling voorbij is
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
  // delen van de affiche die we willen tonen vooraf
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
  // foto's van de voorstellingen die we willen tonen achteraf
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
    goede_doelen: ["KruimelKrachtig"],
    //verzamelde_centjes: ["€435,80", "€435,80"],
    extra: "Deze voorstelling is een try-out",
    reservatie_link:
      "https://www.i-active.be/ords/f?p=167:52:::::P52_SLEUTEL,P52_VOLGNR:2363F9BA0805FF3A70DD7E6105F638DE,15560045",
    //uitverkocht: true,
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
    goede_doelen: ["vzwOpWeg"],
    // verzamelde_centjes: ["€591,55"],
    reservatie_link: "https://vorselaar.be/bankvooruit/",
    uitverkocht: true,
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
    goede_doelen: ["Feestvarken"],
    //verzamelde_centjes: ["€674,00"],
    reservatie_link:
      "https://be.ticketgang.eu/orgFrameSaleNew.php?org=2621&event=141799#",
    //uitverkocht: true,
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
    goede_doelen: ["WinterbarDeSchrans"],
    //verzamelde_centjes: ["€1290,65"],
    reservatie_link: "https://www.ticketgang.be/tickets/hulshout#",
    //uitverkocht: true,
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
    goede_doelen: ["Levensloop"],
    //verzamelde_centjes: ["€513,40"],
    reservatie_link: "https://www.grobbendonk.be/kindertheater",
    //uitverkocht: true,
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
    goede_doelen: ["Levensloop"],
    //verzamelde_centjes: ["€435,80", "€435,80"],
    extra: "Georganiseerd door de Gezinsbond",
    reservatie_link:
      "https://be.ticketgang.eu/orgFrameSaleNew.php?org=145039&event=141391#https://be.ticketgang.eu/orgFrameSaleNew.php?org=145039&event=141391#",
    //uitverkocht: true,
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
    goede_doelen: ["Vonk"],
    //verzamelde_centjes: ["€900,00"],
    reservatie_link: "https://www.ranst.be/theaterbankvooruit",
    //uitverkocht: true,
  },
};

export const goede_doelen = {
  KruimelKrachtig: {
    naam: "Werkgroep Kruimel Krachtig",
    //omschrijving: "Eén-op-éénbegeleiding van personen met een beperking.",
    //website: "https://www.vzwopweg.be",
    //foto: "vzwOpWeg.png",
    voorstellingen: ["Herenthout"],
  },
  vzwOpWeg: {
    naam: "vzw Op Weg",
    omschrijving: "Eén-op-éénbegeleiding van personen met een beperking.",
    website: "https://www.vzwopweg.be",
    //foto: "vzwOpWeg.png",
    voorstellingen: ["Vorselaar"],
  },
  Feestvarken: {
    naam: "Feestvarken vzw",
    omschrijving:
      "Verjaardagspakketten voor kinderen die opgroeien in armoede.",
    website: "https://feestvarkenvzw.be/",
    //foto: "feestvarken.png",
    voorstellingen: ["Olen"],
  },
  WinterbarDeSchrans: {
    naam: "Winterbar De Schrans - Kom op tegen Kanker",
    omschrijving:
      "Deze lokale vereniging zamelt centen in voor de strijd tegen kanker.",
    //website: "https://feestvarkenvzw.be/",
    //foto: "feestvarken.png",
    voorstellingen: ["Hulshout"],
  },
  Levensloop: {
    naam: "Levensloop Neteland",
    omschrijving: "Ondersteuning mensen met kanker en kankeronderzoek",
    // website:
    //  "https://www.levensloop.be/relays/neteland-vorselaar-grobbendonk-2022 ",
    foto: "Levensloop_Logo.jpg",
    voorstellingen: ["Nijlen", "Grobbendonk"],
  },
  Vonk: {
    naam: "Vonk",
    omschrijving:
      "Vonk is een groeiplek in Boechout voor jongeren tussen 15 en 23 jaar met een psychische kwetsbaarheid.",
    website: "https://www.vonkplek.be ",
    //foto: "Vonk.png",
    voorstellingen: ["Ranst"],
  },
};
