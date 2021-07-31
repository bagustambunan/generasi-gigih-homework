import React, {useState} from 'react';

import { useSelector } from 'react-redux';
import { selectToken } from '../../../redux/tokenSlice';
import { selectUser } from '../../../redux/userSlice';

const axios = require('axios');

function NewForm(props) {

    const token = useSelector(selectToken);
    const user = useSelector(selectUser);

    const [form, set_form] = useState({
        title: '',
        desc: '',
    });

    async function doCreate() {
        try {
            let url = "https://api.spotify.com/v1/users/"+ user.id +"/playlists";
            await axios.post(url, 
                {
                    name: form.title,
                    description: form.desc,
                    public: 'false',
                    collaborative: 'false'
                },
                {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }
            )
        } catch(err) {
            console.error(err);
        } finally {
            alert("A new playlist created succesfully");
            props.set_view("playlistall");
        }
    }

    function handleOnchange(e){
        const name = e.target.name
        const value = e.target.value
        set_form({...form, [name] : value })
    }

    function handleSubmit(){
        if(form.title.length < 10){
            alert("Title must be at least 10 characters");
        }
        else if(form.desc.length < 20) {
            alert("Description must be at least 20 characters");
        }
        else{
            doCreate();
        }
    }
        
    return (
        <div className="bg-me_card p-5 shadow rounded-lg">

        <div className="flex flex-wrap w-10/12 my-10">
          <div className="w-6/12">
            <span className="text-2xl text-me_dark_half font-bold">Create new playlist</span>
          </div>
        </div>

        <form onSubmit={() => {handleSubmit()}}>
            <div className="mb-2">
                <input
                    onChange={(e) => {handleOnchange(e)}}
                    name="title"
                    value={form.title}
                    minlength="10"
                    required
                    className="bg-me_main text-me_dark_half py-1 px-3 rounded w-5/12"
                    type="text" placeholder="Title..."/>
            </div>
            <div>
                <textarea
                    onChange={(e) => {handleOnchange(e)}}
                    name="desc"
                    value={form.desc}
                    minlength="20"
                    required
                    className="bg-me_main text-me_dark_half py-1 px-3 rounded w-5/12 h-24"
                    placeholder="Description..."
                ></textarea>
            </div>
            <div>
                <button
                    type="submit"
                    className="mt-4 justify-center rounded px-4 py-2 bg-me_primary hover:bg-gray-600 text-base font-medium text-white">
                        Submit
                </button>
            </div>
        </form>

        </div>
    );
    
}

export default NewForm;