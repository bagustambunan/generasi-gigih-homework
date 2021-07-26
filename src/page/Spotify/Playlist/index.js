import React, {useState} from 'react';
import PlaylistAll from './PlaylistAll';
import NewForm from './NewForm';
import PlaylistDetail from './PlaylistDetail';
import TrackDetail from '../Track/TrackDetail';

function PlaylistPage(props) {

    const [view, set_view] = useState("playlistall");
    const [playlist_id, set_playlist_id] = useState(null);
        
    return (
        <>
            {(view==="playlistall") && (
                <PlaylistAll
                    set_view={set_view}
                    user={props.user}
                    set_playlist_id={set_playlist_id}
                />
            )}

            {(view==="newplaylist") && (
                <NewForm
                    set_view={set_view}
                    user={props.user}
                />
            )}

            {(view==="playlistdetail") && (
                <PlaylistDetail
                    set_view={set_view}
                    user={props.user}
                    playlist_id={playlist_id}
                    fav_tracks={props.fav_tracks}
                    set_fav_tracks={props.set_fav_tracks}
                    track_id={props.track_id}
                    set_track_id={props.set_track_id}
                    set_view={set_view}
                />
            )}

            {(view==="trackdetail") && (
                <TrackDetail
                    track_id={props.track_id}
                    set_track_id={props.set_track_id}
                />
            )}
        

        </>
    );
    
}

export default PlaylistPage;