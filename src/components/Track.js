import React from 'react';

const Track = props => {

    const handleClick = () => {
        alert('Halo');
    }

    return (
        <div className="bg-gray-100 px-5 py-5 rounded-lg w-1/5">
            <img src={props.image_url} title={props.album_name} alt="{props.album_name}" className="object-cover rounded h-40 w-full"/>
            <p className="text-base mt-2 mb-1 font-bold">{props.track_title}</p>
            <div className="">
                <p className="text-sm">Artist: {props.artist_name}</p>
                <p className="text-sm">Album: {props.album_name}</p>
            </div>
            <button className="w-full py-1 rounded mt-2 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white" onClick= {() => {handleClick()}}>Select</button>
        </div>
    );
}

export default Track;