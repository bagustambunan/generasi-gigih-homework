import React, { useState, useEffect } from "react";
import PlaylistHeader from "../../../components/PlaylistHeader";

import { useSelector } from "react-redux";
import { selectToken } from "../../../redux/tokenSlice";

const axios = require("axios");

function PlaylistDetail(props) {
  const token = useSelector(selectToken);

  const [selected_playlist, set_selected_playlist] = useState([]);
  const [is_loading, set_is_loading] = useState(true);

  async function getTracks() {
    try {
      await axios
        .get("https://api.spotify.com/v1/playlists/" + props.playlist_id, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          set_selected_playlist(res.data);
        });
    } catch (err) {
      console.error(err);
    } finally {
      set_is_loading(false);
    }
  }

  useEffect(() => {
    getTracks();
  }, []);

  function Page() {
    if (is_loading) {
      return <span>Loading...</span>;
    } else {
      let image =
        "https://media.istockphoto.com/photos/white-headphones-with-red-heart-sign-in-the-middle-on-blue-surface-picture-id696537216";
      if (selected_playlist.images[0]) {
        image = selected_playlist.images[0].url;
      }
      return (
        <div className="detail-page">
          <div className="playlist-header">
            <div className="image">
              <img
                src={image}
                title={selected_playlist.name}
                alt="{props.album_name}"
              />
            </div>
            <div className="info">
              <div>
                <span>
                  {selected_playlist.name}
                </span>
              </div>
              <div>
                <p>
                  {selected_playlist.description}
                </p>
              </div>
            </div>
          </div>

          {selected_playlist.tracks.total !== 0 && (
            <PlaylistHeader
              tracks={selected_playlist.tracks.items}
              set_view={props.set_view}
            />
          )}
        </div>
      );
    }
  }

  return (
    <>
      <Page />
    </>
  );
}

export default PlaylistDetail;
