import React, { useState } from 'react';
import Home from './Home';
import Recent from './Recent';

const SpotifyPage = () => {

  const [view, setView] = useState("home");

  const Page = () => {
    switch(view){
        case "home":
            return <Home/>;
        case "recent":
            return <Recent/>;
        default:
            return <Home/>;
    }
  }

  return (
    <div className="p-10">

      <div className="mb-5 grid justify-center">
        <img src="spotify.png" className="w-40" alt="logo"/>
      </div>

      <div className="w-full mt-8 mb-5 text-left">
          <a className={`text-2xl font-bold mb-5 cursor-pointer ${view==="home" ? "text-gray-100" : "text-gray-600 hover:text-green-500"}`}
              onClick={() => {setView("home")}} >Home</a>
          <a className={`ml-3 text-2xl font-bold mb-5 cursor-pointer ${view==="recent" ? "text-gray-100" : "text-gray-600 hover:text-green-500"}`}
              onClick={() => {setView("recent")}} >Recent</a>
      </div>

      <Page/>
      
    </div>
  );
}

export default SpotifyPage;