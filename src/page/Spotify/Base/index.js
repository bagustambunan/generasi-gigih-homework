import React, { useState, useEffect } from 'react';
import Menu from '../../../components/Menu';
import Home from './Home';
import PlaylistPage from '../Playlist';
import SearchPage from '../Search';
import LoginPage from './LoginPage';
import NewForm from '../Playlist/NewForm';
import { getHashParams } from '../../../utils';
import { root_url } from '../../../values';

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
    <div className="bg-sptf_dark_main min-h-screen">

      {(!token) && (
        <LoginPage/>
      )}

      {(token && user) && (
        <>
          <div className="p-5 w-56 fixed object-left object-top h-screen bg-sptf_black">
            <Menu/>
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

    </div>
  );
}

export default SpotifyPage;