import React, {useState} from 'react';

function Track(props) {

    let durasi_menit = Number((props.duration/60000).toFixed(0));
    let durasi_detik = Number(((props.duration%60000)/1000).toFixed(0));
    if (durasi_detik<10) durasi_detik = `0${durasi_detik}`;

    return (
    <div
      href="#"
      onClick= {() => {
          props.set_view("trackdetail");
          props.set_track_id(props.data.id);
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
            <a className="text-gray-300">{durasi_menit}:{durasi_detik}</a>
        </div>

    </div>
    );
}

export default Track;