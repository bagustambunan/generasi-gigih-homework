import { MouseEvent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/tokenSlice';
import Playlist from '../../components/Playlist/PlaylistItem';
import { playlistAllType } from '../../types';

const axios = require('axios');

function PlaylistAll({ setView, setPlaylistID }:playlistAllType) {
  const token = useSelector(selectToken);
  const [playlists, setPlaylists] = useState([]);

  function AddButton() {
    function goToForm(e:MouseEvent) {
      e.preventDefault();
      setView('newplaylist');
    }

    return (
      <div className="add-button">
        <a
          onClick={(e) => {
            goToForm(e);
          }}
          href="/new"
          title="Create new playlist"
        >
          <i className="fa fa-plus" />
        </a>
      </div>
    );
  }

  async function getPlaylists() {
    try {
      await axios
        .get('https://api.spotify.com/v1/me/playlists?limit=50', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((res:any) => {
          setPlaylists(res.data.items);
        });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <div className="playlist-main">
      <div className="page-header">
        <div className="title">
          <span>
            My playlists
          </span>
        </div>
        <div className="action">
          <AddButton />
        </div>
      </div>

      <div className="page-main">
        {playlists.map((item:any) => {
          let image = 'https://media.istockphoto.com/photos/white-headphones-with-red-heart-sign-in-the-middle-on-blue-surface-picture-id696537216';
          if (item.images[0]) image = item.images[0].url;
          return (
            <Playlist
              key={item.id}
              id={item.id}
              image={image}
              name={item.name}
              desc={item.description}
              setView={setView}
              setPlaylistID={setPlaylistID}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PlaylistAll;
