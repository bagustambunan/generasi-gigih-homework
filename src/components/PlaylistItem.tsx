import { playlistItemType } from "../types";

function Playlist({
  key, id, image, name, desc, setView, setPlaylistID}
  :playlistItemType) {
  return (
    <>
      <div
        onClick={() => {
          setView("playlistdetail");
          setPlaylistID(id);
        }}
        className="playlist-card"
      >
        <div>
          <img
            src={image}
            title={name}
            alt="{albumName}"
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
