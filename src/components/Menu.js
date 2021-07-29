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
    <div className="bg-me_card rounded-xl h-5/6 text-left shadow">

      <div className="px-5 py-12">
        <a href={root_url}>
          <img src={public_url + '/img/spotify.png'} className="w-32" alt="logo"/>
        </a>
      </div>

      { menu_list.map((item) => {
        return (
          <div className={`${activeMenu===item.name ? "border-l-4 border-me_primary" : ""} mb-2 py-1 px-4`}>
            <a className={`text-lg font-medium mb-5 text-me_dark_half hover:text-me_primary`}
              
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