import { BrowserRouter, Switch, Route } from "react-router-dom";
import SpotifyPage from "../page/Spotify/Base";
import LoginPage from "../page/Spotify/Base/LoginPage";
import Logout from "../page/Spotify/Base/Logout";

function AppRouter(){

    const route_list = [
        {
            url: ["/","/home"],
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
    ];

    return(
        <BrowserRouter>
            <Switch>

                <Route path="/login" exact={true} component={LoginPage}/>
                <Route path="/logout" exact={true} component={Logout}/>

                { route_list.map((item) => {
                    return (
                        <Route path={item.url} exact={true}>
                            {/* { token ? item.page : <Redirect to="/login"/>} */}

                            {item.page}
                        </Route>
                    );
                })}
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;