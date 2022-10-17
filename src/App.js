import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
  const routes = flatten(
    map(links, (link) =>
      isArray(link.link) ? map(link.link, (link) => link) : link
    )
  );
  routes.push({ link: "/", component: home.component });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="h-100">
        <div className="grid grid-flow-row auto-rows-max z-20">
          <TopMenu />
          <Routes>
            {map(routes, (route) => (
              <Route
                path={route.link}
                element={route.component}
                key={route.link}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
