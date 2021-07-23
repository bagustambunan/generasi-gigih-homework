import React, { useState } from 'react';
import TrackHeader from '../../../components/TrackHeader';

const axios = require('axios');

function Search(props) {

  const [query, set_query] = useState('Queen');
  const [tracks, set_tracks] = useState([]);

  async function clickSearch() {
    try {
      set_tracks([]);
      let url = 'https://api.spotify.com/v1/search?q='+query+'&type=track,artist';
      await axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + props.auth_store
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

  return (
    <>
      <div className="w-full">
          <input
          onChange={(event) => {set_query(event.target.value)}}
          value={query} type="text"
          className="bg-white px-2 py-1 rounded-bl rounded-tl w-64 mb-3"
          placeholder="Type anything..."></input>
          <button onClick={() => {clickSearch()}} className="bg-sptf hover:bg-gray-600 px-2 py-1 mb-3 text-white rounded-br rounded-tr"><i className="fa fa-search"></i></button>
      </div>

      <TrackHeader tracks={tracks}/>

    </>
  );
}

export default Search;