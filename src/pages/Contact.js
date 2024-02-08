import axios from "axios";
import React, { Suspense, useState } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all required fields.");
      return;
    }

    axios.post("https://api.quintarddylan.fr:4000/api/contact", {
      name,
      email,
      subject,
      message,
    })
      .then(response => {
        if (response.status === 201) {
          alert("Votre message a bien été envoyé !");
        } else {
          const error = response.data.error;
          alert(`Error: ${error}`);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Layout>
      <Helmet>
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Contactez moi" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mi-contact-formwrapper">
                  <h4>Entrer en contact</h4>
                  <form
                    action="#"
                    className="mi-form mi-contact-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="mi-form-field">
                      <label htmlFor="name">
                        Entrez votre nom*
                      </label>
                      <input
                        onChange={e => setName(e.target.value)}
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-email">
                        Entrez votre e-mail*
                      </label>
                      <input
                        onChange={e => setEmail(e.target.value)}
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="subject">
                        Entrez le sujet*
                      </label>
                      <input
                        onChange={e => setSubject(e.target.value)}
                        type="text"
                        name="subject"
                        id="subject"
                        value={subject}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="message">
                        Ecrivez moi un message*
                      </label>
                      <textarea
                        onChange={e => setMessage(e.target.value)}
                        name="message"
                        id="message"
                        cols="30"
                        rows="6"
                        value={message}
                      ></textarea>
                    </div>
                    <div className="mi-form-field">
                      <button className="mi-button" type="submit">
                        Envoyez un mail
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
                        <h6>Téléphone</h6>
                          <p>
                            +33 7 49 34 70 12
                          </p>
                      </div>
                    </div>
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.Mail />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>E-mail</h6>
                          <p>
                            <a href={`mailto:quintarddylan@gmail.com`}>quintarddylan@gmail.com</a>
                          </p>
                      </div>
                    </div>
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.MapPin />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Adresse</h6>
                        <p>Castres, 81100</p>
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

export default Contact;
