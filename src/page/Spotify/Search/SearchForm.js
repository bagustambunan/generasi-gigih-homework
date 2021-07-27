import React, { useState, useEffect } from 'react';
import TrackHeader from '../../../components/TrackHeader';

import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../../redux/tokenSlice';
import { updateQuery, selectQuery } from '../../../redux/querySlice';

const axios = require('axios');

function SearchForm(props) {

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const query = useSelector(selectQuery);

  const [val_q, set_val_q] = useState(query);
  const [tracks, set_tracks] = useState([]);

  function handleChange(event){
    set_val_q(event.target.value);
  }

  function handleSubmit(){
    dispatch(updateQuery(val_q));
  }

  async function doSearch() {
    try {
      let url = 'https://api.spotify.com/v1/search?q='+query+'&type=track,artist';
      await axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then(res => {
        set_tracks(res.data.tracks.items);
      })
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if(query) doSearch();
  }, [query]);

  return (
    <>

      <div className="flex flex-wrap w-10/12 my-10">
        <div className="w-6/12">
          <a className="text-2xl text-white font-bold">Search tracks</a>
        </div>
      </div>

      <div className="w-full">
          <input
          onChange={(event) => {handleChange(event)}}
          value={val_q} type="text"
          className="bg-gray-600 text-gray-100 px-2 py-1 rounded-bl rounded-tl w-64 mb-3"
          placeholder="Type anything..."></input>
          <button onClick={() => {handleSubmit()}} className="bg-sptf hover:bg-gray-600 px-2 py-1 mb-3 text-white rounded-br rounded-tr"><i className="fa fa-search"></i></button>
      </div>

      <TrackHeader
        tracks={tracks}
        set_view={props.set_view}
      />

    </>
  );
}

export default SearchForm;