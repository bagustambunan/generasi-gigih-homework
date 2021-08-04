import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectToken } from "../../../redux/tokenSlice";
import { selectUser } from "../../../redux/userSlice";

const axios = require("axios");

function NewForm(props) {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const [form, set_form] = useState({
    title: "",
    desc: "",
  });

  async function doCreate() {
    try {
      let url = "https://api.spotify.com/v1/users/" + user.id + "/playlists";
      await axios.post(
        url,
        {
          name: form.title,
          description: form.desc,
          public: "false",
          collaborative: "false",
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    } catch (err) {
      console.error(err);
    } finally {
      alert("A new playlist created succesfully");
      props.set_view("playlistall");
    }
  }

  function handleOnchange(e) {
    const name = e.target.name;
    const value = e.target.value;
    set_form({ ...form, [name]: value });
  }

  function handleSubmit() {
    if (form.title.length < 10) {
      alert("Title must be at least 10 characters");
    } else if (form.desc.length < 20) {
      alert("Description must be at least 20 characters");
    } else {
      doCreate();
    }
  }

  return (
    <div className="form-page">
      <div className="form-header">
        <span>Create new playlist</span>
      </div>

      <form onSubmit={() => { handleSubmit() }}>
        <div className="f-title">
          <input
            onChange={(e) => { handleOnchange(e) }}
            name="title"
            value={form.title}
            minlength="10"
            required
            type="text"
            placeholder="Title..."
          />
        </div>
        <div className="f-desc">
          <textarea
            onChange={(e) => { handleOnchange(e) }}
            name="desc"
            value={form.desc}
            minlength="20"
            required
            placeholder="Description..."
          ></textarea>
        </div>
        <div className="f-submit">
          <button className="btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewForm;
