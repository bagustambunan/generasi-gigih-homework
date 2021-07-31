import React from 'react';

import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/userSlice';

function Home() {

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
            <div className="p-5 bg-me_card shadow rounded w-4/12">
                
                <div className="flex flex-wrap">
                    <div className="mr-5">
                        <img src={user.images[0].url} title={user.display_name} alt={user.display_name} className="object-cover rounded-full w-16 h-16"/>
                    </div>
                    <div className="mr-5">
                        <span className="text-lg font-bold text-me_dark_half">{user.display_name}</span>
                    </div>
                    <div className="text-right">
                        <LogoutButton/>
                    </div>
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