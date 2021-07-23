import React, {useState} from 'react';
import SearchForm from './SearchForm';
import TrackDetail from '../Track/TrackDetail';

function SearchPage(props) {

    const [view, set_view] = useState("searchform");
        
    return (
        <>
            {(view==="searchform") && (
                <SearchForm
                    token={props.token}
                    fav_tracks={props.fav_tracks}
                    set_fav_tracks={props.set_fav_tracks}
                    track_id={props.track_id}
                    set_track_id={props.set_track_id}
                    set_view={set_view}
                />
            )}

            {(view==="trackdetail") && (
                <TrackDetail
                    token={props.token}
                    track_id={props.track_id}
                    set_track_id={props.set_track_id}
                />
            )}
        

        </>
    );
    
}

export default SearchPage;