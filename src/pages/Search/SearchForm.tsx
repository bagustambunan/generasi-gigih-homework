import {
  FormEvent,
  KeyboardEvent,
  useState,
  useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../redux/tokenSlice';
import { updateQuery, selectQuery } from '../../redux/querySlice';
import SearchHeader from '../../components/Track/SearchHeader';
import { searchFormType } from '../../libs/types';
import './style.css';

const axios = require('axios');

function SearchForm({ setView } : searchFormType) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const query = useSelector(selectQuery);

  const [searchVal, setSearchVal] = useState(query);
  const [tracks, setTracks] = useState([]);

  function handleChange(e: FormEvent<HTMLInputElement>) {
    setSearchVal(e.currentTarget.value);
  }

  function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      dispatch(updateQuery(searchVal));
    }
  }

  async function doSearch() {
    try {
      const url = 'https://api.spotify.com/v1/search?q=' + query + '&type=track,artist';
      await axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((res:any) => {
          setTracks(res.data.tracks.items);
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
        <i className="fa fa-search" />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          onKeyPress={(e) => {
            handleKeyPress(e);
          }}
          value={searchVal}
          type="text"
          placeholder="Type anything..."
        />
      </div>
      <SearchHeader tracks={tracks} setView={setView} />
    </div>
  );
}

export default SearchForm;
