import { useState } from "react";
import Navbar from "./components/Header/Navbar";
import Routes from "./components/Routes";
import Footer from "./components/Footer/Footer";
import Pagination from "./components/Helpers/Pagination";

import React from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkheme={setDarkTheme} />
        <Routes />
        <Pagination />
        <Footer />
      </div>
    </div>
  );
}

export default App;
