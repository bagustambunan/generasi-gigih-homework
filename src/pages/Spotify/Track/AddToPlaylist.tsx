import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectToken } from "../../../redux/tokenSlice";
import { selectSelectedTrack } from "../../../redux/selectedTrackSlice";

import { addToPlaylistType } from "../../../types";

const axios = require("axios");

function AddToPlaylist({set_show_add_modal}:addToPlaylistType) {
  const token = useSelector(selectToken);
  const selecedTrack = useSelector(selectSelectedTrack);

  const [playlists, set_playlists] = useState([]);
  const [selected_playlist_id, set_selected_playlist_id] = useState('');

  async function getPlaylists() {
    try {
      await axios
        .get("https://api.spotify.com/v1/me/playlists", {
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

  async function doAdd() {
    if (selected_playlist_id) {
      try {
        let url =
          "https://api.spotify.com/v1/playlists/" +
          selected_playlist_id +
          "/tracks?uris=" +
          selecedTrack.uri;
        await axios.post(
          url,
          {},
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
      } catch (err) {
        console.error(err);
      } finally {
        alert("Track added to playlist successfully");
        set_show_add_modal(false);
      }
    }
  }

  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-header">
          <span>Add track to playlist</span>
        </div>
        <div className="modal-body">
          <select
            onChange={(e:React.FormEvent<HTMLSelectElement>) => {
              set_selected_playlist_id(e.currentTarget.value);
            }}
            className="bg-me_main text-me_dark_quarter py-3 px-3 rounded w-80"
          >
            <option value="" disabled selected>
              Select a playlist
            </option>
            {playlists.map((item: any) => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
        </div>
        <div className="modal-action">
          <button onClick={() => {doAdd()}} type="button" className="btn btn-primary">Done</button>
          <button onClick={() => {set_show_add_modal(false)}} type="button" className="btn btn-secondary">Cancel</button>
        </div>
      </div>
      
    </div>
  );
}

export default AddToPlaylist;
