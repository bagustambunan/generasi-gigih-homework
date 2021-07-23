import React, {useState} from 'react';
import Track from './Track';
import AddToPlaylist from '../page/Spotify/Playlist/AddToPlaylist';

function TrackHeader(props) {

    const [show_add_modal, set_show_add_modal] = useState(false);
    const [selected_track, set_selected_track] = useState(null);

    function Header() {
        return(
        <div className="flex flex-wrap border-b mb-3">

            <div className="w-28 p-2 mr-2">
            
            </div>

            <div className="w-80 p-2">
                <a className="text-gray-300 text-sm">TITLE</a>
            </div>

            <div className="w-80 p-2">
                <a className="text-gray-300 text-sm">ALBUM</a>
            </div>

            <div className="w-24 p-2">
                <i className="text-gray-300 text-sm far fa-clock"></i>
            </div>

            <div className="w-12 p-2">
            <a className="text-gray-300 text-sm">PLAYLIST</a>
            </div>

        </div>
        )
    }

    return (
    <div className="w-11/12">
        {(props.tracks.length != 0) && (
            <Header/>
        )}

        {(show_add_modal) && (
          <AddToPlaylist
            token={props.token}
            selected_track={selected_track}
            set_show_add_modal={set_show_add_modal}
          />
        )}

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
                fav_tracks={props.fav_tracks}
                set_fav_tracks={props.set_fav_tracks}
                set_show_add_modal={set_show_add_modal}
                set_selected_track={set_selected_track}
                track_id={props.track_id}
                set_track_id={props.set_track_id}
                set_view={props.set_view}
              />
            );
        })}

    </div>
    );
}

export default TrackHeader;