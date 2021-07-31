import React, { useState, useEffect } from 'react';
import PlaylistHeader from '../../../components/PlaylistHeader';

import { useSelector } from 'react-redux';
import { selectToken } from '../../../redux/tokenSlice';

const axios = require('axios');

function PlaylistDetail(props) {

    const token = useSelector(selectToken);

    const [selected_playlist, set_selected_playlist] = useState([]);
    const [is_loading, set_is_loading] = useState(true);

    async function getTracks() {
        try {
            await axios.get("https://api.spotify.com/v1/playlists/" + props.playlist_id, {
            headers: {
                'Authorization': 'Bearer ' + token
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
    }, []);

    function Page(){
        if(is_loading){
            return(
                <span className="text-me_dark_half">Loading...</span>
            )
        }
        else{
            let image="https://media.istockphoto.com/photos/white-headphones-with-red-heart-sign-in-the-middle-on-blue-surface-picture-id696537216"
            if(selected_playlist.images[0]){
                image = selected_playlist.images[0].url;
            }
            return(
            <div className="bg-me_card p-5 shadow rounded-lg">

                <div className="flex flex-wrap w-full my-5">
                    <div className="mr-5">
                        <img src={image} title={selected_playlist.name} alt="{props.album_name}" className="object-cover rounded h-40 w-40"/>
                    </div>
                    <div className="w-9/12">
                        <div className="mb-3">
                            <span className="text-2xl text-me_dark_half font-bold">{selected_playlist.name}</span>
                        </div>
                        <div className="">
                            <p className="text-sm text-me_dark_quarter">{selected_playlist.description}</p>
                        </div>
                    </div>
                    
                </div>

                {(selected_playlist.tracks.total!==0) && (
                    <PlaylistHeader
                        tracks={selected_playlist.tracks.items}
                        set_view={props.set_view}
                    />
                )}
            
            </div>
            )
        }
    }
    
    return (
        <>
            <Page/>
        </>
    );
}

export default PlaylistDetail;