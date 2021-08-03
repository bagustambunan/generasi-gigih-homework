import React from "react";

import { useDispatch } from "react-redux";
import { updateSelectedTrack } from "../redux/selectedTrackSlice";

import { getDuration } from "../utils";

function Track(props) {
  const dispatch = useDispatch();

  return (
    <div
      href="#"
      onClick={() => {
        props.set_view("trackdetail");
        dispatch(updateSelectedTrack(props.data));
      }}
      className="track"
    >
      <div className="image">
        <img
          src={props.image_url}
          title={props.album_name}
          alt="{props.album_name}"
        />
      </div>

      <div className="title">
        <div className="track-title">
          <span>{props.track_title}</span>
        </div>
        <div className="artist-name">
          <span>
            {props.artist_name}
          </span>
        </div>
      </div>

      <div className="album">
        <span>{props.album_name}</span>
      </div>

      <div className="duration">
        <span>{getDuration(props.duration)}</span>
      </div>
    </div>
  );
}

export default Track;
