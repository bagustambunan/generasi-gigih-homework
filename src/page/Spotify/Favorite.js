import React, { useContext, useState } from 'react';
import { store } from '../../data/store';
import Track from '../../components/Track';

function Favorite() {

    const globalState = useContext(store);
    const { state, dispatch } = globalState;
    const [ucapan, set_ucapan] = useState(state);

    console.log(ucapan);
        
    return (
        <a className="text-white">
        
        "Favorite page"
        <br/>
        {/* {ucapan} */}

        </a>
    );
    
}

export default Favorite;