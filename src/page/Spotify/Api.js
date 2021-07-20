import React from 'react';
const axios = require('axios');

class Api extends React.Component {

    state = {
        access_token : '',
        f_title: '',
        f_desc: '',
        f_artist: '',
        data_diperoleh: [],
    }

    generateRandomString(length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < length; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    async handleClick(access_token) {
        try {
            await axios.get(`https://api.spotify.com/v1/search?q=love&type=track`, {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                },
            })
            .then(res => {
                console.log(res.data.tracks.items);
                this.setState({data_diperoleh: res.data.tracks});
            })
        } catch (err) {
            console.error(err);
        } finally {

        }
    }

    render() {

        var stateKey = 'spotify_auth_state';

        var client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        var scope = 'playlist-modify-private';
        var redirect_uri = 'http://localhost:3000/callback';
        var state = this.generateRandomString(16);

        var spotify_url = 'https://accounts.spotify.com/authorize';
            spotify_url += '?response_type=token';
            spotify_url += '&client_id=' + encodeURIComponent(client_id);
            spotify_url += '&scope=' + encodeURIComponent(scope);
            spotify_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
            spotify_url += '&state=' + encodeURIComponent(state);

        var params = this.getHashParams();

        var access_token = params.access_token,
            state = params.state,
            storedState = localStorage.getItem(stateKey);

        if(access_token) {
            console.log("Token: " + access_token);
            // this.handleClick(access_token);
        }
        

        // if (access_token && (state == null || state !== storedState)) {
        //     alert('There was an error during the authentication');
        // } else {
        //     localStorage.removeItem(stateKey);
        //     if (access_token) {
        //     document.ajax({
        //         url: 'https://api.spotify.com/v1/me',
        //         headers: {
        //             'Authorization': 'Bearer ' + access_token
        //         },
        //         success: function(response) {
        //             console.log("Hasil response: " + response);
        //         }
        //     });
        //     } else {
        //         console.log("Gagal bro");
        //     }
        // }

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
                        <input onChange={(event) => {this.setState({f_title: event.target.value})}} type="text" className="bg-white px-2 py-1 rounded w-80 mb-3" placeholder="Title"></input>
                        <br/>
                        <input onChange={(event) => {this.setState({f_desc: event.target.value})}} type="text" className="bg-white px-2 py-1 rounded w-80 mb-3" placeholder="Description"></input>
                        <br/>
                        <input onChange={(event) => {this.setState({f_artist: event.target.value})}} type="text" className="bg-white px-2 py-1 rounded w-80 mb-3" placeholder="Artist"></input>
                        <br/>
                        <button onClick={() => {this.handleClick(access_token)}} className="bg-purple-600 px-2 py-1 rounded w-80 mb-3 text-white">Search</button>
                    </form>
                </div>

                </>
            )}
            </>
        );
    }
}

export default Api;