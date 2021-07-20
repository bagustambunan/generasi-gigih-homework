import React from 'react';
import Track from '../../components/Track';
const axios = require('axios');

class Api extends React.Component {

    state = {
        access_token : '',
        f_title: 'surga',
        f_desc: '',
        f_artist: '',
        data_diperoleh: [],
    }

    getHashParams() {
        let hashParams = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    async handleClick(access_token) {
        try {
            let url = 'https://api.spotify.com/v1/search?q='+this.state.f_title+'&type=track,artist';
            await axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                },
            })
            .then(res => {
                console.log(res.data.tracks.items);
                this.setState({data_diperoleh: res.data.tracks.items});
            })
        } catch (err) {
            console.error(err);
        } finally {

        }
    }

    render() {

        let client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        let scope = 'playlist-modify-private';
        let redirect_uri = 'http://localhost:3000';

        let spotify_url = 'https://accounts.spotify.com/authorize';
            spotify_url += '?response_type=token';
            spotify_url += '&client_id=' + encodeURIComponent(client_id);
            spotify_url += '&scope=' + encodeURIComponent(scope);
            spotify_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

        let params = this.getHashParams();
        let access_token = params.access_token;
        if(access_token) {
            console.log("Token: " + access_token);
        }

        return (
            <>
                <a
                    href={spotify_url}
                    className="bg-green-500 text-white px-2 py-4"
                >Log in with Spotify
                </a>

                <br/><br/>
                <a className="text-white">URL:<br/>{spotify_url}</a>
                <br/><br/>
            
            {(access_token) && (
                <>
                <a className="text-white">Access token:<br/>{access_token}</a>

                <div className="bg-gray-600 px-5 py-5 rounded-lg w-full">
                    <form>
                        <input onChange={(event) => {this.setState({f_title: event.target.value})}} value={this.state.f_title} type="text" className="bg-white px-2 py-1 rounded w-80 mb-3" placeholder="Title"></input>
                        <br/>
                        {/* <input onChange={(event) => {this.setState({f_desc: event.target.value})}} type="text" className="bg-white px-2 py-1 rounded w-80 mb-3" placeholder="Description"></input>
                        <br/>
                        <input onChange={(event) => {this.setState({f_artist: event.target.value})}} type="text" className="bg-white px-2 py-1 rounded w-80 mb-3" placeholder="Artist"></input>
                        <br/> */}
                        <button onClick={() => {this.handleClick(access_token)}} className="bg-purple-600 px-2 py-1 rounded w-80 mb-3 text-white">Search</button>
                    </form>
                </div>

                <div className="flex flex-wrap">
                {
                this.state.data_diperoleh.map((item) => {
                return (
                    <>
                    <Track
                        key={item.album.id}
                        image_url={item.album.images[0].url}
                        track_title={item.name}
                        artist_name={item.album.artists[0].name}
                        album_name={item.album.name}
                    />
                    </>
                );
                })}
                
            </div>

                </>
            )}
            </>
        );
    }
}

export default Api;