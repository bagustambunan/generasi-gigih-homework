import React from "react";
import { public_url, root_url } from "../values";

import { useSelector, useDispatch } from "react-redux";
import { setActiveMenu, selectActiveMenu } from "../redux/activeMenuSlice";

function Menu(props) {
  const dispatch = useDispatch();
  const activeMenu = useSelector(selectActiveMenu);

  function goTo(menu, e){
    e.preventDefault();
    dispatch(setActiveMenu(menu));
    props.set_view(menu);
  }

  const menu_list = [
    {
      name: "home",
      text: "Home",
      icon: "fa-home",
    },
    {
      name: "search",
      text: "Search",
      icon: "fa-search",
    },
    {
      name: "playlists",
      text: "Playlists",
      icon: "fa-headphones-alt",
    },
  ];

  menu_list.forEach((item) => {
    if(item.name === props.view) dispatch(setActiveMenu(props.view));
  });

  return (
    <div className="menu">

      {menu_list.map((item) => {
        return (
          <div
            className={`${
              activeMenu === item.name ? "menu-list-active " : ""
            } menu-list`}
          >
            <a
              onClick={(e) => { goTo(item.name, e); }}
              href={`${item.name}`}
            >
              <i className={`fa ${item.icon}`}></i>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
