import React from 'react';

function LoginPage(){
    
    function LoginButton() {

        let client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        let scope = 'playlist-modify-private playlist-modify-public user-read-private playlist-read-private playlist-read-collaborative';
        let redirect_uri = 'http://localhost:3000';

        let spotify_url = 'https://accounts.spotify.com/authorize';
            spotify_url += '?response_type=token';
            spotify_url += '&client_id=' + encodeURIComponent(client_id);
            spotify_url += '&scope=' + encodeURIComponent(scope);
            spotify_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

        return (
            <a
                className="bg-sptf hover:bg-gray-600 w-52 rounded-full text-white font-medium px-1 py-1 flex cursor-pointer justify-center align-middle"
                href={spotify_url}>
                LOG IN WITH SPOTIFY
            </a>
        );
    }

    return(
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-black"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom justify-center transform sm:my-8 sm:align-middle ">
                    <div className="mb-10 inline-block">
                        <img src="spotify_mini.png" className="w-32"/>
                    </div>
                    <div className="">
                        <LoginButton/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LoginPage;