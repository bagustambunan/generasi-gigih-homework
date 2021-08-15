import { useSelector, useDispatch } from "react-redux";
import { setActiveMenu, selectActiveMenu } from "../redux/activeMenuSlice";
import { menuType } from "../types";

function Menu({view, set_view}:menuType) {
  const dispatch = useDispatch();
  const activeMenu = useSelector(selectActiveMenu);

  function goTo(menu: string, e: React.MouseEvent<HTMLElement>){
    e.preventDefault();
    dispatch(setActiveMenu(menu));
    set_view(menu);
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
    if(item.name === view) dispatch(setActiveMenu(view));
  });

  return (
    <div className="menu">

      {menu_list.map((item) => {
        return (
          <div
            key={item.name}
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
