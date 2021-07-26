import React from 'react';

import { useDispatch } from 'react-redux';
import { updateSelectedTrack } from '../redux/selectedTrackSlice';

import { getDuration } from '../utils';

function Track(props) {

    const dispatch = useDispatch();

    return (
    <div
      href="#"
      onClick= {() => {
          props.set_view("trackdetail");
          dispatch(updateSelectedTrack(props.data));
        }}
      className="cursor-pointer flex flex-wrap rounded-lg hover:bg-sptf_card_hover">

        <div className="w-16 pb-2 pr-2 pl-2 pt-4 text-center">
          {/* <Heart/> */}
        </div>

        <div className="p-2">
            <img src={props.image_url} title={props.album_name} alt="{props.album_name}" className="object-cover w-10 h-10"/>
        </div>

        <div className="w-80 p-2">
            <div className="-mb-1">
                <a className="text-white">{props.track_title}</a>
            </div>
            <div>
                <a className="text-gray-400 text-sm">{props.artist_name}</a>
            </div>
        </div>

        <div className="w-80 p-2">
            <a className="text-gray-300">{props.album_name}</a>
        </div>

        <div className="w-24 p-2">
            <a className="text-gray-300">{getDuration(props.duration)}</a>
        </div>

    </div>
    );
}

export default Track;