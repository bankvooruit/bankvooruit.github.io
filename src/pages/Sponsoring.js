import React from "react";

import { background, backgroundColor } from "../gegevens/menubalk";

import BackgroundImage from "../layout/BackgroundImage";
import PageContent from "../layout/PageContent";
import Link from "../components/Link";
import TextContainer from "../components/TextContainer";

export default function Sponsoring() {
  return (
    <BackgroundImage
      image={`/afbeeldingen/${background}`}
      color={backgroundColor}
    >
      <PageContent>
        <TextContainer>
          <p className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Sponsoring
          </p>
          <p className="text-center text-xl font-normal text-gray-500 dark:text-gray-200 mb-8">
            Bij Theater Bank Vooruit schenken we alle inkomsten uit onze
            voorstellingen weg aan lokale goede doelen. Natuurlijk is het maken
            van onze voorstellingen niet gratis. Hoewel we erg spaarzaam omgaan
            met centjes, hebben we toch bepaalde productiekosten voor attributen
            en kledij.
          </p>
          <p className="text-center text-xl font-normal text-gray-500 dark:text-gray-200">
            Daarom zouden we erg dankbaar zijn voor enkele personen of bedrijven
            die onze visie en werking bijzonder genoeg vinden om ons een
            financieel duwtje in de rug te geven. Als jij het op je hart hebt om
            dit te doen, neem dan zeker even contact op met ons via&nbsp;
            <Link href="mailto:theaterbankvooruit@gmail.com">
              theaterbankvooruit@gmail.com
            </Link>
          </p>
        </TextContainer>
      </PageContent>
    </BackgroundImage>
  );
}
