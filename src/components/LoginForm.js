import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      alert("Veuillez remplir tous les champs requis.");
      return;
    }

    try {
      const response = await axios.post("https://api.quintarddylan.fr:4000/api/auth/login", {
        username,
        password,
      });

      if (response.status === 200) {

        // Store the token in local storage
        localStorage.setItem('token', response.token);

        // Redirect to the dashboard
        window.location.href = '/dashboard';
      } else {
        const error = response.data.error;
        alert(`Erreur: ${error}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <h2>Se connecter</h2>
      <div className="mi-form-field">
      <label htmlFor="username">
      Nom d'utilisateur*
      </label>
      <input
        onChange={e => setUsername(e.target.value)}
        type="text"
        name="username"
        id="username"
        value={username}
      />
      </div>
      <div className="mi-form-field">
      <label htmlFor="password">
      Mot de passe*
      </label>
      <input
        onChange={e => setPassword(e.target.value)}
        type="password"
        name="password"
        id="password"
        value={password}
      />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;