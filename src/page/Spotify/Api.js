import React from 'react';

class Api extends React.Component {

    render() {

        const queryString = require('query-string');

        var client_id = 'a1ad3597653f4bd9ad5d055f6f386468';
        var client_secret = '91ca44af8a2f48fcae1cc92bdca0ad44';
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
                <br/><br/>
                <a className="text-white">Access token: {access_token}</a>
                </>
            
            )}
            {(access_token) && (
                "Login berhasil"

            )}
            </>
        );
    }
}

export default Api;