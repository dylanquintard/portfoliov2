import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";

function About() {

  return (
    <Layout>
      <Helmet>
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-about-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="À propos" />
            <div className="row align-items-center">
              <div className="col-lg-4">
                <img src="/images/about-me.webp" alt="aboutImg"></img>
              </div>
              <div className="col-lg-1">
              </div>
              <div className="col-lg-6">
                <div className="mi-about-content">
                  <h3>
                    Je suis <span className="color-theme">Quintard Dylan</span>
                  </h3>
                  <p>
                  Je suis développeur web et mobile fullstack JS, spécialisé dans React, Node.js (Express), et MongoDB. Mon expertise couvre la conception et le déploiement d'applications modernes, mettant l'accent sur des expériences utilisateur fluides et dynamiques. Situé proche de Toulouse, j'aime travailler sur de nouveaux projets et apprendre de nouvelles choses.  Ici vous trouverez toutes les informations concernant mes projets et mes compétences.
                  </p>
                  <ul>
                      <li>
                        <b>Age</b> 25 ans
                      </li>
                      <li>
                        <b>Téléphone</b> +33 7 49 34 70 12
                      </li>
                      <li>
                        <b>Nationalité</b> Française
                      </li>
                      <li>
                        <b>Langages</b> Français natif, Anglais moyen
                      </li>
                      <li>
                        <b>Email</b> contact@quintarddylan.fr
                      </li>
                      <li>
                        <b>Ville</b> Castres, 81100
                      </li>
                  </ul>
                  <a href="/files/CV.pdf" target="blank" className="mi-button">
                    Télécharger mon CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default About;
