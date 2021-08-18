import { useState, useEffect } from "react";
import SearchHeader from "../../../components/SearchHeader";

import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../../redux/tokenSlice";
import { updateQuery, selectQuery } from "../../../redux/querySlice";

import "../../../styles/search-page.css";
import { searchFormType } from "../../../types";

const axios = require("axios");

function SearchForm({setView}:searchFormType) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const query = useSelector(selectQuery);

  const [val_q, set_val_q] = useState(query);
  const [tracks, set_tracks] = useState([]);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    set_val_q(e.currentTarget.value);
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
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
        .then((res:any) => {
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
          onChange={(e) => {
            handleChange(e);
          }}
          onKeyPress={(e) => {
            handleKeyPress(e);
          }}
          value={val_q}
          type="text"
          placeholder="Type anything..."
        ></input>
      </div>

      <SearchHeader tracks={tracks} setView={setView} />
    </div>
  );
}

export default SearchForm;
