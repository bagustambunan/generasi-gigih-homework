import { useState } from "react";
import Track from "./TrackItem";
import "../styles/components/track.css";
import { trackListType } from "../types";

function PlaylistHeader({tracks,set_view}:trackListType) {

  const [select_mode, set_select_mode] = useState(true);
  const [highlight_tracks, set_highlight_tracks] = useState(['']);

  function Header() {
    return (
      <div className="header">
        <div className="image">
          
        </div>

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
      {tracks.length !== 0 && <Header />}

      {tracks.map((item:any) => {
        return (
          <Track
            key={item.track.id}
            image_url={item.track.album.images[2].url}
            track_title={item.track.name}
            artist_name={item.track.album.artists[0].name}
            album_name={item.track.album.name}
            duration={item.track.duration_ms}
            data={item.track}
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

export default PlaylistHeader;
