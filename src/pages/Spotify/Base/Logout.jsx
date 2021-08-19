import { useDispatch } from 'react-redux';
import { removeToken } from '../../../redux/tokenSlice';
import { removeUser } from '../../../redux/userSlice';
import { rootUrl } from '../../../values';

function Logout() {
  const dispatch = useDispatch();
  dispatch(removeToken());
  dispatch(removeUser());
  window.location = rootUrl;
}

export default Logout;
