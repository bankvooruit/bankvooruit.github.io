import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { flatten, isArray, map } from "lodash";

import { home, links } from "./gegevens/menubalk";

import TopMenu from "./layout/TopMenu";

function App() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <Router>
      <div className="h-100">
        <div className="grid grid-flow-row auto-rows-max z-20">
          <TopMenu />
          <Routes>
            {links &&
              flatten(
                map(links, (link) =>
                  isArray(link.link) ? (
                    map(link.link, (link) => (
                      <Route
                        path={link.link}
                        element={link.component}
                        key={link.link}
                      />
                    ))
                  ) : (
                    <Route
                      path={link.link}
                      element={link.component}
                      key={link.link}
                    />
                  )
                )
              )}
            <Route path={"/"} element={home.component} key={home.link} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
