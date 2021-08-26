import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/tokenSlice';
import Menu from '../../components/Home/Menu';
import Home from '../Home/Home';
import PlaylistPage from '../Playlist';
import SearchPage from '../Search';
import NewForm from '../Playlist/NewForm';
import { spotifyPageType } from '../../types';
import { rootUrl } from '../../libs/values';

const axios = require('axios');

function Layout({ page } : spotifyPageType) {
  const token = useSelector(selectToken);
  const [view, setView] = useState(page);
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const routeList = [
    {
      url: 'home',
      page: <Home />,
    },
    {
      url: 'search',
      page: <SearchPage />,
    },
    {
      url: 'playlists',
      page: <PlaylistPage />,
    },
    {
      url: 'playlistall',
      page: <PlaylistPage />,
    },
    {
      url: 'new_playlist',
      page: <NewForm setView={setView} />,
    },
  ];

  function Page() {
    const selectedPage = routeList.filter((item) => item.url === view);
    return selectedPage[0].page;
  }

  async function checkToken() {
    try {
      const url = 'https://api.spotify.com/v1/me';
      await axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
    } catch (err) {
      window.location.href = rootUrl + '/logout';
    }
  }

  useEffect(() => {
    checkToken();
    if (theme) {
      document.documentElement.className = theme;
    } else {
      setTheme('theme-light-pink');
      localStorage.setItem('theme', 'theme-light-pink');
      document.documentElement.className = 'theme-light-pink';
    }
  }, []);

  return (
    <div className="main">

      <div className="menu-section">
        <Menu
          view={view}
          setView={setView}
        />
      </div>

      <div className="page-section">
        <div className="page-wrapper">
          <Page />
        </div>
      </div>
    </div>
  );
}

export default Layout;
