import React from "react";
import { map } from "lodash";

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
                  alt={promo.beeldOmschrijving}
                  className="pt-4 max-h-96 max-w-96 mx-auto"
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
          {voorstellingen && (
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
          )}
        </div>
      </PageContent>
    </BackgroundImage>
  );
}
