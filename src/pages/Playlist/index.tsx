import { useState } from 'react';
import PlaylistAll from './PlaylistAll';
import NewForm from './NewForm';
import PlaylistDetail from './PlaylistDetail';
import TrackDetail from '../Track/TrackDetail';
import './style.css';

function PlaylistPage() {
  const [view, setView] = useState('playlistall');
  const [playlistID, setPlaylistID] = useState('');

  return (
    <>
      {view === 'playlistall' && (
        <PlaylistAll setView={setView} setPlaylistID={setPlaylistID} />
      )}

      {view === 'newplaylist' && <NewForm setView={setView} />}

      {view === 'playlistdetail' && (
        <PlaylistDetail setView={setView} playlistID={playlistID} />
      )}

      {view === 'trackdetail' && <TrackDetail />}
    </>
  );
}

export default PlaylistPage;
