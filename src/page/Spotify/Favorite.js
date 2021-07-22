import React, { useContext } from 'react';
import Track from '../../components/Track';
import {
    useTrackContext,
    addTrack,
    removeTrack,
    clearAll
  } from '../../contexts/TrackContext';

function Favorite() {
    
    const { items, dispatch } = useTrackContext();

    console.log("Data dari favorite: ");
    console.log(items);
        
    return (
        <a className="text-white">
        
        "Favorite page"
        <br/>
        
        {items.map((item, index) => (
            <Track
                key={item.album.id}
                image_url={item.album.images[0].url}
                track_title={item.name}
                artist_name={item.album.artists[0].name}
                album_name={item.album.name}
                data={item}
            />
        ))}


        </a>
    );
    
}

export default Favorite;