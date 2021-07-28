import React from 'react';
import { public_url, root_url } from '../values';

import { useSelector, useDispatch } from 'react-redux';
import { setActiveMenu, selectActiveMenu } from '../redux/activeMenuSlice';

function Menu() {

  const dispatch = useDispatch();
  const activeMenu = useSelector(selectActiveMenu);

  const menu_list = [
    {
      name: "/home",
      text: "Home",
      icon: "fa-home"
    },
    {
      name: "/search",
      text: "Search",
      icon: "fa-search"
    },
    {
      name: "/playlists",
      text: "Playlists",
      icon: "fa-headphones-alt"
    },
  ];

  return (
    <div className="text-left">

      <div className="my-10">
        <a href={root_url}>
          <img src={public_url + '/spotify.png'} className="w-32" alt="logo"/>
        </a>
      </div>

      { menu_list.map((item) => {
        return (
          <div className="mb-2 ">
            <a className={`text-lg font-medium mb-5 ${activeMenu===item.name ? "text-gray-100" : "text-gray-600 hover:text-sptf"}`}
              
              // onClick={() => { props.set_view(item.name) }}
              onClick={() => { dispatch(setActiveMenu(item.name)) }}
              href={`${item.name}`} 
              >
                <i className={`fa m-2 ${item.icon}`}></i>
                {item.text}</a>
          </div>
        );
      })}

    </div>
  );
}

export default Menu;