import { useDispatch } from 'react-redux';
import { removeToken } from '../../redux/tokenSlice';
import { rootUrl } from '../../libs/values';

function Logout() {
  const dispatch = useDispatch();
  dispatch(removeToken());
  window.location = rootUrl;
}

export default Logout;
