import React, { useState, useEffect } from "react";
import Playlist from "../../../components/Playlist";

import { useSelector } from "react-redux";
import { selectToken } from "../../../redux/tokenSlice";

const axios = require("axios");

function PlaylistAll(props) {
  const token = useSelector(selectToken);

  const [playlists, set_playlists] = useState([]);

  function AddButton() {

    function goToForm(e){
      e.preventDefault();
      props.set_view("newplaylist");
    }

    return (
      <div className="add-button">
        <a
          onClick={(e) => {
            goToForm(e);
          }}
          href="/playlists/new"
          title="Create new playlist"
        >
          <i className="fa fa-plus"></i> Create new playlist
        </a>
      </div>
    );
  }

  async function getPlaylists() {
    try {
      await axios
        .get("https://api.spotify.com/v1/me/playlists?limit=50", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          set_playlists(res.data.items);
        });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <>
      <div className="page-header">
        <div className="title">
          <span>
            My playlists
          </span>
        </div>
        <div className="action">
          <AddButton />
        </div>
      </div>

      <div className="page-main">
        {playlists.map((item, i) => {
          let image =
            "https://media.istockphoto.com/photos/white-headphones-with-red-heart-sign-in-the-middle-on-blue-surface-picture-id696537216";
          if (item.images[0]) {
            image = item.images[0].url;
          }
          return (
            <Playlist
              key={item.id}
              id={item.id}
              image={image}
              name={item.name}
              desc={item.description}
              set_view={props.set_view}
              set_playlist_id={props.set_playlist_id}
            />
          );
        })}
      </div>
    </>
  );
}

export default PlaylistAll;
