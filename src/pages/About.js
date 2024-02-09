import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Service from "../components/Service";
import Spinner from "../components/Spinner";

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleToggler = (event) => {
    setToggler(!toggler);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    axios.get("/api/services").then((response) => {
      setServices(response.data);
    });
    axios.get("/api/reviews").then((response) => {
      setReviews(response.data);
    });
  }, []);

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
        <div className="mi-service-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="Services" />
            <div className="mi-service-wrapper">
              <div className="row mt-30-reverse">
                {services.map((service) => (
                  <div
                    className="col-lg-4 col-md-6 col-12 mt-30"
                    key={service.title}
                  >
                    <Service content={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default About;
