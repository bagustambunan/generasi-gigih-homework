import React, { useState, useEffect } from "react";
import Playlist from "../../../components/PlaylistItem";

import { useSelector } from "react-redux";
import { selectToken } from "../../../redux/tokenSlice";

import { playlistAllType } from "../../../types";

const axios = require("axios");

function PlaylistAll({set_view, set_playlist_id}:playlistAllType) {
  const token = useSelector(selectToken);

  const [playlists, set_playlists] = useState([]);

  function AddButton() {

    function goToForm(e:React.MouseEvent){
      e.preventDefault();
      set_view("newplaylist");
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
          <i className="fa fa-plus"></i>
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
        .then((res:any) => {
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
    <div className="playlist-main">
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
        {playlists.map((item:any) => {
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
              set_view={set_view}
              set_playlist_id={set_playlist_id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PlaylistAll;
