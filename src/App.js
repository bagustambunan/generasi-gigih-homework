import Playlists from './pages/Playlists';
import './App.css';

function App() {

  const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  console.log(spotify_client_id);

  return (
    <div className="bg-gray-800 min-h-screen">
      <Playlists/>
    </div>
    
  );
}

export default App;
