import React, { useState } from 'react';
import Home from './Home';
import Recent from './Recent';
import Api from './Api';

const SpotifyPage = () => {

  const [view, setView] = useState("api");
  const menu = [
    {
      name: "home",
      text: "Home",
      icon: "fa-home",
      page: <Home/>
    },
    {
      name: "recent",
      text: "Recent",
      icon: "fa-play-circle",
      page: <Recent/>
    },
    {
      name: "api",
      text: "Search",
      icon: "fa-search",
      page: <Api/>
    }
  ]

  const Page = () => {
    const selected_page = menu.filter(item => item.name === view);
    return selected_page[0].page;
  }

  const Menu = () => {
    return (
      <div className="text-left">

        <div className="mb-5">
          <img src="spotify.png" className="w-40" alt="logo"/>
        </div>

        { menu.map((item) => {
          return (
            <div className="mb-2 ">
              <a className={`text-lg font-medium mb-5 ${view===item.name ? "text-gray-100" : "text-gray-600 hover:text-sptf"}`}
                href={`#${item.name}`}  onClick={() => {setView(item.name)}} >
                  <i className={`fa m-2 ${item.icon}`}></i>
                  {item.text}</a>
            </div>
          );
        })}

      </div>
    )
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

export default SpotifyPage;