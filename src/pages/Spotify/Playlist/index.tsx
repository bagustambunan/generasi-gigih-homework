import { useState } from "react";
import PlaylistAll from "./PlaylistAll";
import NewForm from "./NewForm";
import PlaylistDetail from "./PlaylistDetail";
import TrackDetail from "../Track/TrackDetail";

import '../../../styles/playlist-page.css';

function PlaylistPage() {
  const [view, setView] = useState("playlistall");
  const [playlist_id, set_playlist_id] = useState('');

  return (
    <>
      {view === "playlistall" && (
        <PlaylistAll setView={setView} set_playlist_id={set_playlist_id} />
      )}

      {view === "newplaylist" && <NewForm setView={setView} />}

      {view === "playlistdetail" && (
        <PlaylistDetail setView={setView} playlist_id={playlist_id} />
      )}

      {view === "trackdetail" && <TrackDetail />}
    </>
  );
}

export default PlaylistPage;
