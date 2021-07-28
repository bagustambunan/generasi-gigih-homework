import React from 'react';
import { root_url } from '../../../values';
import { useDispatch } from 'react-redux';
import { removeToken } from '../../../redux/tokenSlice';
import { removeUser } from '../../../redux/userSlice';

function Logout(){
    const dispatch = useDispatch();
    dispatch(removeToken());
    dispatch(removeUser());
    window.location = root_url;
}

export default Logout;