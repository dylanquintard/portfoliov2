import { Suspense, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";

const EditWork = () => {
  const { id } = useParams();
  const [work, setWork] = useState({});
  const [notFound, setNotFound] = useState(false);

  const [titre, setTitre] = useState("");
  const [lien, setLien] = useState("");
  const [github, setGithub] = useState("");
  const [annee, setAnnee] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const token = localStorage.getItem('token');

        const response = await axios.get(`https://api.quintarddylan.fr:4000/api/works/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.data) {
          throw new Error('Network response was not ok');
        }

        const workData = response.data;

        setWork(workData);

        // Pré-remplissage des champs du formulaire avec les données récupérées
        setTitre(workData.titre || "");
        setLien(workData.lien || "");
        setGithub(workData.github || "");
        setAnnee(workData.annee || "");
        setType(workData.type || "");
        setDescription(workData.description || "");
        setTags(workData.tags || "");
      } catch (error) {
        console.error('Error loading data:', error);
        setNotFound(true);
      } finally {
      }
    };

    fetchData();
  }, [id]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ici la logique pour envoyer les données mises à jour au backend
    // Utilisez work._id pour identifier le travail à mettre à jour

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
    formData.append("work", JSON.stringify(travailObject));

    const token = localStorage.getItem('token');

    axios.put(`https://api.quintarddylan.fr:4000/api/works/${work._id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert("Le travail a été mis à jour avec succès !");
          window.location.href = '/dashboard';
        } else {
          const error = response.data.error;
          alert(`Erreur : ${error}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (notFound) {
    return <div>Travail non trouvé</div>;
  }

  return (
    <Layout>
      <Helmet>
        <title>Modification d'un projet - Quintard Dylan Portfolio professionnel</title>
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Modifier un projet" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mi-contact-formwrapper">
                  <form
                    className="mi-form mi-contact-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="mi-form-field">
                      <label htmlFor="title">
                        Nom du projet*
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
                        style={{ padding: '6px' }}
                    />
                    </div>
                    <div className="mi-form-field">
                      <button className="mi-button" type="submit">
                        Modifier le projet
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default EditWork;