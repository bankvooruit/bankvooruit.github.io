import React from "react";

import { background, backgroundColor } from "../gegevens/menubalk";

import BackgroundImage from "../layout/BackgroundImage";
import PageContent from "../layout/PageContent";
import TextContainer from "../components/TextContainer";
import Link from "../components/Link";

export default function Quiz2018() {
  return (
    <BackgroundImage
      image={`/afbeeldingen/${background}`}
      color={backgroundColor}
    >
      <PageContent>
        <TextContainer>
          <p className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Quiz
          </p>
          <p className="text-center text-xl font-normal text-gray-500 dark:text-gray-200 mb-8">
            In het najaar van 2018 hielden we een te gekke en zeer gesmaakte
            Bank Vooruit-quiz in Lier. Bedankt aan alle ploegen die toen
            aanwezig waren. Dankzij jullie kunnen we in 2019 'De Code van Kaart'
            maken en alle ticketopbrengsten wegschenken. Dikke merci en wie
            weet... tot een volgende Quiz!
          </p>
          <p className="text-center text-xl font-normal text-gray-500 dark:text-gray-200 mb-8">
            Met dank aan onze lekkere sponsor: Jules Destrooper
          </p>
          <Link
            target="_blank"
            href="https://www.jules-destrooper.com/nl"
            title="Onze sponsor: Jules Destrooper"
            rel="noreferrer"
          >
            <img
              src="/afbeeldingen/2018-quiz/sponsors/JulesDestrooper.png"
              alt="Logo van Jules Destrooper"
            />
          </Link>
        </TextContainer>
      </PageContent>
    </BackgroundImage>
  );
}
