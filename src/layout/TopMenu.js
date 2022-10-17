import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isArray, map } from "lodash";

import { logo, links, icon_links } from "../gegevens/menubalk";

import DropDownMenu from "./DropDownMenu";

export default function TopMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="z-20 bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-8 py-2">
          <div className="flex items-center justify-evenly flex-wrap flex-col md:flex-row min-h-16 gap-1">
            <div className=" flex items-center">
              {/* Logo */}
              <a className="flex-shrink-0" href="/">
                <img
                  className="h-8 dark:invert"
                  src={`/afbeeldingen/menubalk/${logo}`}
                  alt="Logo van Theater Bank Vooruit"
                />
              </a>

              {/* Text links */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  {links &&
                    map(links, (link) =>
                      isArray(link.link) ? (
                        <DropDownMenu
                          label={link.label}
                          items={link.link}
                          key={link.label}
                        />
                      ) : (
                        <Link
                          className="text-gray-700 text-center dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-smfont-medium"
                          to={link.link}
                          key={link.link}
                        >
                          {link.label}
                        </Link>
                      )
                    )}
                </div>
              </div>
            </div>

            {/* Icon links (right of page) */}
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6">
                {icon_links &&
                  map(icon_links, (link) => (
                    <a
                      key={link.label}
                      href={link.link}
                      className="p-1 rounded-full text-gray-400 focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">{link.label}</span>
                      {link.icon_image && (
                        <img
                          className="h-8 dark:invert"
                          src={`/afbeeldingen/menubalk/${link.icon_image}`}
                          alt={link.label}
                        />
                      )}
                      {link.icon_svg && (
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d={link.icon_svg}></path>
                        </svg>
                      )}
                    </a>
                  ))}
              </div>
            </div>
            {/* Hamburger icon */}
            <div className="-mr-2 flex md:hidden">
              <button
                className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menu on small screen */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              {links &&
                map(links, (link) => (
                  <div>
                    {isArray(link.link) ? (
                      <DropDownMenu
                        key={link.label}
                        label={link.label}
                        items={link.link}
                      />
                    ) : (
                      <Link
                        className="text-gray-700 text-center dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-smfont-medium"
                        to={link.link}
                        key={link.link}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
