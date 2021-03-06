import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../redux/tokenSlice';
import { setUser, selectUser } from '../../redux/userSlice';
import ThemeControl from '../../components/Home/ThemeControl';
import './style.css';

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

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      {user && <UserCard />}
      <div className="home-action">
        <ThemeControl />
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
