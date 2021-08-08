import { useSelector, useDispatch } from "react-redux";
import { setTheme, selectTheme } from "../../redux/themeSlice";

function Player() {

  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  function changeTheme(){
    dispatch(setTheme(!theme));
    console.log(theme);
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