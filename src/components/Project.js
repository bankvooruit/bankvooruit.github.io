import React from "react";
import { map } from "lodash";

import BackgroundImage from "../layout/BackgroundImage";
import PageContent from "../layout/PageContent";
import Grid from "../layout/Grid";
import ImageCarousel from "../components/ImageCarousel";
import ProjectIntro from "../components/ProjectIntro";
import Voorstelling from "../components/Voorstelling";

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
      image={`/afbeeldingen/${voorstelling_id}/${background}`}
      color={backgroundColor}
    >
      <PageContent>
        <div>
          {children}
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
                />
              ))}
            </Grid>
          )}
        </div>
      </PageContent>
    </BackgroundImage>
  );
}
