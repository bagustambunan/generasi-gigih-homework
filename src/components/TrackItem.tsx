import { useDispatch } from "react-redux";
import { updateSelectedTrack } from "../redux/selectedTrackSlice";
import { getDuration } from "../utils/helpers";
import { trackItemType } from "../types";

function Track({
  key, image_url, track_title, artist_name, album_name, duration, data, set_view, select_mode, highlight_tracks, set_highlight_tracks}
  : trackItemType) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        if(select_mode){
          set_highlight_tracks([...highlight_tracks, data.uri]);
        }
        else {
          set_view("trackdetail");
          dispatch(updateSelectedTrack(data));
        }
      }}
      className="track"
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
