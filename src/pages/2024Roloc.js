import React from "react";

import * as projectGegevens from "../gegevens/2024-roloc";

import Project from "../components/Project";

export default function Roloc2024() {
  return (
    <Project {...projectGegevens}>
      <img
        src={`/afbeeldingen/${projectGegevens.voorstelling_id}/promomateriaal/Omslagfoto Legende van Roloc.png`}
        alt="Oplichtend boek op een donkere zolderkamer"
        className="pt-4 max-h-96 max-w-96 mx-auto"
      />
    </Project>
  );
}
