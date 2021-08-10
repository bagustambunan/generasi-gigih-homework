import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SpotifyPage from "../pages/Spotify/Base";
import LoginPage from "../pages/Spotify/Base/LoginPage";
import Callback from "../pages/Spotify/Base/Callback";
import Logout from "../pages/Spotify/Base/Logout";

import { useSelector } from "react-redux";
import { selectToken } from "../redux/tokenSlice";

function AppRouter() {
  const token = useSelector(selectToken);

  const route_list = [
    {
      url: ["/", "/home"],
      page: <SpotifyPage page="home" />,
    },
    {
      url: "/search",
      page: <SpotifyPage page="search" />,
    },
    {
      url: "/playlists",
      page: <SpotifyPage page="playlists" />,
    },
    {
      url: "/playlists/new",
      page: <SpotifyPage page="new_playlist" />,
    },
  ];

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true} component={LoginPage} />
        <Route path="/callback" exact={true} component={Callback} />
        <Route path="/logout" exact={true} component={Logout} />

        {route_list.map((item) => {
          return (
            <Route path={item.url} exact={true}>
              {token ? item.page : <Redirect to="/login" />}
            </Route>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
