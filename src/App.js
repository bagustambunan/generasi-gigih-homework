import SpotifyPage from "./page/Spotify";

function App() {

  const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  console.log(spotify_client_id);

  return (
    <div className="bg-gray-800 min-h-screen">
      <SpotifyPage />
    </div>
    
  );
}

export default App;
