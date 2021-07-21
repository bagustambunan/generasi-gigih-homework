import React from 'react';
import data from '../../data/data_playlist'
import Track from '../../components/Track';

function Recent() {
        
    return (
        <>
        
        <div className="flex flex-wrap">
            <Track
                image_url={data.album.images[0].url}
                track_title={data.name}
                artist_name={data.album.artists[0].name}
                album_name={data.album.name}
                data={data}
            />
        </div>

        </>
    );
    
}

export default Recent;