import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme, selectTheme } from "../../redux/themeSlice";
import { root_url } from "../../values";

function Player() {

  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  function changeTheme(){
    dispatch(setTheme(!theme));
    console.log(theme);
    // window.location = root_url;
  }

  return (
    <div className="player">
      <button
        onClick={() => { changeTheme() }}
        className="btn-theme"
      >Change theme</button>
    </div>
  );
}

export default Player;