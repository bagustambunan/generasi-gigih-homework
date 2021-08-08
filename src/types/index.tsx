export type trackItemType = {
    key: string,
    image_url: string,
    track_title: string,
    artist_name: string,
    album_name: string,
    duration: string,
    data: any,
    set_view: any,
}

export type playlistItemType = {
    key: string,
    id: string,
    image: string,
    name: string,
    desc: string,
    set_view: any,
    set_playlist_id: any,
}

export type menuType = {
    view: any,
    set_view: any,
}

export type trackListType = {
    tracks: any,
    set_view: any,
}