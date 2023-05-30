import React from "react";

import { background, backgroundColor } from "../gegevens/menubalk";

import BackgroundImage from "../layout/BackgroundImage";
import PageContent from "../layout/PageContent";
import TextContainer from "../components/TextContainer";
import Link from "../components/Link";

export default function Quiz2023() {
  const linkToForm =
    "https://forms.office.com/Pages/ResponsePage.aspx?id=dlwPtS6K9USr3-SkdK6kt6FV1KnT6TpPgc0610o7AR9UOFVMRFFORklLVEVYVElLT0I2NVlJNkpBNC4u";
  const classesForHeaderCell = "pr-4 text-right font-semibold align-top";
  return (
    <BackgroundImage
      image={`/afbeeldingen/${background}`}
      color={backgroundColor}
    >
      <PageContent>
        <TextContainer>
          <Link target="_blank" href={linkToForm} rel="noreferrer">
            <img
              className="mx-auto w-[250px] md:w-[350px]"
              src="/afbeeldingen/2023-quiz/flyer.jpeg"
              alt="Flyer quiz Theater Bank Vooruit"
            />
          </Link>
          <a
            type="button"
            className="py-2 px-4 my-6 bg-gold hover:bg-gold-700 focus:ring-gold-500 focus:ring-offset-gold-200 text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
            href={linkToForm}
            target="_blank"
            rel="noreferrer"
          >
            Schrijf je in!
          </a>
          <p className="text-xl font-normal text-gray-500 dark:text-gray-400 py-2">
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className={classesForHeaderCell}>Wat</td>
                  <td>
                    Een lichtvoetige familiequiz voor iedereen die al eens van
                    quizzen houdt
                  </td>
                </tr>
                <tr>
                  <td className={classesForHeaderCell}>Wanneer</td>
                  <td>
                    <p>Zaterdag 16 september 2023</p>
                    <p>Deuren openen 18u45, eerste vraag om 19u30</p>
                  </td>
                </tr>
                <tr>
                  <td className={classesForHeaderCell}>Waar</td>
                  <td>
                    <p>Feestzaal Mollenhof</p>
                    <p>Lichtaartsesteenweg 1</p>
                    <p>2275 Poederlee</p>
                  </td>
                </tr>
                <tr>
                  <td className={classesForHeaderCell}>Ploegen</td>
                  <td>
                    Maximum 5 personen per ploeg. Er is plaats voor 50 ploegen
                  </td>
                </tr>
                <tr>
                  <td className={classesForHeaderCell}>Inschrijvingsgeld</td>
                  <td>€25 per ploeg</td>
                </tr>
                <tr>
                  <td className={classesForHeaderCell}>Inschrijven</td>
                  <td>
                    <p>
                      <Link
                        target="_blank"
                        href={linkToForm}
                        rel="noreferrer"
                        class="w7-5%"
                      >
                        Vul het inschrijfformulier in!
                      </Link>
                    </p>
                    <p>
                      Je inschrijving is pas geldig na ontvangst van het
                      inschrijvingsgeld op rekeningnummer: BE93 9734 1677 3567
                      met de vermelding: "ploegnaam + TBV Quiz"
                    </p>
                    <p>
                      Indien u zich wenst uit te schrijven, stuurt u een mail
                      naar theaterbankvooruit@gmail.com.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </p>
        </TextContainer>
      </PageContent>
    </BackgroundImage>
  );
}
