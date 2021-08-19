import { FormEvent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/tokenSlice';
import { addToPlaylistType } from '../../types';

const axios = require('axios');

function AddToPlaylist({ setShowAddModal, selectedUris }: addToPlaylistType) {
  const token = useSelector(selectToken);
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylistID, setSelectedPlaylistID] = useState('');

  async function getPlaylists() {
    try {
      await axios
        .get('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((res: any) => {
          setPlaylists(res.data.items);
        });
    } catch (err) {
      console.error(err);
    }
  }

  async function doAdd() {
    if (selectedPlaylistID) {
      try {
        const url = 'https://api.spotify.com/v1/playlists/'
          + selectedPlaylistID
          + '/tracks?uris='
          + selectedUris;
        await axios.post(
          url,
          {},
          {
            headers: {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          },
        );
      } catch (err) {
        console.error(err);
      } finally {
        alert('Track added to playlist successfully');
        setShowAddModal(false);
      }
    }
  }

  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-header">
          <span>Add track to playlist</span>
        </div>
        <div className="modal-body">
          <select
            onChange={(e: FormEvent<HTMLSelectElement>) => {
              setSelectedPlaylistID(e.currentTarget.value);
            }}
          >
            <option value="" disabled selected>
              Select a playlist
            </option>
            {playlists.map((item: any) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="modal-action">
          <button onClick={() => { doAdd(); }} type="button" className="btn btn-primary">Add</button>
          <button onClick={() => { setShowAddModal(false); }} type="button" className="btn btn-secondary">Cancel</button>
        </div>
      </div>

    </div>
  );
}

export default AddToPlaylist;
