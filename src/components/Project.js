import React, { useEffect } from "react";
import { keys, map } from "lodash";

import { setPageMetaData } from "../setPageMetaData.js";

import BackgroundImage from "../layout/BackgroundImage";
import PageContent from "../layout/PageContent";
import Grid from "../layout/Grid";
import ImageCarousel from "../components/ImageCarousel";
import ProjectIntro from "../components/ProjectIntro";
import Voorstelling from "../components/Voorstelling";
import {
  background as fallbackBackground,
  backgroundColor as fallbackBackgroundColor,
} from "../gegevens/menubalk.js";

export default function Project({
  voorstelling_id,
  background,
  backgroundColor,
  verhaal,
  voorstellingen,
  goede_doelen,
  children,
}) {
  useEffect(() => {
    setPageMetaData(verhaal.titel, verhaal.terugblik || verhaal.korte_inhoud);
  }, [verhaal.titel, verhaal.terugblik, verhaal.korte_inhoud]);

  return (
    <BackgroundImage
      image={
        background
          ? `/afbeeldingen/${voorstelling_id}/${background}`
          : `/afbeeldingen/${fallbackBackground}`
      }
      color={backgroundColor || fallbackBackgroundColor}
    >
      <PageContent>
        <div>
          {children}
          {verhaal.promo_beelden && (
            <div className="mb-32">
              {verhaal.promo_beelden.map((promo) => (
                <img
                  src={`/afbeeldingen/${voorstelling_id}/promomateriaal/${promo.beeld}`}
                  alt={promo.omschrijving}
                  className="pt-4 max-h-96 max-w-96 mx-auto"
                  key={promo.beeld}
                />
              ))}
            </div>
          )}
          {verhaal.sfeerbeelden && (
            <ImageCarousel
              images={map(verhaal.sfeerbeelden, (beeld) => ({
                foto: `/afbeeldingen/${voorstelling_id}/sfeerbeelden/${beeld}`,
                alt: `Sfeerbeeld ${verhaal.titel}`,
              }))}
            />
          )}
          <ProjectIntro verhaal={verhaal} voorstellingId={voorstelling_id} />
          {voorstellingen &&
            (keys(voorstellingen).length > 1 ? (
              <Grid>
                {map(voorstellingen, (voorstelling) => (
                  <Voorstelling
                    key={voorstelling.locatie}
                    voorstelling={voorstelling}
                    goedeDoelen={goede_doelen}
                    voorstellingId={voorstelling_id}
                    projectTitel={verhaal.titel}
                  />
                ))}
              </Grid>
            ) : (
              // single voorstelling (or an object) — render centered and full-width for better appearance
              <div className="max-w-4xl mx-auto my-8">
                <Voorstelling
                  voorstelling={voorstellingen[keys(voorstellingen)[0]]}
                  goedeDoelen={goede_doelen}
                  voorstellingId={voorstelling_id}
                  projectTitel={verhaal.titel}
                  centered={true}
                />
              </div>
            ))}
        </div>
      </PageContent>
    </BackgroundImage>
  );
}
