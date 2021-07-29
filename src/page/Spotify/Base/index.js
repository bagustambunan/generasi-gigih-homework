import React, { useState, useEffect } from 'react';
import Menu from '../../../components/Menu';
import Home from './Home';
import PlaylistPage from '../Playlist';
import SearchPage from '../Search';
import LoginPage from './LoginPage';
import NewForm from '../Playlist/NewForm';
import Player from '../../../components/Player';
import { getHashParams } from '../../../utils';
import { root_url } from '../../../values';

import './Styles.css'

import { useSelector, useDispatch } from 'react-redux';
import { setToken, removeToken, selectToken } from '../../../redux/tokenSlice';
import { setUser, selectUser } from '../../../redux/userSlice';

const axios = require('axios');

function SpotifyPage(props) {

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const [view, set_view] = useState(props.page);

  const route_list = [
    {
      url: "home",
      page: <Home/>
    },
    {
      url: "search",
      page: <SearchPage/>
    },
    {
      url: "playlists",
      page: <PlaylistPage/>
    },
    {
      url: "new_playlist",
      page: <NewForm/>
    },
  ];

  function Page() {
    const selected_page = route_list.filter(item => item.url === view);
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
          window.location = root_url;
        }
    }
    getUserInfo();
  }, []);

  return (
    <div className="bg-me_main min-h-screen body-main">

      {(!token) && (
        <LoginPage/>
      )}

      {(token && user) && (
        <>
          <div className="w-56 fixed m-5 h-full">
            <Menu/>
          </div>

          <div className="w-full flex flex-wrap">

            <div className="w-56">
              {/* <Menu/> */}
            </div>

            <div className="p-5 w-10/12 border-red-600 flex flex-wrap">
              <div className="ml-5 w-full"><Page/></div>
            </div>

          </div>

          <div className="fixed bottom-0 left-0 w-full">
            <Player/>
          </div>
        </>
      )}

    </div>
  );
}

export default SpotifyPage;