import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToken, selectToken } from '../../../redux/tokenSlice';
import { getHashParams } from '../../../utils/helpers';
import { rootUrl } from '../../../values';

function Callback() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  useEffect(() => {
    if (!token) {
      if (getHashParams().access_token) {
        const params = getHashParams();
        const accessToken = params.access_token;
        dispatch(setToken(accessToken));
      }
    }
    window.location = rootUrl;
  }, []);

  return 'Redirecting...';
}

export default Callback;
