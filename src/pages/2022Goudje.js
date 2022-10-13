import React from "react";

import * as projectGegevens from "../gegevens/2022-goudje";

import Project from "../components/Project";

export default function Goudje2022() {
  return (
    <Project {...projectGegevens}>
      <img
        src={`/afbeeldingen/${projectGegevens.voorstelling_id}/promomateriaal/Maan-donker-trans-Goudje.png`}
        alt="Maan met naald en draad errond"
        className="pt-4 h-96 w-96 mx-auto"
      />
      <img
        src={`/afbeeldingen/${projectGegevens.voorstelling_id}/promomateriaal/Website_TitelGoudje_Transparant_cropped.png`}
        alt="Goudje en de heldere maan, een sprookje voor jong en oud"
        className="pt-4 w-full w-full mx-auto md:w-3/4 mb-32"
      />
    </Project>
  );
}
