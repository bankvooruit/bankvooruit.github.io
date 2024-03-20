import React, { useEffect } from "react";
import { map, isArray, isString } from "lodash";

import { setPageMetaData } from "../setPageMetaData.js";

import { background, backgroundColor } from "../gegevens/menubalk";

import BackgroundImage from "../layout/BackgroundImage";
import PageContent from "../layout/PageContent";
import TextContainer from "../components/TextContainer";
import Link from "../components/Link";

export default function Quiz({ quiz_id, quiz, sponsors }) {
  useEffect(() => {
    setPageMetaData(
      `Quiz ${quiz.jaartal}`,
      quiz.terugblik || quiz.korte_inhoud
    );
  }, [quiz.jaartal, quiz.terugblik, quiz.korte_inhoud]);

  function renderEigenschap(value) {
    return isString(value) ? (
      value
    ) : (
      <Link target="_blank" href={value.link} rel="noreferrer" class="w7-5%">
        {value.label}
      </Link>
    );
  }

  return (
    <BackgroundImage
      image={`/afbeeldingen/${background}`}
      color={backgroundColor}
    >
      <PageContent>
        <TextContainer>
          <p className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Quiz {quiz.jaartal}
          </p>
          {quiz.link_inschrijvingsformulier && (
            <>
              {quiz.flyer && (
                <Link
                  target="_blank"
                  href={quiz.link_inschrijvingsformulier}
                  rel="noreferrer"
                >
                  <img
                    className="mx-auto w-[250px] md:w-[350px]"
                    src={`/afbeeldingen/${quiz_id}/${quiz.flyer}`}
                    alt="Flyer quiz Theater Bank Vooruit"
                  />
                </Link>
              )}
              <a
                type="button"
                className="text-xl py-2 px-4 my-6 bg-gold hover:bg-gold-700 focus:ring-gold-500 focus:ring-offset-gold-200 text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                href={quiz.link_inschrijvingsformulier}
                target="_blank"
                rel="noreferrer"
              >
                Schrijf je in!
              </a>
              {quiz.eigenschappen && (
                <p className="text-m font-normal text-gray-500 dark:text-gray-400 py-2">
                  <table className="table-auto">
                    <tbody>
                      {map(quiz.eigenschappen, (eigenschap) => (
                        <tr>
                          <td className="pr-4 text-right font-semibold align-top">
                            {eigenschap.label}
                          </td>
                          <td>
                            {isArray(eigenschap.value)
                              ? map(eigenschap.value, (value) => (
                                  <p>{renderEigenschap(value)}</p>
                                ))
                              : renderEigenschap(eigenschap.value)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </p>
              )}
            </>
          )}
          {quiz.terugblik && (
            <p className="text-center text-xl font-normal text-gray-500 dark:text-gray-200 mb-8">
              {quiz.terugblik}
            </p>
          )}
          {sponsors &&
            map(sponsors, (sponsor) => (
              <div className="mt-16 container mx-auto" key={sponsor.label}>
                <p className="text-center text-xl font-normal text-gray-500 dark:text-gray-200 mb-8">
                  {sponsor.met_dank}: {sponsor.label}
                </p>
                <Link
                  target="_blank"
                  href={sponsor.website}
                  title={`Onze sponsor: ${sponsor.label}`}
                  rel="noreferrer"
                >
                  <img
                    src={`/afbeeldingen/${quiz_id}/sponsors/${sponsor.logo}`}
                    alt={`Logo van ${sponsor.label}`}
                    className="mx-auto"
                  />
                </Link>
              </div>
            ))}
        </TextContainer>
      </PageContent>
    </BackgroundImage>
  );
}
