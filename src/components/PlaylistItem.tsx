import { playlistItemType } from "../types";

function Playlist({
  key, id, image, name, desc, setView, set_playlist_id}
  :playlistItemType) {
  return (
    <>
      <div
        onClick={() => {
          setView("playlistdetail");
          set_playlist_id(id);
        }}
        className="playlist-card"
      >
        <div>
          <img
            src={image}
            title={name}
            alt="{album_name}"
          />
        </div>
        <div className="detail">
          <p>
            {name}
          </p>
        </div>
      </div>
    </>
  );
}

export default Playlist;
