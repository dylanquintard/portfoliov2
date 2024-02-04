import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";

const AddWork = () => {
    const [titre, setTitre] = useState("");
    const [lien, setLien] = useState("");
    const [github, setGithub] = useState("");
    const [annee, setAnnee] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [image, setImage] = useState(null);

  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setImage(selectedFile);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      if (titre === "" || lien === "" || github === "" || annee === "" || type === "" || description === "" || tags === "") {
        alert("Veuillez remplir tous les champs requis.");
        return;
      }
  
      const travailObject = {
        titre,
        lien,
        github,
        annee,
        type,
        description,
        tags,
      };
  
const formData = new FormData();
formData.append("image", image);
formData.append("travail", JSON.stringify(travailObject));

axios.post("https://api.quintarddylan.fr:4000/api/works", formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            alert("Le travail a été ajouté avec succès !");
          } else {
            const error = response.data.error;
            alert(`Erreur : ${error}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

  return (
    <Layout>
      <Helmet>
        <title>Contact - Quintard Dylan Portfolio professionnel</title>
        <meta
          name="description"
          content="Page de contact de Dylan Quintard"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Contactez moi" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mi-contact-formwrapper">
                  <h4>Ajouter un travail</h4>
                  <form
                    className="mi-form mi-contact-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="mi-form-field">
                      <label htmlFor="title">
                        Nom du travail*
                      </label>
                    <input
                        type="text"
                        id="titre"
                        name="titre"
                        value={titre}
                         onChange={e => setTitre(e.target.value)}
                        required
                    />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="description">
                        Description*
                      </label>
                      <textarea
                        onChange={e => setDescription(e.target.value)}
                        name="description"
                        id="description"
                        cols="30"
                        rows="6"
                        value={description}
                      ></textarea>
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="type">
                        Type d'application*
                      </label>
                      <input
                         onChange={e => setType(e.target.value)}
                        type="text"
                        name="type"
                        id="type"
                        value={type}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="github">
                        Lien vers github*
                      </label>
                      <input
                         onChange={e => setGithub(e.target.value)}
                        type="text"
                        name="github"
                        id="github"
                        value={github}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="lien">
                        Lien vers le site*
                      </label>
                      <input
                         onChange={e => setLien(e.target.value)}
                        type="text"
                        name="lien"
                        id="lien"
                        value={lien}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="annee">
                        Annee*
                      </label>
                      <input
                         onChange={e => setAnnee(e.target.value)}
                        type="text"
                        name="annee"
                        id="annee"
                        value={annee}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="tags">
                        tags*
                      </label>
                      <input
                         onChange={e => setTags(e.target.value)}
                        type="text"
                        name="tags"
                        id="tags"
                        value={tags}
                      />
                    </div>
                    <div className="mi-form-field">
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    </div>
                    <div className="mi-form-field">
                      <button className="mi-button" type="submit">
                        Ajout du travail
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-contact-info">
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.Phone />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Travaux</h6>
                        <p></p>
                      </div>
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

export default AddWork;
