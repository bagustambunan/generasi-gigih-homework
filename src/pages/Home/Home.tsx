import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../redux/tokenSlice';
import { setUser, selectUser } from '../../redux/userSlice';
import { toggleModeType } from '../../libs/types';
import './style.css';

const axios = require('axios');

function Home() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const themeList = [
    {
      themeName: 'theme-light-green',
      themeColor: '#1ED760',
    },
    {
      themeName: 'theme-dark-yellow',
      themeColor: '#FFED4C',
    },
    {
      themeName: 'theme-light-pink',
      themeColor: '#FA6791',
    },
    {
      themeName: 'theme-dark-blue',
      themeColor: '#4AA8E6',
    },
    {
      themeName: 'theme-dark-purple',
      themeColor: '#C46EF5',
    },
  ];

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

  function ToggleMode({ themeName, themeColor } : toggleModeType) {
    return (
      <div className="mode-wrapper">
        <div
          className="btn-mode"
          style={{ backgroundColor: themeColor }}
          onClick={() => {
            changeTheme(themeName);
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
        { themeList.map((item) => (
          <ToggleMode themeName={item.themeName} themeColor={item.themeColor} />
        ))}
      </div>
      <div className="home-me">
        <span>
          Made with ❤️ by&nbsp;
          <a href="https://www.linkedin.com/in/bagustambunan/">
            Muhammad Bagus Syahputra Tambunan
          </a>
        </span>
      </div>
    </>
  );
}

export default Home;
