import React, { useState, useEffect } from "react";
import TrackHeader from "../../../components/TrackHeader";

import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../../redux/tokenSlice";
import { updateQuery, selectQuery } from "../../../redux/querySlice";

import "../../../styles/search-page.css";

const axios = require("axios");

function SearchForm(props) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const query = useSelector(selectQuery);

  const [val_q, set_val_q] = useState(query);
  const [tracks, set_tracks] = useState([]);

  function handleChange(event) {
    set_val_q(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      dispatch(updateQuery(val_q));
    }
  }

  async function doSearch() {
    try {
      let url =
        "https://api.spotify.com/v1/search?q=" + query + "&type=track,artist";
      await axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          set_tracks(res.data.tracks.items);
        });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (query) doSearch();
  }, [query]);

  return (
    <div className="search-page">
      <div className="search-header">
        <i className="fa fa-search"></i>
        <input
          onChange={(event) => {
            handleChange(event);
          }}
          onKeyPress={(event) => {
            handleKeyPress(event);
          }}
          value={val_q}
          type="text"
          placeholder="Type anything..."
        ></input>
      </div>

      <TrackHeader tracks={tracks} set_view={props.set_view} />
    </div>
  );
}

export default SearchForm;
