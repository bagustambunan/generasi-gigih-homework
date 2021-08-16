import { useState } from "react";
import Track from "./TrackItem";
import "../styles/components/track.css";
import { trackListType } from "../types";

function TrackHeader({tracks,set_view}:trackListType) {

  const [select_mode, set_select_mode] = useState(false);
  const [highlight_tracks, set_highlight_tracks] = useState([]);

  function TrackSelector(){
    return(
      <div className="track-selector">
        <span>
          Select tracks
        </span>
      </div>
    )
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

      <TrackSelector/>

      {tracks.length !== 0 && <Header />}

      {tracks.map((item:any) => {
        return (
          <Track
            key={item.id}
            image_url={item.album.images[2].url}
            track_title={item.name}
            artist_name={item.album.artists[0].name}
            album_name={item.album.name}
            duration={item.duration_ms}
            data={item}
            set_view={set_view}
            select_mode={select_mode}
            highlight_tracks={highlight_tracks}
            set_highlight_tracks={set_highlight_tracks}
          />
        );
      })}
    </div>
  );
}

export default TrackHeader;
