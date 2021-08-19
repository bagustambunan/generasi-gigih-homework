import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/tokenSlice';
import SpotifyPage from '../pages/Spotify/Base';
import LoginPage from '../pages/Spotify/Base/LoginPage';
import Callback from '../pages/Spotify/Base/Callback';
import Logout from '../pages/Spotify/Base/Logout';

function AppRouter() {
  const token = useSelector(selectToken);
  const routeList = [
    {
      id: 1,
      url: ['/', '/home'],
      page: <SpotifyPage page="home" />,
    },
    {
      id: 2,
      url: '/search',
      page: <SpotifyPage page="search" />,
    },
    {
      id: 3,
      url: '/playlists',
      page: <SpotifyPage page="playlists" />,
    },
    {
      id: 4,
      url: '/new',
      page: <SpotifyPage page="new_playlist" />,
    },
  ];

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true} component={LoginPage} />
        <Route path="/callback" exact={true} component={Callback} />
        <Route path="/logout" exact={true} component={Logout} />

        {routeList.map((item) => (
          <Route path={item.url} exact={true} key={item.id}>
            {token ? item.page : <Redirect to="/login" />}
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
