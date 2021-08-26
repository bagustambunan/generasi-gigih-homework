import { playlistItemType } from '../../libs/types';

function Playlist({
  id,
  image,
  name,
  setView,
  setPlaylistID,
} : playlistItemType) {
  return (
    <>
      <div
        onClick={() => {
          setView('playlistdetail');
          setPlaylistID(id);
        }}
        className="playlist-card"
      >
        <div>
          <img
            src={image}
            title={name}
            alt="Album"
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
