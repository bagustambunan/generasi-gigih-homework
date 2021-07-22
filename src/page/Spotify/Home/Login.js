import React, { useState, useEffect } from 'react';

import {
    useAuthContext,
    addAuth,
    clearAuth
  } from '../../../contexts/AuthContext';

function Login() {

    const { auth_store, dispatch_auth } = useAuthContext();

    function LoginButton() {

        let client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        let scope = 'playlist-modify-private';
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

    function LogoutButton() {
        return (
            <div className="w-full grid justify-center align-middle">
                <div
                    className="bg-red-600 hover:bg-gray-600 w-60 rounded-full text-white font-medium px-1 py-1 flex cursor-pointer justify-center align-middle"
                    onClick={() => {dispatch_auth(clearAuth); window.location = 'http://localhost:3000'; }}>
                    <a className="my-1">LOGOUT</a>
                </div>
            </div>
        );
    }

    function getHashParams() {
        let hashParams = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    useEffect(() => {
        if(getHashParams().access_token){
          let params = getHashParams()
          let token = params.access_token;
          dispatch_auth(addAuth(token));
        }
    });

    
    // if(getHashParams().access_token){
    //     let params = getHashParams()
    //     let token = params.access_token;
    //     dispatch_auth(addAuth(token));
    // }

    return (
        <>

            {(!auth_store) && (
                <LoginButton/>
            )}

            {(auth_store) && (
                <LogoutButton/>
            )}

        </>
    );
}

export default Login;