import React from 'react';
import data from '../data/data_playlist';
import Track from '../components/Track';

const Playlist = () => {

  let image_url = data.album.images[0].url;
  let track_title = data.album.name;
  let artist_name = data.album.artists[0].name;
  let album_name = data.name;

  return (
    <div className="container p-10">
      <Track image_url={image_url} track_title={track_title} artist_name={artist_name} album_name={album_name}/>
    </div>
  );
}

export default Playlist;