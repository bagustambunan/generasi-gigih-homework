import React from 'react';
import TrackHeader from '../../../components/TrackHeader';

function Favorite(props) {
        
    return (

        <>

        <div className="flex flex-wrap w-10/12 my-10">
          <div className="w-6/12">
            <a className="text-2xl text-white font-bold">Favorite tracks</a>
          </div>
        </div>

        <TrackHeader
            token={props.token}
            tracks={props.fav_tracks}
            fav_tracks={props.fav_tracks}
            set_fav_tracks={props.set_fav_tracks}
        />

        </>
    );
    
}

export default Favorite;