import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../../redux/tokenSlice";
import { setUser, selectUser } from "../../../redux/userSlice";

import "../../../styles/base-page.css";
import "../../../styles/themes/theme.css";

const axios = require("axios");

function Home() {

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const [theme, set_theme] = useState(localStorage.getItem('theme'));
  const [accent, set_accent] = useState(localStorage.getItem('accent'));

  async function getUserInfo() {
    try {
      let url = "https://api.spotify.com/v1/me";
      await axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          dispatch(setUser(res.data));
        });
    } catch (err) {
      console.error(err);
    }
  }

  function LogoutButton() {
    return (
      <div className="btn-logout">
        <a href="/logout">LOGOUT</a>
      </div>
    );
  }

  function UserCard() {
    return (
      <div className="home-page">
        <div className="user-card">
          <div className="image">
            <img
              src={user.images[0].url}
              title={user.display_name}
              alt={user.display_name}
            />
          </div>
          <div className="info">
            <span>
              {user.display_name}
            </span>
          </div>
        </div>
        <div className="home-action">
          <ToggleMode/>
          <LogoutButton />
        </div>
        {/* <div className="home-action"> */}
          
          {/* <AccentBlue/> */}
        {/* </div> */}
      </div>
    );
  }

  function changeTheme(themeName) {
    set_theme(themeName);
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    // localStorage.removeItem('theme');
  }

  function changeAccent(accentName) {
    set_accent(accentName);
    localStorage.setItem('accent', accentName);
    document.documentElement.className = accentName;
  }

  function ToggleMode(){
    if(theme === 'theme-light')
    {
      return(
        <div
          class="btn-mode"
          onClick={() => {
            changeTheme("theme-dark");
          }}
        >
          <span>
            CHANGE TO DARK
          </span>
        </div>
      )
    }
    else
    {
      return(
        <div
          class="btn-mode"
          onClick={() => {
            changeTheme("theme-light");
          }}
        >
          <span>
            CHANGE TO LIGHT
          </span>
        </div>
      )
    }
    
  }

  function AccentBlue(){
    return(
      <div
        class="btn-mode"
        onClick={() => {
          changeAccent('accent-blue')
        }}
      >
        <span>
          BLUE
        </span>
      </div>
    )
  }

  function ResetMode(){
    return(
      <div
        class="btn-mode"
        onClick={() => {
          localStorage.removeItem('theme');
        }}
      >
        <span>
          RESET
        </span>
      </div>
    )
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return(
    <>
      {user && <UserCard />}
    </>
  );
}

export default Home;
