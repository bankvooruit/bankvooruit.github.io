import React from "react";
import { map, sortBy } from "lodash";

import { TheaterBankVooruit, mensen } from "../gegevens/bankvooruit";
import { logo, background, backgroundColor } from "../gegevens/menubalk";

import BackgroundImage from "../layout/BackgroundImage";
import PageContent from "../layout/PageContent";
import TextContainer from "../components/TextContainer";
import Grid from "../layout/Grid";

export default function BankVooruit() {
  return (
    <BackgroundImage
      image={`/afbeeldingen/${background}`}
      color={backgroundColor}
    >
      <PageContent>
        <div>
          <img
            className="pt-4 max-h-96 max-w-96 mx-auto dark:invert"
            src={`/afbeeldingen/menubalk/${logo}`}
            alt="Logo van Theater Bank Vooruit"
          />
          <div className="py-4">
            <TextContainer className="mb-32">
              <p className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-8">
                {TheaterBankVooruit.naam}
              </p>
              <p className="text-center text-xl font-normal text-gray-500 dark:text-gray-200">
                {TheaterBankVooruit.tekst}
              </p>
            </TextContainer>
          </div>
          <Grid>
            {mensen &&
              map(sortBy(mensen, "naam"), (persoon) => (
                <div className="relative" key={persoon.naam}>
                  <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                    <img
                      alt={`Foto van ${persoon.naam}`}
                      src={`/afbeeldingen/bankvooruit/${persoon.foto}`}
                      className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                    />
                  </div>
                  <TextContainer className="pt-16 mb-16 text-center">
                    <p className="text-2xl text-gray-800 py-4 dark:text-white">
                      {persoon.naam}
                    </p>
                    <p className="text-md text-gray-500 dark:text-gray-200 mx-auto py-2 font-light">
                      Woont in {persoon.woonplaats}
                    </p>
                    <p className="text-md text-gray-500 dark:text-gray-200 mx-auto py-2 font-light">
                      {persoon.beroep}
                    </p>
                    {persoon.gezin && (
                      <p className="text-md text-gray-500 dark:text-gray-200 mx-auto py-2 font-light">
                        {persoon.gezin}
                      </p>
                    )}
                    <p className="text-md text-gray-500 dark:text-gray-200 mx-auto py-2 font-light">
                      {persoon.theaterconnecties}
                    </p>
                    <p className="text-xl text-gray-500 dark:text-white py-4  font-light">
                      "{persoon.levensmotto}"
                    </p>
                  </TextContainer>
                </div>
              ))}
          </Grid>
        </div>
      </PageContent>
    </BackgroundImage>
  );
}
