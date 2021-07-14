import React from 'react';
import data from '../data/data_playlist';

const Playlist = () => {
  return (
    <div className="container p-10">
      <div className="bg-gray-100 px-5 py-5 rounded-lg w-1/5">
        <img src={data.album.images[0].url} title={data.name} className="rounded h-40 w-full"/>
        <p className="text-base mt-2 mb-1 font-bold">{data.album.name}</p>
        <div className="">
          <p className="text-sm">Artist: {data.album.artists[0].name}</p>
          <p className="text-sm">Album: {data.name}</p>
        </div>
        <button className="bg-blue-200 w-full py-1 rounded mt-2">Select</button>
      </div>
    </div>
  );
}

export default Playlist;