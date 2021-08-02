import React from "react";
import Track from "./Track";

function PlaylistHeader(props) {
  function Header() {
    return (
      <div className="flex flex-wrap border-b mb-5">
        <div className="w-12 p-2 mr-2"></div>

        <div className="w-80 p-2">
          <span className="text-me_dark_quarter text-sm">TITLE</span>
        </div>

        <div className="w-80 p-2">
          <span className="text-me_dark_quarter text-sm">ALBUM</span>
        </div>

        <div className="w-24 p-2">
          <i className="text-me_dark_quarter text-sm far fa-clock"></i>
        </div>
      </div>
    );
  }

  return (
    <div className="ml-5 w-10/12">
      {props.tracks.length !== 0 && <Header />}

      <div className="">
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
    </div>
  );
}

export default PlaylistHeader;
