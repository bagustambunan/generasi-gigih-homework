import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';
const axios = require('axios');

function Home(props) {

    //

    function LogoutButton() {
        return (
            <div
                className="border-2 border-red-600 hover:bg-red-600 rounded-full text-red-600 hover:text-white text-sm font-medium px-3 py-1 cursor-pointer"
                onClick={() => {
                    props.set_token(null);
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

    function TesTombol(){
        return(
            <a
                onClick={() => {
                    console.log(props.user);
                }}
                className="cursor-pointer text-white bg-blue-500 p-2 rounded-lg">
            Tes tombol</a>
        )
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
    }, []);

    return (
        <>

            {(!props.token) && (
                <Welcome/>
            )}

            {(props.token && props.user) && (
                <>
                    <UserCard/>
                    {/* <br/><br/>
                    <TesTombol/> */}
                    
                </>
            )}

        </>
    );
}

export default Home;