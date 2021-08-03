import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../../redux/tokenSlice";
import { setUser, selectUser } from "../../../redux/userSlice";

import "../../../styles/base-page.css";

const axios = require("axios");

function Home() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

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

  useEffect(() => {
    getUserInfo();
  }, []);

  function LogoutButton() {
    return (
      <a
        href="/logout"
      >
        LOGOUT
      </a>
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
          <div className="btn-logout">
            <LogoutButton />
          </div>
        </div>
      </div>
    );
  }

  return <>{user && <UserCard />}</>;
}

export default Home;
