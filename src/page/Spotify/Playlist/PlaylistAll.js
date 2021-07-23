import React, {useState, useEffect} from 'react';
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

        {playlists.map((item, i) => {
            return (
                <div>
                    <a className="text-white">{item.name}</a>
                </div>
            );
        })}

        </>
    );
    
}

export default PlaylistAll;