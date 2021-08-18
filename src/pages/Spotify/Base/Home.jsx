import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../../redux/tokenSlice';
import { setUser, selectUser } from '../../../redux/userSlice';
import '../../../styles/base-page.css';

const axios = require('axios');

function Home() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  async function getUserInfo() {
    try {
      const url = 'https://api.spotify.com/v1/me';
      await axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((res) => {
          dispatch(setUser(res.data));
        });
    } catch (err) {
      console.error(err);
    }
  }

  function LogoutButton() {
    return (
      <div className="btn-logout">
        <a href="/logout">LOGOUT</a>
      </div>
    );
  }

  function UserCard() {
    return (
      <div className="home-page">
        <div className="user-card">
          <div className="image">
            <img
              src={user.images[0].url}
              title={user.display_name}
              alt={user.display_name}
            />
          </div>
          <div className="info">
            <span>
              {user.display_name}
            </span>
            <LogoutButton />
          </div>
        </div>
      </div>
    );
  }

  function changeTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  function ToggleMode(props){
    return (
      <div className="mode-wrapper">
        <div
          className="btn-mode"
          style={ { backgroundColor: props.theme_color } }
          onClick={() => {
            changeTheme(props.theme_code);
          }}
        >
        </div>
      </div>
    )
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      {user && <UserCard />}
      <div className="home-action">
        <ToggleMode theme_code="theme-light-green" theme_color="#1ED760" />
        <ToggleMode theme_code="theme-dark-yellow" theme_color="#FFED4C" />
        <ToggleMode theme_code="theme-light-pink" theme_color="#FA6791" />
        <ToggleMode theme_code="theme-dark-blue" theme_color="#4AA8E6" />
      </div>
      <div className="home-me">
        <span>
          Made with ❤️ by
          <a href="https://www.linkedin.com/in/bagustambunan/">
            Bagus Tambunan
          </a>
        </span>
      </div>
    </>
  );
}

export default Home;
