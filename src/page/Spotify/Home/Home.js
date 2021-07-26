import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';

import { useSelector, useDispatch } from 'react-redux';
import {
    updateToken,
    selectToken,
  } from '../../../redux/tokenSlice';

const axios = require('axios');

function Home(props) {

    const dispatch = useDispatch();
    const token = useSelector(selectToken);

    function LogoutButton() {
        return (
            <div
                className="border-2 border-red-600 hover:bg-red-600 rounded-full text-red-600 hover:text-white text-sm font-medium px-3 py-1 cursor-pointer"
                onClick={() => {
                    dispatch(updateToken(null));
                    props.set_user(null);
                    window.location = 'http://localhost:3000';
            }}>
                <a className="my-1">LOGOUT</a>
            </div>
        );
    }

    function UserCard(){
        return(
            <div className="flex flex-wrap p-5 bg-sptf_card_hover rounded">
                <div className="mr-5">
                    <img src={props.user.images[0].url} title={props.user.display_name} alt="{props.album_name}" className="object-cover rounded-full w-16 h-16"/>
                </div>
                <div className="mr-5">
                    <a className="text-lg font-bold text-white">{props.user.display_name}</a>
                </div>
                <div className="text-right">
                    <LogoutButton/>
                </div>
            </div>
        )
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
        if(!token){
            if(getHashParams().access_token){
            let params = getHashParams()
            let access_token = params.access_token;
            dispatch(updateToken(access_token));
            }
        }
        if(!props.user){
            getUserInfo();
        }
    }, []);

    return (
        <>

            {(!token) && (
                <Welcome/>
            )}

            {(token && props.user) && (
                <UserCard/>
            )}

        </>
    );
}

export default Home;