import React, {useState} from 'react';
const axios = require('axios');

function NewForm(props) {

    const [form_title, set_form_title] = useState("Dari pagi");
    const [form_desc, set_form_desc] = useState("Sampai malam");

    async function doSearch() {
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
                    'Authorization': 'Bearer ' + props.token
                    }
                }
            )
        } catch (err) {
            console.error(err);
        } finally{
            alert("A new playlist created succesfully");
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
                    className="bg-gray-600 text-gray-100 py-1 px-3 rounded w-80"
                    type="text" placeholder="Title...">
                </input>
            </div>
            <div>
                <textarea
                    onChange={(event) => {set_form_desc(event.target.value)}}
                    value={form_desc}
                    className="bg-gray-600 text-gray-100 py-1 px-3 rounded w-80"
                    placeholder="Description..."
                ></textarea>
            </div>
            <div>
                <button onClick={() => {doSearch()}} type="button" className="justify-center rounded px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700">
                Submit
                </button>
            </div>
        </form>

        </>
    );
    
}

export default NewForm;