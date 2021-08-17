import { useState, useEffect } from "react";
import { client_id, scope, redirect_uri, public_url } from "../../../values";

import "../../../styles/base-page.css";
import "../../../styles/themes/theme.css";

function LoginPage() {

  const [theme, set_theme] = useState(localStorage.getItem('theme'));

  function LoginButton() {
    let spotify_url = "https://accounts.spotify.com/authorize";
    spotify_url += "?response_type=token";
    spotify_url += "&client_id=" + encodeURIComponent(client_id);
    spotify_url += "&scope=" + encodeURIComponent(scope);
    spotify_url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

    return (
      <div className="btn-login">
        <a href={spotify_url}>
          LOG IN WITH SPOTIFY
        </a>
      </div>
    );
  }

  useEffect(() => {
    if(theme){
      document.documentElement.className = theme;
    }
    else{
      localStorage.setItem('theme', 'theme-light');
      document.documentElement.className = 'theme-light';
    }
  }, []);

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="image">
          <img
            src={public_url + "/img/logo.png"}
            alt="Icon"
          />
        </div>
        
        <LoginButton />
        
      </div>
    </div>
  );
}

export default LoginPage;
