export type trackItemType = {
    key: string,
    image_url: string,
    track_title: string,
    artist_name: string,
    album_name: string,
    duration: string,
    data: any,
    setView: React.Dispatch<React.SetStateAction<string>>,
    select_mode: boolean,
    highlight_tracks: Array<string>,
    set_highlight_tracks: any,
}

export type playlistItemType = {
    key: string,
    id: string,
    image: string,
    name: string,
    desc: string,
    setView: React.Dispatch<React.SetStateAction<string>>,
    set_playlist_id: React.Dispatch<React.SetStateAction<string>>,
}

export type menuType = {
    view: any,
    setView: React.Dispatch<React.SetStateAction<string>>,
}

export type trackListType = {
    tracks: any,
    setView: React.Dispatch<React.SetStateAction<string>>,
}

export type searchFormType = {
    setView: React.Dispatch<React.SetStateAction<string>>,
}

export type addToPlaylistType = {
    set_show_add_modal: React.Dispatch<React.SetStateAction<boolean>>,
    selected_uris: Array<string>,
}

export type newFormType = {
    setView: React.Dispatch<React.SetStateAction<string>>,
}

export type playlistAllType = {
    setView: React.Dispatch<React.SetStateAction<string>>,
    set_playlist_id: React.Dispatch<React.SetStateAction<string>>,
}

export type playlistDetailType = {
    setView: React.Dispatch<React.SetStateAction<string>>,
    playlist_id: string,
}