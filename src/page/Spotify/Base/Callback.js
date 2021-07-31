import React, { useEffect } from "react";
import { getHashParams } from "../../../utils";
import { root_url } from "../../../values";

import { useSelector, useDispatch } from "react-redux";
import { setToken, selectToken } from "../../../redux/tokenSlice";

function Callback() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  useEffect(() => {
    if (!token) {
      if (getHashParams().access_token) {
        let params = getHashParams();
        let access_token = params.access_token;
        dispatch(setToken(access_token));
      }
    }
    window.location = root_url;
  }, []);

  return "Redirecting...";
}

export default Callback;
