import React, { useState, useEffect } from 'react';
import Menu from '../../../components/Menu';
import Login from './Login';
import Search from '../Search/Search';
import Favorite from '../Favorite/Favorite';
import PlaylistAll from '../Playlist/PlaylistAll';

import {
  useAuthContext
} from '../../../contexts/AuthContext';

function Layout() {

  const [view, set_view] = useState("home");
  const { auth_store, dispatch_auth } = useAuthContext();

  let menu_list = [
    {
    name: "home",
    text: "Home",
    icon: "fa-home",
    page: <Login/>
    },
  ];

  if(auth_store){
    menu_list = [
      {
      name: "home",
      text: "Home",
      icon: "fa-home",
      page: <Login/>
      },
      {
      name: "search",
      text: "Search",
      icon: "fa-search",
      page: <Search
              auth_store={auth_store}
            />
      },
      {
      name: "favorite",
      text: "Favorite",
      icon: "fa-heart",
      page: <Favorite/>
      },
      {
        name: "playlistall",
        text: "Playlists",
        icon: "fa-headphones-alt",
        page: <PlaylistAll
                auth_store={auth_store}
              />
      },
    ];
  }

  function Page() {
    const selected_page = menu_list.filter(item => item.name === view);
    return selected_page[0].page;
  }

  return (
    <>

      <div className="p-5 w-56 fixed object-left object-top h-screen bg-sptf_black">
        <Menu
          auth_store={auth_store}
          view={view}
          set_view={set_view}
          menu_list={menu_list}
        />
      </div>

      <div className="w-full flex flex-wrap">

        <div className="w-56 border border-blue-600 ">
          {/* <Menu/> */}
        </div>

        <div className="p-5 w-10/12 border-red-600">
          <Page/>
        </div>

      </div>

    </>
  );
}

export default Layout;