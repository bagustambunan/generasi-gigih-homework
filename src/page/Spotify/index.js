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
      page: <Home/>
    },
    {
      name: "recent",
      text: "Recent",
      page: <Recent/>
    },
    {
      name: "api",
      text: "Explore",
      page: <Api/>
    }
  ]

  const Page = () => {
    const selected_page = menu.filter(item => item.name === view);
    return selected_page[0].page;
  }

  return (
    <div className="p-10">

      <div className="mb-5 grid justify-center">
        <img src="spotify.png" className="w-40" alt="logo"/>
      </div>

      <div className="w-full mt-8 mb-5 text-left">
        { menu.map((item) => {
          return (
          <a className={`mr-5 text-2xl font-bold mb-5 ${view===item.name ? "text-gray-100" : "text-gray-600 hover:text-sptf"}`}
            href={`#${item.name}`}  onClick={() => {setView(item.name)}} >{item.text}</a>
          );
        })}
      </div>

      <Page/>
      
    </div>
  );
}

export default SpotifyPage;