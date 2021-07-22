import React, { useState, useEffect } from 'react';
import LoginButton from './LoginButton';

const axios = require('axios');

function SpotifyMinimal() {

  const [access_token, set_access_token] = useState(null);
  const [query, set_query] = useState('Bryan Adams');
  const [tracks, set_tracks] = useState([]);
  const [fav_list, set_fav_list] = useState([]);

  function Track(props) {

    let durasi_menit = Number((props.duration/60000).toFixed(0));
    let durasi_detik = Number(((props.duration%60000)/1000).toFixed(0));
    if (durasi_detik<10) durasi_detik = `0${durasi_detik}`;

    const [isfav, set_isfav] = useState(
        (fav_list.filter( item => { return item.id === props.data.id}).length === 0) ? false : true
    );

    function addFav(){
      set_fav_list([...fav_list, props.data]);
      set_isfav(!isfav);
    }

    function removeFav(){
      let item = fav_list.filter( item => { return item.id === props.data.id})[0];
      let index = fav_list.indexOf(item);
      console.log("Posisi hapus: "+index);
      let copy = [...fav_list];
      copy.splice(index, 1);
      set_fav_list([...copy]);
    }

    function Heart() {
      if(isfav) {
        return (
          <div className="cursor-pointer" onClick= {() => {removeFav()}}>
            <i className="text-xl text-red-500 fas fa-heart"></i>
          </div>
        )
      }
      else {
        return (
          <div className="cursor-pointer" onClick= {() => {addFav()}}>
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

  function TrackHeader() {

    return (
    <div className="flex flex-wrap border-b mb-3">

        <div className="w-28 p-2 mr-2">
          
        </div>

        <div className="w-80 p-2">
          <a className="text-gray-300 text-sm">TITLE</a>
        </div>

        <div className="w-80 p-2">
          <a className="text-gray-300 text-sm">ALBUM</a>
        </div>

        <div className="w-24 p-2">
        <i className="text-gray-300 text-sm far fa-clock"></i>
        </div>

    </div>
    );
  }

  function doSearch() {
    try {
      let url = 'https://api.spotify.com/v1/search?q='+query+'&type=track&limit=10';
      axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
      })
      .then(res => {
        set_tracks(res.data.tracks.items);
      })
    } catch (err) {
      console.error(err);
    } finally {
      console.log(tracks);
    }
  }

  function getHashParams() {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  useEffect(() => {
    let params = getHashParams();
    let token = params.access_token;
    set_access_token(token);
  });

  return (
    <div className="bg-dark_main min-h-screen p-8">

      {(!access_token) && (
        <LoginButton/>
      )}

      {(access_token) && (
        <div className="w-full">
          <input
            onChange={(event) => {set_query(event.target.value)}}
            value={query} type="text"
            className="bg-white px-2 py-1 rounded-bl rounded-tl w-80 mb-3"
            placeholder="Type anything..."></input>
          <button onClick={() => {doSearch()}} className="bg-sptf hover:bg-gray-600 px-2 py-1 mb-3 text-white rounded-br rounded-tr"><i className="fa fa-search"></i></button>
        </div>
      )}

      {(tracks.length != 0) && (
        <div className="mt-5 w-8/12">
          <TrackHeader/>
          {tracks.map((item, i) => {
            return (
              <Track
                key={item.id}
                image_url={item.album.images[2].url}
                track_title={item.name}
                artist_name={item.album.artists[0].name}
                album_name={item.album.name}
                duration={item.duration_ms}
                data={item}
              />
            );
          })}
        </div>
      )}

    </div>
  );
}

export default SpotifyMinimal;