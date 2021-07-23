import React from 'react';
import TrackHeader from '../../../components/TrackHeader';
import { useTrackContext } from '../../../contexts/TrackContext';

function Favorite() {
    
    const { track_store } = useTrackContext();
        
    return (

        <>

        <TrackHeader tracks={track_store}/>

        </>
    );
    
}

export default Favorite;