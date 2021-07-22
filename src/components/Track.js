import React, { useState } from 'react';
import {
    useTrackContext,
    addTrack,
    removeTrack
  } from '../contexts/TrackContext';

const Track = props => {

    const { items, dispatch } = useTrackContext();
    const [isfav, set_isfav] = useState(
        (items.filter( item => { return item.id === props.data.id}).length === 0) ? false : true
    );

    const handleClick = () => {
        if (items.filter( item => { return item.id === props.data.id}).length === 0){
            dispatch(addTrack(props.data));
        }
        else {
            let item = items.filter( item => { return item.id === props.data.id})[0];
            let index = items.indexOf(item);
            console.log("Hapus: "+index);
            dispatch(removeTrack(index));
        }
        set_isfav(!isfav);
        console.log("Is Fav?: " + isfav);
    }

    const Heart = () => {
        if(isfav) {
            return (
                <div className="">
                    <i className="text-red-500 fas fa-heart"></i>
                </div>
            )
        }
        else {
            return (
                <div className="">
                    <i className="text-gray-500 far fa-heart"></i>
                </div>
            )
        }
    }

    return (
        <>

        <div onClick= {() => {handleClick()}}
        className="bg-sptf_card px-5 py-5 rounded w-1/5 mr-4 mb-4 cursor-pointer hover:bg-sptf_card_hover">
            <img src={props.image_url} title={props.album_name} alt="{props.album_name}" className="object-cover rounded h-40 w-full"/>
            <p className="text-base mt-2 mb-1 font-bold text-gray-100">{props.track_title}</p>
            <div className="">
                <p className="text-sm text-gray-300">{props.artist_name}</p>
            </div>
            <Heart/>
            
        </div>

        </>
    );
}

export default Track;