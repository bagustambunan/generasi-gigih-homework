import React from 'react';
import TrackHeader from '../../../components/TrackHeader';

function Favorite(props) {
        
    return (

        <>

        <TrackHeader
            tracks={props.fav_tracks}
            fav_tracks={props.fav_tracks}
            set_fav_tracks={props.set_fav_tracks}
        />

        </>
    );
    
}

export default Favorite;