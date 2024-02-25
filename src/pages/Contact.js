import React, { Suspense, useRef } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";
import swal from 'sweetalert';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ja6rwmx', 'template_i6zr8mo', form.current, {
        publicKey: '2tB8jBcgCv2ooHnK5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          swal("Message envoyé!", "Votre message a été transmis, je vous répondrais dans les plus bref délais.", "success");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
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
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="mi-form-field">
                      <label htmlFor="name">
                        Entrez votre nom*
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        required
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-email">
                        Entrez votre e-mail*
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        required
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="message">
                        Ecrivez moi un message*
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="6"
                        required
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
                            <a href={`mailto:quintarddylan@gmail.com`}>contact@quintarddylan.fr</a>
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
