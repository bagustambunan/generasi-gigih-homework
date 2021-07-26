import React, { useState, useEffect } from 'react';
import PlaylistHeader from '../../../components/PlaylistHeader';

import { useSelector, useDispatch } from 'react-redux';
import {
    updateToken,
    selectToken,
  } from '../../../redux/tokenSlice';

const axios = require('axios');

function PlaylistDetail(props) {

    const dispatch = useDispatch();
    const token = useSelector(selectToken);

    const [selected_playlist, set_selected_playlist] = useState([]);
    const [is_loading, set_is_loading] = useState(true);

    async function getTracks() {
        try {
            // set_is_loading(true);
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
            let image="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            if(selected_playlist.images[0]){
                image = selected_playlist.images[0].url;
            }
            return(
            <>

                <div className="flex flex-wrap w-full my-10">
                    <div className="mr-5">
                        <img src={image} title={selected_playlist.name} alt="{props.album_name}" className="object-cover rounded h-40 w-40"/>
                    </div>
                    <div className="w-9/12">
                        <div className="mb-3">
                            <a className="text-2xl text-white font-bold">{selected_playlist.name}</a>
                        </div>
                        <div className="">
                            <p className="text-sm text-gray-400">{selected_playlist.description}</p>
                        </div>
                    </div>
                    
                </div>

                {(selected_playlist.tracks.total!=0) && (
                    <PlaylistHeader
                        tracks={selected_playlist.tracks.items}
                        fav_tracks={props.fav_tracks}
                        set_fav_tracks={props.set_fav_tracks}
                        track_id={props.track_id}
                        set_track_id={props.set_track_id}
                        set_view={props.set_view}
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