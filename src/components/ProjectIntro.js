import React from "react";
import { map } from "lodash";

import TextContainer from "./TextContainer";

export default function ProjectIntro({ verhaal }) {
  return (
    <>
      <TextContainer>
        <p className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-8">
          {verhaal.titel}
        </p>
        <p className="text-center text-xl font-normal text-gray-500 dark:text-gray-400 py-2">
          {verhaal.korte_inhoud}
        </p>
        <p className="text-center text-xl font-normal text-gray-500 dark:text-gray-400 py-2">
          {verhaal.type_voorstelling}
        </p>
        <p className="text-center text-xl font-normal text-gray-500 dark:text-gray-400 py-2">
          {verhaal.terugblik}
        </p>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-8 md:px-32">
          {verhaal.eigenschappen &&
            map(verhaal.eigenschappen, (eigenschap) => (
              <li key={eigenschap.label}>
                <p className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  {eigenschap.label}
                </p>
                <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-200">
                  {eigenschap.value}
                </p>
              </li>
            ))}
        </ul>
      </TextContainer>
    </>
  );
}
