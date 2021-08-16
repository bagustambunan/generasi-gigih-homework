import { useState } from "react";
import AddToPlaylist from "./AddToPlaylist";

import { useSelector } from "react-redux";
import { selectSelectedTrack } from "../../../redux/selectedTrackSlice";

import "../../../styles/track-page.css";

function TrackDetail() {

  const selecedTrack = useSelector(selectSelectedTrack);
  const [show_add_modal, set_show_add_modal] = useState(false);

  const selected_uris= [selecedTrack.uri];

  function PlayButton() {
    return (
      <div className="btn-play">
        <a
          href={selecedTrack.external_urls.spotify}
          target="new"
          title="Play on Spotify"
          className=""
        >
          <i className="fa fa-play"></i> Play on Spotify
        </a>
      </div>
    );
  }

  function AddToPlaylistButton() {
    return (
      <div className="btn-add-to-playlist">
        <span
          onClick={() => {
            set_show_add_modal(true);
          }}
          title="Add to playlist"
        >
          <i className="fa fa-headphones-alt"></i> Add to playlist
        </span>
      </div>
    );
  }

  return (
    <div className="track-page">
      {show_add_modal && (
        <AddToPlaylist set_show_add_modal={set_show_add_modal} selected_uris={selected_uris} />
      )}

      <div className="image">
        <img
          src={selecedTrack.album.images[0].url}
          title={selecedTrack.name}
          alt="{props.album_name}"
        />
      </div>

      <div className="info">
        <div className="artist">
          <span>
            {selecedTrack.name}
          </span>
        </div>
        <div className="album">
          <span>
            {selecedTrack.album.artists[0].name}
          </span>
        </div>
      </div>

      <div className="action">
        <PlayButton />
        <AddToPlaylistButton/>
      </div>
    </div>
  );
}

export default TrackDetail;
