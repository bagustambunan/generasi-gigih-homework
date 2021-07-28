import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SpotifyPage from "../page/Spotify/Base";

function AppRouter(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}>
                    <div className="bg-sptf_dark_main min-h-screen">
                        <SpotifyPage/>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;