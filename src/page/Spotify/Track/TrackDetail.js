import React,{useState,useEffect} from 'react';
import AddToPlaylist from './AddToPlaylist';
const axios = require('axios');

function TrackDetail(props) {

    const [selected_track, set_selected_track] = useState([]);
    const [is_loading, set_is_loading] = useState(true);
    const [show_add_modal, set_show_add_modal] = useState(false);

    async function getTrackInfo() {
        try {
            await axios.get("https://api.spotify.com/v1/tracks/" + props.track_id, {
            headers: {
                'Authorization': 'Bearer ' + props.token
            },
            })
            .then(res => {
                set_selected_track(res.data);
            })
        } catch (err) {
            console.error(err);
        } finally {
            set_is_loading(false);
        }
    }

    useEffect(() => {
        getTrackInfo();
        console.log(selected_track);
    }, []);

    function TesTombol(){
        return(
            <a
                onClick={() => {
                    console.log("Selected track:")
                    console.log(selected_track);
                }}
                className="cursor-pointer text-white bg-blue-500 p-2 rounded-lg">
            Tes tombol</a>
        )
    }

    function PlayButton(){
  
        return(
          <div className="mr-3">
            <a href={selected_track.external_urls.spotify} target="new"
              title="Play on Spotify"
              className="cursor-pointer text-sm text-white py-2 px-4 rounded-full bg-sptf hover:bg-gray-600">
              <i className="text-sm fa fa-play mr-1"></i> Play on Spotify
            </a>
          </div>
        );
    }

    function AddToPlaylistButton(){
  
        return(
          <div className="">
            <a onClick= {() => {
                set_show_add_modal(true);
                }}
              title="Add to playlist"
              className="cursor-pointer text-sm text-white py-2 px-4 rounded-full border-2 border-gray-400 hover:border-sptf hover:text-sptf ">
              <i className="text-sm fa fa-headphones-alt mr-1"></i> Add to playlist
            </a>
          </div>
        );
    }

    function Page(){
        if(is_loading){
            return(
                <a className="text-white">Loading...</a>
            )
        }
        else{
            return(
            <>

                {(show_add_modal) && (
                    <AddToPlaylist
                        token={props.token}
                        selected_track={selected_track}
                        set_show_add_modal={set_show_add_modal}
                    />
                )}

                <div className="flex flex-wrap w-9/12 my-10">
                    <div className="w-3/12 p-5">
                        <img src={selected_track.album.images[0].url} title={selected_track.name} alt="{props.album_name}" className="object-cover rounded w-full"/>
                    </div>
                    <div className="w-9/12 p-5">
                        <div className="mb-2">
                            <a className="text-lg text-white font-bold">{selected_track.name}</a>
                        </div>
                        <div className="mb-5">
                            <a className="text-base text-gray-300">{selected_track.album.artists[0].name}</a>
                        </div>
                        <div className="flex flex-wrap">
                            <PlayButton/><AddToPlaylistButton/>
                        </div>
                    </div>
                    
                </div>
            
            </>
            )
        }
    }

    return (
        <>
            <Page/>
            {/* <TesTombol/> */}
        </>
    );
}

export default TrackDetail;