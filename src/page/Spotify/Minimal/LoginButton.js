import React, { useState } from 'react';

function LoginButton() {

    let client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    let scope = 'playlist-modify-private user-read-private';
    let redirect_uri = 'http://localhost:3000';

    let spotify_url = 'https://accounts.spotify.com/authorize';
        spotify_url += '?response_type=token';
        spotify_url += '&client_id=' + encodeURIComponent(client_id);
        spotify_url += '&scope=' + encodeURIComponent(scope);
        spotify_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    return (
        <div className="w-full grid justify-center align-middle">
            <div
                className="bg-sptf hover:bg-gray-600 w-60 rounded-full text-white font-medium px-1 py-1 flex cursor-pointer justify-center align-middle"
                onClick={() => {window.location = spotify_url}}>
                <i className="m-2 fab fa-spotify"></i>
                <a className="my-1">LOG IN WITH SPOTIFY</a>
            </div>
        </div>
    );
}

export default LoginButton;