import React from 'react';
import Track from './Track';

function TrackHeader(props) {

    function Header() {
        return(
        <div className="flex flex-wrap border-b mb-3">

            <div className="w-12 p-2 mr-2">
            
            </div>

            <div className="w-80 p-2">
                <a className="text-me_dark_quarter text-sm">TITLE</a>
            </div>

            <div className="w-80 p-2">
                <a className="text-me_dark_quarter text-sm">ALBUM</a>
            </div>

            <div className="w-24 p-2">
                <i className="text-me_dark_quarter text-sm far fa-clock"></i>
            </div>

        </div>
        )
    }

    return (
    <div className="w-10/12">
        {(props.tracks.length != 0) && (
            <Header/>
        )}

        {props.tracks.map((item, i) => {
            return (
              <Track
                key={item.id}
                image_url={item.album.images[2].url}
                track_title={item.name}
                artist_name={item.album.artists[0].name}
                album_name={item.album.name}
                duration={item.duration_ms}
                data={item}
                set_view={props.set_view}
              />
            );
        })}

    </div>
    );
}

export default TrackHeader;