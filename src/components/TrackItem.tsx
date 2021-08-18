import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateSelectedTrack } from "../redux/selectedTrackSlice";
import { getDuration } from "../utils/helpers";
import { trackItemType } from "../types";

function Track({
  key, image_url, track_title, artist_name, album_name, duration, data, setView, select_mode, highlight_tracks, set_highlight_tracks}
  : trackItemType) {

  const dispatch = useDispatch();
  const [isHighlight, set_isHighlight] = useState(highlight_tracks.some(item => item === data.uri));

  useEffect(() => {
    set_isHighlight(highlight_tracks.some(item => item === data.uri));
  }, [highlight_tracks]);

  return (
    <div
      onClick={() => {
        if(select_mode){
          if(isHighlight){
            let index = highlight_tracks.indexOf(data.uri);
            if (index !== -1) highlight_tracks.splice(index, 1);
            set_isHighlight(false);
          }
          else{
            set_highlight_tracks([...highlight_tracks, data.uri]);
            set_isHighlight(true);
          }
        }
        else {
          setView("trackdetail");
          dispatch(updateSelectedTrack(data));
        }
        console.log(isHighlight);
      }}
      className={"track" + (isHighlight? " track-highlight" : "")}
    >
      <div className="image">
        <img
          src={image_url}
          title={album_name}
          alt="Album"
        />
      </div>

      <div className="title">
        <div className="track-title">
          <span>{track_title}</span>
        </div>
        <div className="artist-name">
          <span>
            {artist_name}
          </span>
        </div>
      </div>

      <div className="album">
        <span>{album_name}</span>
      </div>

      <div className="duration">
        <span>{getDuration(duration)}</span>
      </div>
    </div>
  );
}

export default Track;
