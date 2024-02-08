import axios from "axios";
import React, { useEffect, useState } from "react";
import LineIcon from "react-lineicons";
import ProgressiveImage from "react-progressive-image";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [information, setInformation] = useState("");
  const [navigationToggler, setNavigationToggler] = useState(false);
  const [authenticated, setAuthenticated] = useState(false); // Add authentication state

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });

    const token = localStorage.getItem('token');
    setAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    
    setAuthenticated(false);
    history.push('/'); 
  };

  return (
    <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? (
          <LineIcon name="menu" />
        ) : (
          <LineIcon name="close" />
        )}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <ProgressiveImage
              src={information.brandImage}
              placeholder="/images/about-image-placeholder.png"
            >
              {(src) => <img src={src} alt="brandimage" />}
            </ProgressiveImage>
          </Link>
        </div>

        <ul className="mi-header-menu">
          <li>
            <NavLink to="/" end>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>À propos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume">
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolios">
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
          </li>
          {authenticated && (
            <li>
            <NavLink to="/dashboard">
              <span>Dashboard</span>
            </NavLink>
            </li>
          )}
            {authenticated && (
            <li>
              <a onClick={handleLogout}>
                <span>Déconnexion</span>
              </a>
            </li>
          )}
        </ul>
        <p className="mi-header-copyright">
          &copy; {new Date().getFullYear()}{" "}
          <b>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/dashboard"
            >
              Quintard Dylan
            </a>
          </b>
        </p>
      </div>
    </nav>
  );
}

export default Header;
