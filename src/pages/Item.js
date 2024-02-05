import axios from "axios";
import { useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ProgressiveImage from "react-progressive-image";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";

function Item(props) {
  const [toggler, setToggler] = useState(false);
  const [item, setItem] = useState("");
  const { id } = useParams();
  const { titre = "", image = "", type = "", description = "", annee = "", tags = "" } = item;

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
    axios.get(`https://api.quintarddylan.fr:4000/api/works/${id}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.error("Error fetching item:", error);
      });
  }, [id]);

  return (
    <Layout>
      <Helmet>
        <title>{titre} - Quintard Dylan Portfolio professionnel</title>
        <meta
          name="description"
          content="Projet réalisé par Dylan Quintard"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-about-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title={item.titre} />
            <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="mi-about-image">
                  <ProgressiveImage
                    src={item.image}
                    placeholder="/images/about-image-placeholder.png"
                  >
                    {(src) => (
                      <img
                        src={src}
                        alt="aboutimage"
                        onClick={() => handleToggler(!toggler)}
                      />
                    )}
                  </ProgressiveImage>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-about-content">
                  <h3>
                    <span className="color-theme">{item.titre}</span>
                  </h3>
                  <p>
                  {item.description}
                  </p>
                  <ul>
                      <li>
                        <b>Type </b> {item.type}
                      </li>
                      <li>
                        <b>Année</b> {item.annee}
                      </li>
                      <li>
                        {item.tags && item.tags.split(' ').map((tag, index) => (
                          <div className="tag" key={index}>#{tag}</div>
                        ))}
                      </li>
                  </ul>
                  {item.lien && (
                    <a href={item.lien} target="blank" className="mi-button">
                      Site web
                    </a>
                  )}

                  {item.github && (
                    <a href={item.github} target="blank" className="mi-button">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

      </Suspense>
    </Layout>
  );
}

export default Item;
