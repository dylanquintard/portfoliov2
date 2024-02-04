import { Helmet } from "react-helmet";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

function Notfound() {
  return (
    <Layout>
      <Helmet>
        <title>404 - Erreur</title>
        <meta
          name="description"
          content="Portfolio de Dylan Quintard, page non trouvée"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-about-area mi-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="notfound">
                  <div className="notfound-inner text-center">
                    <h1>404</h1>
                    <h3>Whoops!!! La page n'est pas accessible</h3>
                    <Link to="/" className="mi-button">
                      Retour à l'accueil
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Notfound;
