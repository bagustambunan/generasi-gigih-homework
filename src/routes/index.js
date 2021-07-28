import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SpotifyPage from "../page/Spotify/Base";
import LoginPage from "../page/Spotify/Base/LoginPage";

function AppRouter(){

    const route_list = [
        {
            url: "/",
            page: <SpotifyPage page="home"/>
        },
        {
            url: "/home",
            page: <SpotifyPage page="home"/>
        },
        {
            url: "/search",
            page: <SpotifyPage page="search"/>
        },
        {
            url: "/playlists",
            page: <SpotifyPage page="playlists"/>
        },
        {
            url: "/playlists/new",
            page: <SpotifyPage page="new_playlist"/>
        },
        {
            url: "/login",
            page: <LoginPage/>
        },
    ];

    return(
        <BrowserRouter>
            <Switch>
                { route_list.map((item) => {
                    return (
                        <Route path={item.url} exact={true}>
                            {item.page}
                        </Route>
                    );
                })}
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;