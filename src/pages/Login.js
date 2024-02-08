import { Suspense, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import Sectiontitle from "../components/Sectiontitle";

function Login() {
  useEffect(() => {

    const token = localStorage.getItem('token');
    
    if (token) {
      window.location.href = '/dashboard';
    }
  }, []);

  return (
    <Layout>
      <Helmet>
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-about-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="Login" />
            <div className="row align-items-center">
            <div className="col-lg-4">

              </div>
              <div className="col-lg-4">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Login;
