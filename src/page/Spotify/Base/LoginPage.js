import React from "react";
import { client_id, scope, redirect_uri } from "../../../values";
import { public_url } from "../../../values";

import "../../../styles/base-page.css";

function LoginPage() {
  function LoginButton() {
    let spotify_url = "https://accounts.spotify.com/authorize";
    spotify_url += "?response_type=token";
    spotify_url += "&client_id=" + encodeURIComponent(client_id);
    spotify_url += "&scope=" + encodeURIComponent(scope);
    spotify_url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

    return (
      <a
        href={spotify_url}
      >
        LOG IN WITH SPOTIFY
      </a>
    );
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="image">
          <img
            src={public_url + "/img/logo.png"}
            alt="Icon"
          />
        </div>
        <div className="btn-login">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
