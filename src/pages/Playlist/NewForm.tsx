import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/tokenSlice';
import { selectUser } from '../../redux/userSlice';
import { newFormType } from '../../types';

const axios = require('axios');

function NewForm({ setView } : newFormType) {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const [form, setForm] = useState({
    title: '',
    desc: '',
  });

  async function doCreate() {
    try {
      const url = 'https://api.spotify.com/v1/users/' + user.id + '/playlists';
      await axios.post(
        url,
        {
          name: form.title,
          description: form.desc,
          public: 'false',
          collaborative: 'false',
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
    } catch (err) {
      console.error(err);
    } finally {
      alert('A new playlist created succesfully');
      setView('playlistall');
    }
  }

  function handleChange(e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit() {
    if (form.title.length < 10) {
      alert('Title must be at least 10 characters');
    } else if (form.desc.length < 20) {
      alert('Description must be at least 20 characters');
    } else {
      doCreate();
    }
  }

  return (
    <div className="form-page">
      <div className="form-header">
        <span>Create new playlist</span>
      </div>

      <form onSubmit={() => { handleSubmit(); }}>
        <div className="f-title">
          <input
            onChange={(e) => { handleChange(e); }}
            name="title"
            value={form.title}
            required
            type="text"
            placeholder="Title..."
          />
        </div>
        <div className="f-desc">
          <textarea
            onChange={(e) => { handleChange(e); }}
            name="desc"
            value={form.desc}
            required
            placeholder="Description..."
          />
        </div>
        <div className="f-submit">
          <button className="btn btn-primary" type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default NewForm;
