import React, { useState, useEffect } from 'react';
import PlaylistHeader from '../../../components/PlaylistHeader';

const axios = require('axios');

function PlaylistDetail(props) {

    const [selected_playlist, set_selected_playlist] = useState([]);
    const [is_loading, set_is_loading] = useState(true);

    async function getTracks() {
        try {
            // set_is_loading(true);
            await axios.get("https://api.spotify.com/v1/playlists/" + props.playlist_id, {
            headers: {
                'Authorization': 'Bearer ' + props.token
            },
            })
            .then(res => {
                set_selected_playlist(res.data);
            })
        } catch (err) {
            console.error(err);
        } finally {
            set_is_loading(false);
        }
    }

    useEffect(() => {
        getTracks();
    });

    function TesTombol(){
        return(
            <a
                onClick={() => {
                    // console.log(selected_playlist.tracks.items[0].track.name);
                    // console.log(props.playlist_id);

                    console.log(selected_playlist.tracks);
                    console.log(is_loading);
                }}
                className="cursor-pointer text-white bg-blue-500 p-2 rounded-lg">
            Tes tombol</a>
        )
    }

    function Page(){
        if(is_loading){
            return(
                <a className="text-white">Loading...</a>
            )
        }
        else{
            return(
                <>

                {(selected_playlist.tracks.total!=0) && (
                    <PlaylistHeader
                        token={props.token}
                        tracks={selected_playlist.tracks.items}
                        fav_tracks={props.fav_tracks}
                        set_fav_tracks={props.set_fav_tracks}
                    />
                )}
            
            </>
            )
        }
    }

    // console.log(selected_playlist);

    return (
        <>
            <Page/>
        </>
    );
}

export default PlaylistDetail;