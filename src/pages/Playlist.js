import React from 'react';
import data from '../data/data_playlist'

class Playlist extends React.Component {

    render() {
        return (
            <div class="box" id="box_playlists">
                <div id="box_img">
                    <img src={data.album.images[0].url} alt="Album image"/>
                </div>
                <div>
                    <p id="text_title">{data.album.name}</p>
                </div>
                <div>
                    <p id="text_artist">{data.album.artists[0].name}</p>
                </div>
                <div>
                    <p id="text_album">{data.name}</p>
                </div>
                <div>
                    <button>Select</button>
                </div>
            </div>
        );
    }
}

export default Playlist;