import React from "react";

function Playlist(props) {
  return (
    <>
      <div
        onClick={() => {
          props.set_view("playlistdetail");
          props.set_playlist_id(props.id);
        }}
        className="bg-me_card shadow rounded-xl w-72 mr-5 mb-5 cursor-pointer hover:shadow-none border-b-4 border-transparent hover:border-me_primary"
      >
        <div className="">
          <img
            src={props.image}
            title={props.name}
            alt="{props.album_name}"
            className="object-cover rounded-t-lg h-52 w-full"
          />
        </div>
        <div className="px-5 py-5 ">
          <p className="text-base mt-2 mb-1 font-bold text-me_dark_half">
            {props.name}
          </p>
        </div>
      </div>
    </>
  );
}

export default Playlist;
