import React from 'react';
import data from '../data/data_playlist';
import Track from '../components/Track';

const Playlists = () => {

  let image_url = data.album.images[0].url;
  let track_title = data.album.name;
  let artist_name = data.album.artists[0].name;
  let album_name = data.name;

  return (
    <div className="container p-10">
      <div className="my-3">
        <h1 className="text-4xl text-white font-bold">Playlists</h1>
      </div>
      <div className="mt-10 mb-3">
        <h1 className="text-xl text-white">Recently played</h1>
      </div>
      <div className="flex">
        <Track image_url={image_url} track_title={track_title} artist_name={artist_name} album_name={album_name}/>
        <Track image_url={image_url} track_title={track_title} artist_name={artist_name} album_name={album_name}/>
        <Track image_url={image_url} track_title={track_title} artist_name={artist_name} album_name={album_name}/>
      </div>
    </div>
  );
}

export default Playlists;