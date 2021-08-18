import { rootUrl } from "../../../values";
import { useDispatch } from "react-redux";
import { removeToken } from "../../../redux/tokenSlice";
import { removeUser } from "../../../redux/userSlice";

function Logout() {
  const dispatch = useDispatch();
  dispatch(removeToken());
  dispatch(removeUser());
  window.location = rootUrl;
}

export default Logout;
