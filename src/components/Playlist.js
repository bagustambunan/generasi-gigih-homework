import React from "react";

function Playlist(props) {
  return (
    <>
      <div
        onClick={() => {
          props.set_view("playlistdetail");
          props.set_playlist_id(props.id);
        }}
        className="playlist-card"
      >
        <div>
          <img
            src={props.image}
            title={props.name}
            alt="{props.album_name}"
          />
        </div>
        <div className="detail">
          <p>
            {props.name}
          </p>
        </div>
      </div>
    </>
  );
}

export default Playlist;
