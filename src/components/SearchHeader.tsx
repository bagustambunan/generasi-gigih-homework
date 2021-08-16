import { useState } from "react";
import Track from "./TrackItem";
import AddToPlaylist from "./modals/AddToPlaylist";
import "../styles/components/track.css";
import { trackListType } from "../types";

function SearchHeader({tracks,set_view}:trackListType) {

  const [select_mode, set_select_mode] = useState(false);
  const [highlight_tracks, set_highlight_tracks] = useState([]);
  const [show_add_modal, set_show_add_modal] = useState(false);

  function TrackSelector(){
    if(select_mode){
      return(
        <div className="highlight-header">
          {(highlight_tracks.length !== 0) && (
            <div className="btn-add-to-playlist">
              <span
                onClick={() => {
                  set_show_add_modal(true);
                }}
                title="Add to playlist"
              >
                <i className="fa fa-headphones-alt"></i> Add to playlist
              </span>
            </div>
          )}
          <div
            className="track-select"
            onClick={() => {
              set_select_mode(false);
              set_highlight_tracks([]);
            }}
          >
            <span>
              Cancel
            </span>
          </div>
        </div>
      )
    }
    else{
      return(
        <div className="highlight-header">
          <div
            className="track-select"
            onClick={() => {
              set_select_mode(true);
            }}
          >
            <span>
              Select tracks
            </span>
          </div>
        </div>
      )
    }
  }

  function Header() {
    return (
      <div className="header">
        <div className="image"></div>

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

      {show_add_modal && (
        <AddToPlaylist set_show_add_modal={set_show_add_modal} selected_uris={highlight_tracks} />
      )}

      <TrackSelector/>

      {tracks.length !== 0 && <Header />}

      {tracks.map((item:any) => {
        return (
          <Track
            key={item.id}
            image_url={item.album.images[2].url}
            track_title={item.name}
            artist_name={item.album.artists[0].name}
            album_name={item.album.name}
            duration={item.duration_ms}
            data={item}
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

export default SearchHeader;
