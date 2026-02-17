import React from "react";
import moment from "moment";
import { isArray, last, map } from "lodash";

import TextContainer from "../components/TextContainer";
import GoedDoel from "../components/GoedDoel";

export default function Voorstelling({
  voorstelling,
  goedeDoelen,
  voorstellingId,
  projectTitel,
  centered = false,
}) {
  const gisteren = moment().subtract(1, "days");
  const dagVanVoorstelling = !isArray(voorstelling.wanneer)
    ? voorstelling.wanneer && moment(voorstelling.wanneer.date)
    : moment(last(voorstelling.wanneer.map((moment) => moment.date).sort()));
  const isVoorbij = dagVanVoorstelling && dagVanVoorstelling.isBefore(gisteren);

  function reservatieKnop() {
    if (isVoorbij || voorstelling.verzamelde_centjes) {
      if (!voorstelling.verzamelde_centjes) {
        return (
          <div
            type="button"
            className="py-2 px-4 my-6 border border-gold hover:border-gold-700 text-gray-800 dark:text-gold w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
          >
            Helaas al voorbij
          </div>
        );
      } else {
        return;
      }
    } else if (voorstelling.uitverkocht) {
      return (
        <div
          type="button"
          className="py-2 px-4 my-6 border border-gold hover:border-gold-700 text-gray-800 dark:text-gold w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
        >
          Uitverkocht
        </div>
      );
    } else {
      if (voorstelling.reservatie_link) {
        return (
          <a
            type="button"
            className="py-2 px-4 my-6 bg-gold hover:bg-gold-700 focus:ring-gold-500 focus:ring-offset-gold-200 text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
            href={voorstelling.reservatie_link}
            target="_blank"
            rel="noreferrer"
          >
            Reserveer
          </a>
        );
      } else if (voorstelling.reservatie_email) {
        const mailto = `mailto:${voorstelling.reservatie_email}?subject=Reservatie voorstelling ${projectTitel}&body=Beste,%0D%0A%0D%0AGraag reserveren we de volgende tickets voor de voorstelling "${projectTitel}" in ${voorstelling.locatie} op ${voorstelling.wanneer.dag}:%0D%0A_____ volwassenen en _____ kinderen (-12j) op naam van ______________________.%0D%0A%0D%0AMet vriendelijke groet`;

        return (
          <div className="py-2 px-4 my-6 bg-gold hover:bg-gold-700 focus:ring-gold-500 focus:ring-offset-gold-200 text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
            Reserveer door te mailen naar{" "}
            <a href={mailto}>{voorstelling.reservatie_email}</a>
          </div>
        );
      } else {
        return (
          <div
            type="button"
            className="py-2 px-4 my-6 border border-gold hover:border-gold-700 text-gray-800 dark:text-gold w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
          >
            Reserveren kan binnenkort
          </div>
        );
      }
    }
  }

  const centerClass = centered ? "text-center" : "";

  return (
    <TextContainer key={voorstelling.locatie}>
      <h3
        className={`text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4 ${centerClass}`}
      >
        {voorstelling.locatie}
      </h3>

      {voorstelling.wanneer && (
        <>
          {Array.isArray(voorstelling.wanneer) ? (
            <div
              className={
                centered ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : ""
              }
            >
              {voorstelling.wanneer.map((moment, index) => (
                <p
                  key={index}
                  className={`text-xl text-gray-500 dark:text-gray-200 py-4 font-light ${centerClass}`}
                >
                  {moment?.dag}
                  <br />
                  {moment?.uren && moment.uren?.join(" of ")}
                </p>
              ))}
            </div>
          ) : (
            <p
              className={`text-xl text-gray-500 dark:text-gray-200 py-4 font-light ${centerClass}`}
            >
              {voorstelling.wanneer.dag}
              <br />
              {voorstelling.wanneer.uren &&
                voorstelling.wanneer.uren?.join(" of ")}
            </p>
          )}
        </>
      )}

      {voorstelling.waar && (
        <p
          className={`text-md text-gray-500 dark:text-gray-400 mx-auto py-2 font-light ${centerClass}`}
        >
          {voorstelling.waar.gebouw}
          <br />
          {voorstelling.waar.adres}
        </p>
      )}

      {voorstelling.extra && (
        <p
          className={`text-md text-gray-500 dark:text-gray-400 mx-auto py-2 font-light ${centerClass}`}
        >
          {voorstelling.extra}
        </p>
      )}

      <div className={centerClass}>{reservatieKnop()}</div>

      {voorstelling.goede_doelen && (
        <>
          {!voorstelling.verzamelde_centjes && (
            <p
              className={`text-md text-gray-500 dark:text-gray-400 mx-auto pt-2 font-light ${centerClass}`}
            >
              Kom kijken en steun
            </p>
          )}
          {map(voorstelling.goede_doelen, (goed_doel, index) => (
            <div key={index}>
              {voorstelling.verzamelde_centjes && (
                <>
                  <p
                    className={`text-md text-gray-500 dark:text-gray-400 mx-auto py-2 font-light ${centerClass}`}
                  >
                    schonk
                  </p>
                  <p
                    className={`text-xl text-gray-500 dark:text-gray-200 py-4 font-light ${centerClass}`}
                  >
                    {voorstelling.verzamelde_centjes[index]}
                  </p>
                  <p
                    className={`text-md text-gray-500 dark:text-gray-400 mx-auto py-2 mb-1 font-light ${centerClass}`}
                  >
                    aan
                  </p>
                </>
              )}
              <GoedDoel
                goedDoel={goedeDoelen[goed_doel]}
                voorstellingId={voorstellingId}
              />
            </div>
          ))}
        </>
      )}
    </TextContainer>
  );
}
