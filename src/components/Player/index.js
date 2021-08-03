import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme, selectTheme } from "../../redux/themeSlice";

function Player() {

  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const [mode, set_mode] = useState(theme);

  function changeTheme(){
    if(mode){
      dispatch(setTheme(false));
    }
    else{
      dispatch(setTheme(true));
    }
  }

  useEffect(() => {
    set_mode(theme);
  }, [theme]);

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