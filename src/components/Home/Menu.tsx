import { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveMenu, selectActiveMenu } from '../../redux/activeMenuSlice';
import { menuType } from '../../libs/types';

function Menu({ view, setView }: menuType) {
  const dispatch = useDispatch();
  const activeMenu = useSelector(selectActiveMenu);

  function goTo(menu: string, e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    dispatch(setActiveMenu(menu));
    setView(menu);
  }

  const menuList = [
    {
      name: 'home',
      text: 'Home',
      icon: 'fa-home',
    },
    {
      name: 'search',
      text: 'Search',
      icon: 'fa-search',
    },
    {
      name: 'playlists',
      text: 'Playlists',
      icon: 'fa-headphones-alt',
    },
  ];

  menuList.forEach((item) => {
    if (item.name === view) dispatch(setActiveMenu(view));
  });

  return (
    <div className="menu">

      { menuList.map((item) => (
        <div
          key={item.name}
          className={`${activeMenu === item.name ? 'menu-list-active ' : ''} menu-list`}
        >
          <a
            onClick={(e) => { goTo(item.name, e); }}
            href={`${item.name}`}
          >
            <i className={`fa ${item.icon}`} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Menu;
