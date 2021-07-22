import React, { useState, useEffect } from 'react';
import Track from '../../../components/Track';

import {
  useAuthContext,
  addAuth,
  clearAuth
} from '../../../contexts/AuthContext';

const axios = require('axios');

function Search() {

  const { auth_store, dispatch_auth } = useAuthContext();
  const [query, set_query] = useState('Queen');
  const [tracks, set_tracks] = useState([]);

  async function clickSearch() {
    try {
      set_tracks([]);
      let url = 'https://api.spotify.com/v1/search?q='+query+'&type=track,artist';
      await axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + auth_store
        },
      })
      .then(res => {
        set_tracks(res.data.tracks.items);
      })
    } catch (err) {
      console.error(err);
    } finally {
      console.log(tracks);
    }
  }

  useEffect(() => {
    console.log("Auth di halaman search: "+auth_store);
  });

  return (
    <>

      {(!auth_store) && (
        <a className="text-white text-4xl">Belum login</a>
      )}

      {(auth_store) && (
        <div className="w-full">
            <input
            onChange={(event) => {set_query(event.target.value)}}
            value={query} type="text"
            className="bg-white px-2 py-1 rounded-bl rounded-tl w-64 mb-3"
            placeholder="Type anything..."></input>
            <button onClick={() => {clickSearch()}} className="bg-sptf hover:bg-gray-600 px-2 py-1 mb-3 text-white rounded-br rounded-tr"><i className="fa fa-search"></i></button>
        </div>
      )}

      <div className="mt-5 flex flex-wrap">
        {tracks.map((item) => (
            <Track
              key={item.album.id}
              image_url={item.album.images[0].url}
              track_title={item.name}
              artist_name={item.album.artists[0].name}
              album_name={item.album.name}
              data={item}
            />
          )
        )}
      </div>

    </>
  );
}

export default Search;