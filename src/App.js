import React, { useState } from "react";
import * as Icon from "react-feather";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Portfolios from "./pages/Portfolios";
import Resumes from "./pages/Resumes";
import Item from "./pages/Item";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import EditWork from "./pages/EditWork";

function App() {
  const [lightMode, setLightMode] = useState(false); // Made it true if you want to load your site light mode primary

  lightMode
    ? document.body.classList.add("light")
    : document.body.classList.remove("light");

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true);
      document.body.classList.add("light");
    } else {
      setLightMode(false);
      document.body.classList.remove("light");
    }
  };

  return (
    <BrowserRouter>
      <div className="light-mode">
        <span className="icon">
          <Icon.Sun />
        </span>
        <button
          className={
            lightMode ? "light-mode-switch active" : "light-mode-switch"
          }
          onClick={() => handleMode()}
        ></button>
      </div>
      <Routes>
        <Route path="/" index element={<Home lightMode={lightMode} />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resumes />} />
        <Route path="portfolios" element={<Portfolios />} />
        <Route path='/portfolios/:id' element={<Item />} component={Item} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editwork/:id" element={<EditWork />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
