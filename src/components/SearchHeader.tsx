import { useState } from 'react';
import Track from './TrackItem';
import AddToPlaylist from './modals/AddToPlaylist';
import '../styles/components/track.css';
import { trackListType } from '../types';

function SearchHeader({ tracks, setView }:trackListType) {

  const [selectMode, setSelectMode] = useState(false);
  const [highlightTracks, setHighlightTracks] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  function TrackSelector() {
    if (selectMode) {
      return (
        <div className="highlight-header">
          {(highlightTracks.length !== 0) && (
            <div className="btn-add-to-playlist">
              <span
                onClick={() => {
                  setShowAddModal(true);
                }}
                title="Add to playlist"
              >
                <i className="fa fa-headphones-alt" />
                Add to playlist
              </span>
            </div>
          )}
          <div
            className="track-select"
            onClick={() => {
              setSelectMode(false);
              setHighlightTracks([]);
            }}
          >
            <span>
              Cancel
            </span>
          </div>
        </div>
      );
    }
    else{
      return(
        <div className="highlight-header">
          <div
            className="track-select"
            onClick={() => {
              setSelectMode(true);
            }}
          >
            <span>
              Select tracks
            </span>
          </div>
        </div>
      )
    }
  }

  function Header() {
    return (
      <div className="header">
        <div className="image"></div>

        <div className="title">
          <span>TITLE</span>
        </div>

        <div className="album">
          <span>ALBUM</span>
        </div>

        <div className="duration">
          <span><i className="far fa-clock"></i></span>
        </div>
      </div>
    );
  }

  return (
    <div className="header-body">

      {showAddModal && (
        <AddToPlaylist setShowAddModal={setShowAddModal} selected_uris={highlightTracks} />
      )}

      <TrackSelector/>

      {tracks.length !== 0 && <Header />}

      {tracks.map((item:any) => {
        return (
          <Track
            key={item.id}
            imageUrl={item.album.images[2].url}
            trackTitle={item.name}
            artistName={item.album.artists[0].name}
            albumName={item.album.name}
            duration={item.duration_ms}
            data={item}
            setView={setView}
            selectMode={selectMode}
            highlightTracks={highlightTracks}
            setHighlightTracks={setHighlightTracks}
          />
        );
      })}
    </div>
  );
}

export default SearchHeader;
