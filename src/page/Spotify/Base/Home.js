import React from 'react';
import { root_url } from '../../../values';

import { useSelector, useDispatch } from 'react-redux';
import { setToken, removeToken } from '../../../redux/tokenSlice';
import { setUser, removeUser, selectUser } from '../../../redux/userSlice';

function Home() {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    function LogoutButton() {
        return (
            <a
                href="/logout"
                className="my-1 border-2 border-red-600 hover:bg-red-600 rounded-full text-red-600 hover:text-white text-sm font-medium px-3 py-1 cursor-pointer"
                >LOGOUT
            </a>
           
        );
    }

    function UserCard(){
        return(
            <div className="flex flex-wrap p-5 bg-me_card rounded w-4/12">
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