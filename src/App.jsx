import { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SearchParams from "./components/SearchParams";
import Details from "./components/Details";

import ThemeContext from "./context/ThemeContext";

const App = () => {
  const theme = useState("darkBlue");
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Router>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </>
  );
};

render(<App />, document.getElementById("root"));
