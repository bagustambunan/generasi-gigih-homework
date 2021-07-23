import React, {useState, useEffect} from 'react';
import Playlist from '../../../components/Playlist';
const axios = require('axios');

function PlaylistAll(props) {

    const [playlists, set_playlists] = useState([]);

    async function getPlaylists() {
        try {
        //   set_playlists([]);
          let url = 'https://api.spotify.com/v1/me/playlists';
          await axios.get(url, {
            headers: {
              'Authorization': 'Bearer ' + props.auth_store
            },
          })
          .then(res => {
            set_playlists(res.data.items);
          })
        } catch (err) {
          console.error(err);
        } finally {
        //   console.log(playlists);
        }
    }

    useEffect(() => {
        getPlaylists();
    });
        
    return (

        <>

        <a className="text-lg text-white">All Playlists Here</a>

        <div className="flex flex-wrap">
            {playlists.map((item, i) => {
                return (
                    <Playlist
                        key={item.id}
                        image={item.images[0].url}
                        name={item.name}
                        desc={item.description}
                    />
                );
            })}
        </div>

        </>
    );
    
}

export default PlaylistAll;