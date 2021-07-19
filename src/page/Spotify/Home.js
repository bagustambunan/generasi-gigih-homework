import React from 'react';
import data from '../../data/data_playlists_all'
import Track from '../../components/Track';

class Home extends React.Component {

    render() {
        
        return (
            <>
            
            <div className="flex flex-wrap">
                {
                data.map((item) => {
                return (
                    <>
                    <Track
                        key={item.album.id}
                        image_url={item.album.images[0].url}
                        track_title={item.name}
                        artist_name={item.album.artists[0].name}
                        album_name={item.album.name}
                    />
                    </>
                );
                })}
                
            </div>

            </>
        );
    }
}

export default Home;