import React, {useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
    updateToken,
    selectToken,
  } from '../../../redux/tokenSlice';

const axios = require('axios');

function NewForm(props) {

    const dispatch = useDispatch();
    const token = useSelector(selectToken);

    const [form_title, set_form_title] = useState("");
    const [form_desc, set_form_desc] = useState("");

    async function doCreate() {
        if(form_title.length < 10){
            alert("Title must be at least 10 characters");
        }
        else if(form_desc < 20) {
            alert("Description must be at least 20 characters");
        }
        else{
            try {
                let url = "https://api.spotify.com/v1/users/"+ props.user.id +"/playlists";
                await axios.post(url, 
                    {
                        name: form_title,
                        description: form_desc,
                        public: 'false',
                        collaborative: 'false'
                    },
                    {
                        headers: {
                        'Authorization': 'Bearer ' + token
                        }
                    }
                )
            } catch (err) {
                console.error(err);
            } finally{
                alert("A new playlist created succesfully");
                props.set_view("playlistall");
            }
        }
    }
        
    return (
        <>

        <div className="flex flex-wrap w-10/12 my-10">
          <div className="w-6/12">
            <a className="text-2xl text-white font-bold">Create new playlist</a>
          </div>
        </div>

        <form>
            <div className="mb-2">
                <input
                    onChange={(event) => {set_form_title(event.target.value)}}
                    value={form_title}
                    minlength="10"
                    required
                    className="bg-gray-600 text-gray-100 py-1 px-3 rounded w-5/12"
                    type="text" placeholder="Title...">
                </input>
            </div>
            <div>
                <textarea
                    onChange={(event) => {set_form_desc(event.target.value)}}
                    value={form_desc}
                    minlength="20"
                    required
                    className="bg-gray-600 text-gray-100 py-1 px-3 rounded w-5/12 h-24"
                    placeholder="Description..."
                ></textarea>
            </div>
            <div>
                <button onClick={() => {doCreate()}} type="button" className="justify-center rounded px-4 py-2 bg-sptf hover:bg-gray-600 text-base font-medium text-white">
                Submit
                </button>
            </div>
        </form>

        </>
    );
    
}

export default NewForm;