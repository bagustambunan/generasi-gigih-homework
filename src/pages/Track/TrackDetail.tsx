import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedTrack } from '../../redux/selectedTrackSlice';
import AddToPlaylist from '../../components/Modals/AddToPlaylist';
import './style.css';

function TrackDetail() {
  const selecedTrack = useSelector(selectSelectedTrack);
  const [showAddModal, setShowAddModal] = useState(false);
  const selectedUris = [selecedTrack.uri];

  function PlayButton() {
    return (
      <div className="btn-play">
        <a
          href={selecedTrack.external_urls.spotify}
          target="new"
          title="Play on Spotify"
          className=""
        >
          <i className="fa fa-play" />
          Play on Spotify
        </a>
      </div>
    );
  }

  function AddToPlaylistButton() {
    return (
      <div className="btn-add-to-playlist">
        <span
          onClick={() => {
            setShowAddModal(true);
            console.log(selecedTrack);
          }}
          title="Add to playlist"
        >
          <i className="fa fa-headphones-alt" />
          Add to playlist
        </span>
      </div>
    );
  }

  return (
    <div className="track-page">
      {showAddModal && (
        <AddToPlaylist setShowAddModal={setShowAddModal} selectedUris={selectedUris} />
      )}

      <div className="track-over">

        <div className="image">
          <img
            src={selecedTrack.album.images[0].url}
            title={selecedTrack.name}
            alt="Album"
          />
        </div>

        <div className="info">
          <div className="title">
            <span>
              {selecedTrack.name}
            </span>
          </div>
          <div className="artist">
            <span>
              {selecedTrack.album.artists[0].name}
            </span>
          </div>
        </div>

      </div>

      <div className="action">
        <AddToPlaylistButton />
        <PlayButton />
      </div>
    </div>
  );
}

export default TrackDetail;
