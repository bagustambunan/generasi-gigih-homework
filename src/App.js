import './App.css';
import "tailwindcss/tailwind.css"
import SpotifyPage from "./page/Spotify";

function App() {

  const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

  return (
    <div className="bg-sptf_dark_main min-h-screen">
      <SpotifyPage />
    </div>
    
  );
}

export default App;
