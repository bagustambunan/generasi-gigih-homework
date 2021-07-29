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
      className="cursor-pointer flex flex-wrap rounded-lg hover:bg-me_card_hover">

        <div className="p-2">
            <img src={props.image_url} title={props.album_name} alt="{props.album_name}" className="object-cover w-10 h-10"/>
        </div>

        <div className="w-80 p-2">
            <div className="-mb-1">
                <a className="text-me_dark_half">{props.track_title}</a>
            </div>
            <div>
                <a className="text-me_dark_quarter text-sm">{props.artist_name}</a>
            </div>
        </div>

        <div className="w-80 p-2">
            <a className="text-me_dark_quarter">{props.album_name}</a>
        </div>

        <div className="w-24 p-2">
            <a className="text-me_dark_quarter">{getDuration(props.duration)}</a>
        </div>

    </div>
    );
}

export default Track;