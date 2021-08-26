import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/tokenSlice';
import PlaylistHeader from '../../components/PlaylistHeader';

const axios = require('axios');

function PlaylistDetail({ setView, playlistID }) {
  const token = useSelector(selectToken);
  const [selectedPlaylist, setSelectedPlaylist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getTracks() {
    try {
      await axios
        .get('https://api.spotify.com/v1/playlists/' + playlistID, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((res) => {
          setSelectedPlaylist(res.data);
        });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTracks();
  }, []);

  function Page() {
    if (isLoading) return <span>Loading...</span>;
    let image = 'https://media.istockphoto.com/photos/white-headphones-with-red-heart-sign-in-the-middle-on-blue-surface-picture-id696537216';
    if (selectedPlaylist.images[0]) image = selectedPlaylist.images[0].url;

    return (
      <div className="detail-page">
        <div className="playlist-header">
          <div className="image">
            <img
              src={image}
              title={selectedPlaylist.name}
              alt="Album"
            />
          </div>
          <div className="info">
            <div>
              <span>
                {selectedPlaylist.name}
              </span>
            </div>
            <div>
              <p>
                {selectedPlaylist.description}
              </p>
            </div>
          </div>
        </div>
        {selectedPlaylist.tracks.total !== 0 && (
          <PlaylistHeader
            tracks={selectedPlaylist.tracks.items}
            setView={setView}
          />
        )}
      </div>
    );
  }

  return <Page />;
}

export default PlaylistDetail;
