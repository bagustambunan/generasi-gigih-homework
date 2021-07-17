import React from 'react';
import data from '../data/data_playlists_all';
import Track from '../components/Track';

const Playlists = () => {

  // console.log(data);

  return (
    <div className="container p-10">
      <div className="my-3">
        <h1 className="text-4xl text-white font-bold">Playlists</h1>
      </div>
      <div className="mt-10 mb-4">
        <h1 className="text-xl text-white">Recently played</h1>
      </div>
      <div className="flex">
        {
        data.map((item, index) => {
          return (
            <div>
              <Track
                key={index}
                id={index}
                image_url={item.album.images[0].url}
                track_title={item.album.name}
                artist_name={item.album.artists[0].name}
                album_name={item.name}
              />
              <p>{index+1}</p>
            </div>
          );
        })}
        
      </div>
    </div>
    // "All"
  );
}

export default Playlists;