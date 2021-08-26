import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/tokenSlice';
import Layout from '../pages/Main/Layout';
import LoginPage from '../pages/Main/LoginPage';
import Callback from '../pages/Main/Callback';
import Logout from '../pages/Main/Logout';

function AppRouter() {
  const token = useSelector(selectToken);
  const routeList = [
    {
      id: 1,
      url: ['/', '/home'],
      page: <Layout page="home" />,
    },
    {
      id: 2,
      url: '/search',
      page: <Layout page="search" />,
    },
    {
      id: 3,
      url: '/playlists',
      page: <Layout page="playlists" />,
    },
    {
      id: 4,
      url: '/new',
      page: <Layout page="new_playlist" />,
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
