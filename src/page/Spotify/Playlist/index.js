import React, {useState, useEffect} from 'react';
import PlaylistAll from './PlaylistAll';
import NewForm from './NewForm';
import PlaylistDetail from './PlaylistDetail';

function PlaylistPage(props) {

    const [view, set_view] = useState("playlistall");
    const [playlist_id, set_playlist_id] = useState(null);
        
    return (
        <>
            {(view==="playlistall") && (
                <PlaylistAll
                    set_view={set_view}
                    token={props.token}
                    user={props.user}
                    set_playlist_id={set_playlist_id}
                />
            )}

            {(view==="newplaylist") && (
                <NewForm
                    set_view={set_view}
                    token={props.token}
                    user={props.user}
                />
            )}

            {(view==="detail") && (
                <PlaylistDetail
                    set_view={set_view}
                    token={props.token}
                    user={props.user}
                    playlist_id={playlist_id}
                    fav_tracks={props.fav_tracks}
                    set_fav_tracks={props.set_fav_tracks}
                />
            )}
        

        </>
    );
    
}

export default PlaylistPage;