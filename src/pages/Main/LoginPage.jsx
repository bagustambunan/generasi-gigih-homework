import { useState, useEffect } from 'react';
import {
  clientID,
  scope,
  redirectUri,
  publicUrl,
} from '../../../values';
import '../../../styles/base-page.css';
import '../../../styles/themes/theme.css';

function LoginPage() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  function LoginButton() {
    const spotifyUrl = 'https://accounts.spotify.com/authorize'
    + '?response_type=token'
    + '&client_id=' + encodeURIComponent(clientID)
    + '&scope=' + encodeURIComponent(scope)
    + '&redirect_uri=' + encodeURIComponent(redirectUri);

    return (
      <div className="btn-login">
        <a href={spotifyUrl}>
          <i className="fab fa-spotify" />
          LOG IN WITH SPOTIFY
        </a>
      </div>
    );
  }

  useEffect(() => {
    if (theme) {
      document.documentElement.className = theme;
    } else {
      setTheme('theme-light-pink');
      localStorage.setItem('theme', 'theme-light-pink');
      document.documentElement.className = 'theme-light-pink';
    }
  }, []);

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="image">
          <img
            src={publicUrl + '/img/logo.png'}
            alt="Icon"
          />
        </div>
        <LoginButton />
      </div>
    </div>
  );
}

export default LoginPage;
