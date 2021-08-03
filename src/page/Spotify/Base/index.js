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
      <div className="menu-wrapper">
        <Menu
          view={view}
          set_view={set_view}
        />
      </div>

      <div className="page">
        <div className="menu-skip">{/* <Menu/> */}</div>

        <div className="page-wrap-1">
          <div className="page-wrap-2">
            <Page />
          </div>
        </div>
      </div>

      <div className="player-wrapper">
        <Player />
      </div>
    </div>
  );
}

export default SpotifyPage;
