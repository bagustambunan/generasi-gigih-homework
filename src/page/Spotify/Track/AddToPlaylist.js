import React, { useState, useEffect } from 'react';
const axios = require('axios');

function AddToPlaylist(props){

    const [playlists, set_playlists] = useState([]);
    const [selected_playlist_id, set_selected_playlist_id] = useState(null);

    async function getPlaylists() {
        try {
          await axios.get("https://api.spotify.com/v1/me/playlists?limit=10", {
            headers: {
              'Authorization': 'Bearer ' + props.token
            },
          })
          .then(res => {
            set_playlists(res.data.items);
          })
        } catch (err) {
          console.error(err);
        } finally{
            // set_selected_playlist_id(playlists[0].id);
        }
    }

    async function doAdd() {
        // console.log(selected_playlist_id);
        // console.log(props.selected_track.uri);
        if(selected_playlist_id){
            try {
                let url = "https://api.spotify.com/v1/playlists/"+selected_playlist_id+"/tracks?uris="+props.selected_track.uri;
                await axios.post(url, 
                    {
                        // uris: props.selected_track.uri,
                    },
                    {
                        headers: {
                            'Authorization': 'Bearer ' + props.token,
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        }
                    }
                )
            } catch (err) {
                console.error(err);
            } finally{
                alert("Track added to playlist successfully");
            }
        }
    }

    useEffect(() => {
        getPlaylists();
    }, []);

    return(
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-lg leading-6 font-medium text-white mb-5" id="modal-title">
                            Add track to playlist
                            </h3>
                            <div className="mt-2">

                            <select
                                onChange={(event) => {set_selected_playlist_id(event.target.value)}}
                                className="bg-gray-600 text-gray-100 py-3 px-3 rounded w-80"
                                >
                                <option value="" disabled selected>Select a playlist</option>
                                {playlists.map((item, i) => {
                                    return (
                                        <option value={item.id}>{item.name}</option>
                                    );
                                })}
                            </select>


                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button onClick={() => {doAdd()}} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm">
                        Done
                        </button>
                        <button onClick={() => {props.set_show_add_modal(false)}} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToPlaylist;