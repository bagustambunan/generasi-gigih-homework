import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../../redux/tokenSlice";
import Menu from "../../../components/Menu";
import Home from "./Home";
import PlaylistPage from "../Playlist";
import SearchPage from "../Search";
import NewForm from "../Playlist/NewForm";
import { rootUrl } from "../../../values";

const axios = require("axios");

function SpotifyPage(props) {

  const token = useSelector(selectToken);
  const [view, setView] = useState(props.page);
  const [theme, set_theme] = useState(localStorage.getItem('theme'));

  const route_list = [
    {
      url: "home",
      page: <Home />,
    },
    {
      url: "search",
      page: <SearchPage />,
    },
    {
      url: "playlists",
      page: <PlaylistPage />,
    },
    {
      url: "new_playlist",
      page: <NewForm />,
    },
  ];

  function Page() {
    const selected_page = route_list.filter((item) => item.url === view);
    return selected_page[0].page;
  }

  async function checkToken(){
    try {
      let url = "https://api.spotify.com/v1/me";
      await axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
    } catch (err) {
      window.location = rootUrl+"/logout";
    }
  }

  useEffect(() => {
    checkToken();
    if(theme){
      document.documentElement.className = theme;
    }
    else{
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

export default SpotifyPage;
