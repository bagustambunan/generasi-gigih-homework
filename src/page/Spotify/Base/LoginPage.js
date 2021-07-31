import React from 'react';
import { client_id, scope, redirect_uri } from '../../../values';
import { public_url } from '../../../values';

function LoginPage(){
    
    function LoginButton() {

        let spotify_url = 'https://accounts.spotify.com/authorize';
            spotify_url += '?response_type=token';
            spotify_url += '&client_id=' + encodeURIComponent(client_id);
            spotify_url += '&scope=' + encodeURIComponent(scope);
            spotify_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

        return (
            <a
                className="bg-me_primary hover:bg-gray-600 w-52 rounded-full text-white font-medium px-1 py-2 flex cursor-pointer justify-center align-middle"
                href={spotify_url}>
                LOG IN WITH SPOTIFY
            </a>
        );
    }

    return(
        <div className="bg-me_main min-h-screen">
        <center>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <center className="inline-block align-bottom justify-center transform sm:my-8 sm:align-middle ">
                <div className="mb-10 inline-block">
                    <img src={public_url + '/img/icon.png'} alt="Icon" className="w-28"/>
                </div>
                <div className="">
                    <LoginButton/>
                </div>
            </center>
        </center>
        </div>
    )

}

export default LoginPage;