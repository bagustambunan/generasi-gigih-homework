import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../../redux/tokenSlice';
import { setUser, selectUser } from '../../../redux/userSlice';
import { toggleModeType } from '../../../types';
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
        .then((res:any) => {
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

  function changeTheme(themeName:string) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  function ToggleMode({ themeCode, themeColor } : toggleModeType) {
    return (
      <div className="mode-wrapper">
        <div
          className="btn-mode"
          style={{ backgroundColor: themeColor }}
          onClick={() => {
            changeTheme(themeCode);
          }}
        />
      </div>
    );
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      {user && <UserCard />}
      <div className="home-action">
        <ToggleMode themeCode="theme-light-green" themeColor="#1ED760" />
        <ToggleMode themeCode="theme-dark-yellow" themeColor="#FFED4C" />
        <ToggleMode themeCode="theme-light-pink" themeColor="#FA6791" />
        <ToggleMode themeCode="theme-dark-blue" themeColor="#4AA8E6" />
      </div>
      <div className="home-me">
        <span>
          Made with ❤️ by&nbsp;
          <a href="https://www.linkedin.com/in/bagustambunan/">
            Bagus Tambunan
          </a>
        </span>
      </div>
    </>
  );
}

export default Home;
