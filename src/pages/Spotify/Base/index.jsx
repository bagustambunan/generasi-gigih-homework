import React, { useState } from "react";
import Menu from "../../../components/Menu";
import Home from "./Home";
import PlaylistPage from "../Playlist";
import SearchPage from "../Search";
import NewForm from "../Playlist/NewForm";
import Player from "../../../components/Player";

function SpotifyPage(props) {

  const [view, set_view] = useState(props.page);

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

  return (
    <div className="main">

      <div className="menu-section">
        <div className="menu-wrapper">
          <Menu
            view={view}
            set_view={set_view}
          />
        </div>
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
