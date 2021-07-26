import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { updateToken } from '../../../redux/tokenSlice';
import { updateUser, selectUser } from '../../../redux/userSlice';

function Home(props) {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    function LogoutButton() {
        return (
            <div
                className="border-2 border-red-600 hover:bg-red-600 rounded-full text-red-600 hover:text-white text-sm font-medium px-3 py-1 cursor-pointer"
                onClick={() => {
                    dispatch(updateToken(null));
                    dispatch(updateUser(null));
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
                    <img src={user.images[0].url} title={user.display_name} alt={user.display_name} className="object-cover rounded-full w-16 h-16"/>
                </div>
                <div className="mr-5">
                    <a className="text-lg font-bold text-white">{user.display_name}</a>
                </div>
                <div className="text-right">
                    <LogoutButton/>
                </div>
            </div>
        )
    }

    return (
        <>

            <UserCard/>

        </>
    );
}

export default Home;