import './App.css';
import "tailwindcss/tailwind.css"
import SpotifyMinimal from './page/Spotify/Minimal';

function App() {

  const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

  return (
    <div className="bg-sptf_dark_main min-h-screen">
      <SpotifyMinimal />
    </div>
    
  );
}

export default App;
