import React from 'react';
import Track from '../../components/Track';
const axios = require('axios');

class Api extends React.Component {

    state = {
        access_token : null,
        q: 'Bryan Adams',
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

    login() {
        let client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        let scope = 'playlist-modify-private';
        let redirect_uri = 'http://localhost:3000';

        let spotify_url = 'https://accounts.spotify.com/authorize';
            spotify_url += '?response_type=token';
            spotify_url += '&client_id=' + encodeURIComponent(client_id);
            spotify_url += '&scope=' + encodeURIComponent(scope);
            spotify_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

        window.location = spotify_url;
    }

    async handleClick() {
        try {
            let url = 'https://api.spotify.com/v1/search?q='+this.state.q+'&type=track,artist';
            await axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + this.state.access_token
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

        let params = this.getHashParams();
        let access_token = params.access_token;
        if(access_token) {
            console.log("Token: " + access_token);
            this.setState({access_token: access_token});
            window.location = '#';
        }

        return (
            <>
                {(!this.state.access_token) && (
                    <div className="w-full grid justify-center align-middle">
                        <div
                            className="bg-sptf hover:bg-gray-600 w-60 rounded-full text-white font-medium px-1 py-1 flex cursor-pointer justify-center align-middle"
                            onClick={() => {this.login()}}>
                            <i className="m-2 fab fa-spotify"></i>
                            <a className="my-1">LOG IN WITH SPOTIFY</a>
                        </div>
                    </div>
                )}
            
            {(this.state.access_token) && (
                <>

                <div className="w-full">
                        <input onChange={(event) => {this.setState({q: event.target.value})}} value={this.state.q} type="text" className="bg-white px-2 py-1 rounded-bl rounded-tl w-80 mb-3" placeholder="Type anything..."></input>
                        <button onClick={() => {this.handleClick()}} className="bg-sptf hover:bg-gray-600 px-2 py-1 mb-3 text-white rounded-br rounded-tr"><i className="fa fa-search"></i></button>
                </div>

                <div className="mt-5 flex flex-wrap">
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