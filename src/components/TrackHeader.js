import React from "react";
import Track from "./Track";

import "../styles/components/track.css";

function TrackHeader(props) {
  function Header() {
    return (
      <div className="header">
        <div className="image"></div>

        <div className="title">
          <span className="text-me_dark_quarter text-sm">TITLE</span>
        </div>

        <div className="album">
          <span className="text-me_dark_quarter text-sm">ALBUM</span>
        </div>

        <div className="duration">
          <i className="text-me_dark_quarter text-sm far fa-clock"></i>
        </div>
      </div>
    );
  }

  return (
    <div className="header-body">
      {props.tracks.length !== 0 && <Header />}

      {props.tracks.map((item, i) => {
        return (
          <Track
            key={item.id}
            image_url={item.album.images[2].url}
            track_title={item.name}
            artist_name={item.album.artists[0].name}
            album_name={item.album.name}
            duration={item.duration_ms}
            data={item}
            set_view={props.set_view}
          />
        );
      })}
    </div>
  );
}

export default TrackHeader;
