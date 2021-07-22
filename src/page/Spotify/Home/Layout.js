import React, { useState, useEffect } from 'react';
import Login from './Login';
import Search from '../Search/Search';
import Favorite from '../Favorite/Favorite';

import {
  useAuthContext
} from '../../../contexts/AuthContext';

function Layout() {

  const [view, set_view] = useState("home");
  const { auth_store, dispatch_auth } = useAuthContext();

  let menu_list = [
    {
    name: "home",
    text: "Home",
    icon: "fa-home",
    page: <Login/>
    },
  ];

  if(auth_store){
    menu_list = [
      {
      name: "home",
      text: "Home",
      icon: "fa-home",
      page: <Login/>
      },
      {
      name: "search",
      text: "Search",
      icon: "fa-search",
      page: <Search/>
      },
      {
      name: "favorite",
      text: "Favorite",
      icon: "fa-heart",
      page: <Favorite/>
      },
    ];
  }

  function Menu() {

    useEffect(() => {
      console.log("Auth di menu: "+auth_store);
    });

    return (
      <div className="text-left">

        <div className="my-10">
          <a href="http://localhost:3000">
            <img src="spotify.png" className="w-32" alt="logo"/>
          </a>
        </div>

        { menu_list.map((item) => {
          return (
            <div className="mb-2 ">
              <a className={`text-lg font-medium mb-5 ${view===item.name ? "text-gray-100" : "text-gray-600 hover:text-sptf"}`}
                href={`#${item.name}`} 
                onClick={() => {set_view(item.name)}} >
                  <i className={`fa m-2 ${item.icon}`}></i>
                  {item.text}</a>
            </div>
          );
        })}

      </div>
    );
  }

  function Page() {
    const selected_page = menu_list.filter(item => item.name === view);
    return selected_page[0].page;
  }

  return (
    <>

      <div className="p-5 w-56 fixed object-left object-top h-screen bg-sptf_black">
        <Menu/>
      </div>

      <div className="w-full flex flex-wrap">

        <div className="w-56 border border-blue-600 ">
          {/* <Menu/> */}
        </div>

        <div className="p-5 w-10/12 border-red-600">
          <Page/>
        </div>

      </div>

    </>
  );
}

export default Layout;