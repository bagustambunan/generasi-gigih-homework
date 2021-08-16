export type trackItemType = {
    key: string,
    image_url: string,
    track_title: string,
    artist_name: string,
    album_name: string,
    duration: string,
    data: any,
    set_view: React.Dispatch<React.SetStateAction<string>>,
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
    set_view: React.Dispatch<React.SetStateAction<string>>,
    set_playlist_id: React.Dispatch<React.SetStateAction<string>>,
}

export type menuType = {
    view: any,
    set_view: React.Dispatch<React.SetStateAction<string>>,
}

export type trackListType = {
    tracks: any,
    set_view: React.Dispatch<React.SetStateAction<string>>,
}

export type searchFormType = {
    set_view: React.Dispatch<React.SetStateAction<string>>,
}

export type addToPlaylistType = {
    set_show_add_modal: React.Dispatch<React.SetStateAction<boolean>>,
}

export type newFormType = {
    set_view: React.Dispatch<React.SetStateAction<string>>,
}

export type playlistAllType = {
    set_view: React.Dispatch<React.SetStateAction<string>>,
    set_playlist_id: React.Dispatch<React.SetStateAction<string>>,
}

export type playlistDetailType = {
    set_view: React.Dispatch<React.SetStateAction<string>>,
    playlist_id: string,
}