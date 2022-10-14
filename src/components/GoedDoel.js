import React from "react";

import Link from "../components/Link";

export default function GoedDoel({ goedDoel, voorstellingId }) {
  return (
    <div key={goedDoel.naam}>
      <p className="text-xl text-gray-800 dark:text-gray-200 font-light">
        {goedDoel.naam}
      </p>

      {goedDoel.omschrijving && (
        <p className="text-md text-gray-500 dark:text-gray-400 py-2 font-light">
          {goedDoel.omschrijving}
        </p>
      )}

      {goedDoel.website && <Link href={goedDoel.website}>Meer weten</Link>}

      {goedDoel.foto && (
        <div className="mt-8 mb-4 px-16">
          <Link href={goedDoel.website}>
            <img
              src={`%PUBLIC_URL%/afbeeldingen/${voorstellingId}/goede-doelen/${goedDoel.foto}`}
              title={`Logo van ${goedDoel.naam}`}
              alt={`Logo van ${goedDoel.naam}`}
              className="max-w-full max-h-32 mx-auto"
            />
          </Link>
        </div>
      )}
    </div>
  );
}
