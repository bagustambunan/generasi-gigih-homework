import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../../redux/tokenSlice";
import { setUser, selectUser } from "../../../redux/userSlice";
import { setTheme, selectTheme } from "../../../redux/themeSlice";

import "../../../styles/base-page.css";

const axios = require("axios");

function Home() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const theme = useSelector(selectTheme);

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
      </div>
    );
  }

  function ToggleMode(){
    return(
      <div
        class="btn-mode"
        onClick={() => {
          dispatch(setTheme(!theme));
          console.log(theme);
        }}
      >
        <span>
          CHANGE THEME
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
