import React, {useState, useEffect} from 'react';
import Playlist from '../../../components/Playlist';

import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../../redux/tokenSlice';

const axios = require('axios');

function PlaylistAll(props) {

    const token = useSelector(selectToken);

    const [playlists, set_playlists] = useState([]);

    function AddButton(){

      function handleAddButton(){
        props.set_view("newplaylist");
      }

      return(
        <div className="p-2">
          <a
            // onClick={() => {handleAddButton()}}
            href="/playlists/new"
            title="Create new playlist"
            className="cursor-pointer text-white py-2 px-5 rounded-full border-2 border-me_main hover:border-me_primary hover:text-me_primary ">
            <i className="text-sm fa fa-plus mr-1"></i> Create new playlist
          </a>
        </div>
      );
    }

    async function getPlaylists() {
        try {
          await axios.get("https://api.spotify.com/v1/me/playlists?limit=50", {
            headers: {
              'Authorization': 'Bearer ' + token
            },
          })
          .then(res => {
            set_playlists(res.data.items);
          })
        } catch (err) {
          console.error(err);
        }
    }

    useEffect(() => {
        getPlaylists();
      }, []);
        
    return (

        <>

        <div className="flex flex-wrap w-10/12 my-10">
          <div className="w-6/12">
            <a className="text-2xl text-white font-bold">My playlists</a>
          </div>
          <div className="w-6/12 text-right">
            <AddButton/>
          </div>
        </div>
        

        <div className="flex flex-wrap">
            {playlists.map((item, i) => {
                let image="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                if(item.images[0]){
                  image = item.images[0].url;
                }
                return (
                    <Playlist
                        key={item.id}
                        id={item.id}
                        image={image}
                        name={item.name}
                        desc={item.description}
                        set_view={props.set_view}
                        set_playlist_id={props.set_playlist_id}
                    />
                );
            })}
        </div>

        </>
    );
    
}

export default PlaylistAll;