import { Dispatch, SetStateAction } from 'react';

export type trackItemType = {
    key: string,
    imageUrl: string,
    trackTitle: string,
    artistName: string,
    albumName: string,
    duration: string,
    data: any,
    setView: Dispatch<SetStateAction<string>>,
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
    setView: Dispatch<SetStateAction<string>>,
    setPlaylistID: Dispatch<SetStateAction<string>>,
}

export type menuType = {
    view: any,
    setView: Dispatch<SetStateAction<string>>,
}

export type trackListType = {
    tracks: any,
    setView: Dispatch<SetStateAction<string>>,
}

export type searchFormType = {
    setView: Dispatch<SetStateAction<string>>,
}

export type addToPlaylistType = {
    setShowAddModal: Dispatch<SetStateAction<boolean>>,
    selectedUris: Array<string>,
}

export type newFormType = {
    setView: Dispatch<SetStateAction<string>>,
}

export type playlistAllType = {
    setView: Dispatch<SetStateAction<string>>,
    setPlaylistID: Dispatch<SetStateAction<string>>,
}

export type playlistDetailType = {
    setView: Dispatch<SetStateAction<string>>,
    playlistID: string,
}

export type spotifyPageType = {
    page: string
}

export type toggleModeType = {
    themeName: string,
    themeColor: string
}