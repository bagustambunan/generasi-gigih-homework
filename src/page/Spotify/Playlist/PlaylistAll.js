import React, {useState, useEffect} from 'react';
import Playlist from '../../../components/Playlist';
import NewForm from './NewForm';
const axios = require('axios');

function PlaylistAll(props) {

    const [playlists, set_playlists] = useState([]);
    const [show_form, set_show_form] = useState(false);

    function AddButton(){

      function handleAddButton(){
        props.set_view("newplaylist");
        console.log(playlists);
      }

      return(
        <div className="p-2">
          <a onClick={() => {handleAddButton()}}
            title="Create new playlist"
            className="cursor-pointer text-white py-2 px-5 rounded-full border-2 border-sptf_dark_main hover:border-sptf hover:text-sptf ">
            <i className="text-sm fa fa-plus mr-1"></i> Create new playlist
          </a>
        </div>
      );
    }

    async function getPlaylists() {
        try {
        //   set_playlists([]);
          await axios.get("https://api.spotify.com/v1/me/playlists?limit=50", {
            headers: {
              'Authorization': 'Bearer ' + props.token
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
        // console.log(playlists);
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

        {(show_form) && (
          <NewForm
            token={props.token}
            user={props.user}
            set_show_form={set_show_form}
          />
        )}
        

        <div className="flex flex-wrap">
            {playlists.map((item, i) => {
                let image="https://i.kinja-img.com/gawker-media/image/upload/s--uBGFrs9r--/c_scale,f_auto,fl_progressive,q_80,w_800/msfgxy64htxbaki9up4e.png"
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