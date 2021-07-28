import React, { useState, useEffect } from 'react';
import Menu from '../../../components/Menu';
import Home from './Home';
import PlaylistPage from '../Playlist';
import SearchPage from '../Search';
import LoginPage from './LoginPage';
import { getHashParams } from '../../../utils';

import { useSelector, useDispatch } from 'react-redux';
import { setToken, removeToken, selectToken } from '../../../redux/tokenSlice';
import { setUser, selectUser } from '../../../redux/userSlice';

const axios = require('axios');

function SpotifyPage() {

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const [view, set_view] = useState("home");

  const menu_list = [
    {
      name: "home",
      text: "Home",
      icon: "fa-home",
      page: <Home/>
    },
    {
      name: "search",
      text: "Search",
      icon: "fa-search",
      page: <SearchPage/>
    },
    {
      name: "playlists",
      text: "Playlists",
      icon: "fa-headphones-alt",
      page: <PlaylistPage/>
    },
  ];

  function Page() {
    const selected_page = menu_list.filter(item => item.name === view);
    return selected_page[0].page;
  }

  async function getUserInfo() {
    try {
      let url = 'https://api.spotify.com/v1/me';
      await axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + token
        },
      })
      .then(res => {
        dispatch(setUser(res.data));
      })
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if(!token){
        if(getHashParams().access_token){
        let params = getHashParams()
        let access_token = params.access_token;
        dispatch(setToken(access_token));
        }
    }
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [token]);

  return (
    <>

      {(!token) && (
        <LoginPage/>
      )}

      {(token && user) && (
        <>
          <div className="p-5 w-56 fixed object-left object-top h-screen bg-sptf_black">
            <Menu
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
      )}

    </>
  );
}

export default SpotifyPage;