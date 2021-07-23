import React, {useState} from 'react';
import {
    useTrackContext,
    addTrack,
    removeTrack
  } from '../contexts/TrackContext';

function Track(props) {

    let durasi_menit = Number((props.duration/60000).toFixed(0));
    let durasi_detik = Number(((props.duration%60000)/1000).toFixed(0));
    if (durasi_detik<10) durasi_detik = `0${durasi_detik}`;

    const { track_store, dispatch_track } = useTrackContext();
    const [isfav, set_isfav] = useState(
        (track_store.filter( item => { return item.id === props.data.id}).length === 0) ? false : true
    );

    const handleClick = () => {
        if (track_store.filter( item => { return item.id === props.data.id}).length === 0){
            dispatch_track(addTrack(props.data));
        }
        else {
            let item = track_store.filter( item => { return item.id === props.data.id})[0];
            let index = track_store.indexOf(item);
            console.log("Hapus: "+index);
            dispatch_track(removeTrack(index));
        }
        set_isfav(!isfav);
        console.log("Is Fav?: " + isfav);
    }

    function Heart() {
      if(isfav) {
        return (
          <div className="cursor-pointer" onClick= {() => {handleClick()}}>
            <i className="text-xl text-red-500 fas fa-heart"></i>
          </div>
        )
      }
      else {
        return (
          <div className="cursor-pointer" onClick= {() => {handleClick()}}>
            <i className="text-xl text-gray-500 far fa-heart hover:text-gray-100"></i>
          </div>
        )
      }
    }

    return (
    <div className="flex flex-wrap rounded-lg hover:bg-sptf_card_hover">

        <div className="w-16 pb-2 pr-2 pl-2 pt-4 text-center">
          <Heart/>
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