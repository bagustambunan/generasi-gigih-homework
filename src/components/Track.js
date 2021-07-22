import React from 'react';
import {
    useTrackContext,
    addTrack,
    removeTrack,
    clearAll
  } from '../contexts/TrackContext';

const Track = props => {

    const { items, dispatch } = useTrackContext();

    const handleClick = () => {
        dispatch(addTrack(props.data));
        console.log(items.includes( item => { return item.id === props.data.id}));
        // console.log("Item ID: " + props.data.id);
        // console.log("Props data ID: " + props.data.id);
    }

    const Heart = () => {
        if(items.includes( item => { return item.id === props.data.id})){
            return (
                <div className="">
                    <i className="fa fa-heart"></i>
                </div>
            )
        }
        else return "Not fav";
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