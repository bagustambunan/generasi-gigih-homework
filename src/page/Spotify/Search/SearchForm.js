import React, { useState, useEffect } from 'react';
import TrackHeader from '../../../components/TrackHeader';

import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../../redux/tokenSlice';

const axios = require('axios');

function SearchForm(props) {

  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const [query, set_query] = useState('Twice');
  const [tracks, set_tracks] = useState([]);

  async function clickSearch() {
    try {
      // set_tracks([]);
      let url = 'https://api.spotify.com/v1/search?q='+query+'&type=track,artist';
      await axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + token
        },
        // params: {
        //   q: query,
        //   type: "tracks,artist"
        // }
      })
      .then(res => {
        set_tracks(res.data.tracks.items);
      })
    } catch (err) {
      console.error(err);
    } finally {
      // console.log(tracks);
    }
  }

  useEffect(() => {
    // clickSearch();
  }, []);

  return (
    <>

      <div className="flex flex-wrap w-10/12 my-10">
        <div className="w-6/12">
          <a className="text-2xl text-white font-bold">Search tracks</a>
        </div>
      </div>

      <div className="w-full">
          <input
          onChange={(event) => {set_query(event.target.value)}}
          value={query} type="text"
          className="bg-white px-2 py-1 rounded-bl rounded-tl w-64 mb-3"
          placeholder="Type anything..."></input>
          <button onClick={() => {clickSearch()}} className="bg-sptf hover:bg-gray-600 px-2 py-1 mb-3 text-white rounded-br rounded-tr"><i className="fa fa-search"></i></button>
      </div>

      <TrackHeader
        tracks={tracks}
        track_id={props.track_id}
        set_track_id={props.set_track_id}
        set_view={props.set_view}
      />

    </>
  );
}

export default SearchForm;