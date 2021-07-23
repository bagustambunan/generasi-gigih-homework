import React, { useState, useEffect } from 'react';
const axios = require('axios');

function Login(props) {

    function LoginButton() {

        let client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        let scope = 'playlist-modify-private user-read-private playlist-read-private playlist-read-collaborative';
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
                    onClick={() => {
                        props.set_token(null);
                        props.set_user(null);
                        window.location = 'http://localhost:3000';
                }}>
                    <a className="my-1">LOGOUT</a>
                </div>
            </div>
        );
    }

    async function getUserInfo() {
        try {
          let url = 'https://api.spotify.com/v1/me';
          await axios.get(url, {
            headers: {
              'Authorization': 'Bearer ' + props.token
            },
          })
          .then(res => {
            props.set_user(res.data);
          })
        } catch (err) {
          console.error(err);
        }
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
        if(!props.token){
            if(getHashParams().access_token){
            let params = getHashParams()
            let access_token = params.access_token;
            props.set_token(access_token);
            }
        }
        if(!props.user){
            getUserInfo();
        }
        // console.log(props.user);
    });

    return (
        <>

            {(!props.token) && (
                <LoginButton/>
            )}

            {(props.token && props.user) && (
                <>
                    <a className="text-xl text-white">Halo, {props.user.display_name}</a>
                    <br/><br/>
                    <a className="text-sm text-white">{props.token}</a>
                    <br/><br/>
                    <LogoutButton/>
                </>
            )}

        </>
    );
}

export default Login;