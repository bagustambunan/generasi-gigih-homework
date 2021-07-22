import React, { useContext } from 'react';
import Track from '../../components/Track';
import {
    useTrackContext
  } from '../../contexts/TrackContext';

function Favorite() {
    
    const { items, dispatch } = useTrackContext();

    console.log("Data dari favorite: ");
    console.log(items);
        
    return (

        <>

        <div className="mt-5 flex flex-wrap">
        {items.map((item) => (
            <Track
                key={item.album.id}
                image_url={item.album.images[0].url}
                track_title={item.name}
                artist_name={item.album.artists[0].name}
                album_name={item.album.name}
                data={item}
            />
            )
        )}
        </div>

        </>
    );
    
}

export default Favorite;