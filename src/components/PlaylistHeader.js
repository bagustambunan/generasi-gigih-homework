import React from "react";
import Track from "./Track";

import "../styles/components/track.css";

function PlaylistHeader(props) {
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
              key={item.track.id}
              image_url={item.track.album.images[2].url}
              track_title={item.track.name}
              artist_name={item.track.album.artists[0].name}
              album_name={item.track.album.name}
              duration={item.track.duration_ms}
              data={item.track}
              set_view={props.set_view}
            />
          );
        })}
    </div>
  );
}

export default PlaylistHeader;
