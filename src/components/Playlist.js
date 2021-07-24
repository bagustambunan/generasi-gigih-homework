import React, { useState } from 'react';

function Playlist(props) {

    return (
        <>

        <div onClick={() => {
            props.set_view("playlistdetail");
            props.set_playlist_id(props.id);
            // console.log(props.id);
        }}
        className="bg-sptf_card px-5 py-5 rounded w-72 mr-5 mb-5 cursor-pointer hover:bg-sptf_card_hover">
            <img src={props.image} title={props.name} alt="{props.album_name}" className="object-cover rounded h-52 w-full"/>
            <p className="text-base mt-2 mb-1 font-bold text-gray-100">{props.name}</p>
        </div>

        </>
    );
}

export default Playlist;