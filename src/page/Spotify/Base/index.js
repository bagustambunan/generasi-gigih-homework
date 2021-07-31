import React from "react";
import Menu from "../../../components/Menu";
import Home from "./Home";
import PlaylistPage from "../Playlist";
import SearchPage from "../Search";
import NewForm from "../Playlist/NewForm";
import Player from "../../../components/Player";

import "./Styles.css";

function SpotifyPage(props) {
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
    const selected_page = route_list.filter((item) => item.url === props.page);
    return selected_page[0].page;
  }

  return (
    <div className="bg-me_main min-h-screen body-main">
      <div className="w-56 fixed m-5 h-full">
        <Menu />
      </div>

      <div className="w-full flex flex-wrap">
        <div className="w-56">{/* <Menu/> */}</div>

        <div className="p-5 w-10/12 mb-16">
          <div className="ml-5 w-full">
            <Page />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <Player />
      </div>
    </div>
  );
}

export default SpotifyPage;
