import { useDispatch } from "react-redux";
import { updateSelectedTrack } from "../redux/selectedTrackSlice";
import { getDuration } from "../utils";
import { trackItemType } from "../types";

function Track({
  key, image_url, track_title, artist_name, album_name, duration, data, set_view}
  : trackItemType) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        set_view("trackdetail");
        dispatch(updateSelectedTrack(data));
      }}
      className="track"
    >
      <div className="image">
        <img
          src={image_url}
          title={album_name}
          alt="Album image"
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
