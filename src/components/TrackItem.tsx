import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateSelectedTrack } from "../redux/selectedTrackSlice";
import { getDuration } from "../utils/helpers";
import { trackItemType } from "../types";

function Track({
  key, image_url, track_title, artist_name, album_name, duration, data, setView, selectMode, highlightTracks, setHighlightTracks}
  : trackItemType) {

  const dispatch = useDispatch();
  const [isHighlight, set_isHighlight] = useState(highlightTracks.some(item => item === data.uri));

  useEffect(() => {
    set_isHighlight(highlightTracks.some(item => item === data.uri));
  }, [highlightTracks]);

  return (
    <div
      onClick={() => {
        if(selectMode){
          if(isHighlight){
            let index = highlightTracks.indexOf(data.uri);
            if (index !== -1) highlightTracks.splice(index, 1);
            set_isHighlight(false);
          }
          else{
            setHighlightTracks([...highlightTracks, data.uri]);
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
