import logo from './logo.svg';
import './App.css';
import Playlist from './pages/Playlist';

function App() {

  const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  console.log(spotify_client_id);

  return (
    <Playlist/>
  );
}

export default App;
