import React,{useState,useEffect} from 'react';
const axios = require('axios');

function TrackDetail(props) {

    const [selected_track, set_selected_track] = useState([]);
    const [is_loading, set_is_loading] = useState(true);

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
        // console.log(selected_track);
    });

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

    function Page(){
        if(is_loading){
            return(
                <a className="text-white">Loading...</a>
            )
        }
        else{
            return(
            <>

                <div className="flex flex-wrap w-10/12 my-10">
                    <div className="w-6/12">
                        <a className="text-2xl text-white font-bold">Track detail</a>
                    </div>
                </div>

                <div className="flex flex-wrap w-full my-10">
                    <div className="mr-5">
                        <img src={selected_track.album.images[0].url} title={selected_track.name} alt="{props.album_name}" className="object-cover rounded h-40 w-40"/>
                    </div>
                    <div className="w-9/12">
                        <div className="mb-3">
                            <a className="text-2xl text-white font-bold">{selected_track.name}</a>
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
            <TesTombol/>
        </>
    );
}

export default TrackDetail;