export type trackItemType = {
    key: string,
    imageUrl: string,
    trackTitle: string,
    artistName: string,
    albumName: string,
    duration: string,
    data: any,
    setView: React.Dispatch<React.SetStateAction<string>>,
    selectMode: boolean,
    highlightTracks: Array<string>,
    setHighlightTracks: any,
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
    setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>,
    selectedUris: Array<string>,
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