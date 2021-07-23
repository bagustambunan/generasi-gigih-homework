import React, { useState, useEffect } from 'react';
const axios = require('axios');

function NewForm(props){

    // console.log(props.token);

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
        }
    }

    return(
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-lg leading-6 font-medium text-white mb-5" id="modal-title">
                            Create new playlist
                            </h3>
                            <div className="mt-2">
                                
                                
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
                            </form>


                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button onClick={() => {doSearch()}} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm">
                        Submit
                        </button>
                        <button onClick={() => {props.set_show_form(false)}} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewForm;