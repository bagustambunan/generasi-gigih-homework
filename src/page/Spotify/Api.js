import React from 'react';

class Api extends React.Component {

    render() {

        const queryString = require('query-string');

        var client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        var client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
        var redirect_uri = 'http://localhost:3000/callback';
        var scope = 'user-read-private user-read-email';
        var spotify_url = 'https://accounts.spotify.com/authorize?' +
            queryString.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            // state: state
        });

        var url_now = window.location.href;
        var url_me = new URL(url_now);
        var access_token = url_me.searchParams.get("code");

        console.log("Access token: " + access_token);
        
        return (
            <>
            {(!access_token) && (
            
                <>
                <a
                    href={spotify_url}
                    className="bg-green-500 text-white px-2 py-4"
                >Log in with Spotify
                </a>

                <br/><br/>
                <a className="text-white">URL: {spotify_url}</a>
                
                </>
            
            )}
            {(access_token) && (
                <>
                <a className="text-white">Access token:<br/>{access_token}</a>

                <div className="bg-gray-600 px-5 py-5 rounded-lg w-full">
                    <form>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" className="bg-gray-200 px-4 py-3 roundedlg w-full" placeholder="Title"></input>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" className="bg-gray-200 px-4 py-3 roundedlg w-full" placeholder="Description"></input>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" className="bg-gray-200 px-4 py-3 roundedlg w-full" placeholder="Artist"></input>
                    </form>
                </div>

                </>
            )}
            </>
        );
    }
}

export default Api;