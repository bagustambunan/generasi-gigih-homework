import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Track from '../components/TrackItem';

const imageUrl = 'https://play-lh.googleusercontent.com/v4sg6Itovu1ccaCaiHW2HwUy0vuzuy02sWXXkjxhPd-hQzVe7_FpIow48JwNMViC8Q';
const trackTitle = 'Cute Duduu';
const artistName = 'Duduu Studio';
const albumName = 'Pencil loves Paper';
const duration = 123000;
const data = 'test';
const setView = 'test';
const selectMode = 'test';
const highlightTracks = [''];
const setHighlightTracks = 'test';

beforeEach(() => {
    render (
        <Provider store={store}>
            <Track
                imageUrl={imageUrl}
                trackTitle={trackTitle}
                artistName={artistName}
                albumName={albumName}
                duration={duration}
                data={data}
                setView={setView}
                selectMode={selectMode}
                highlightTracks={highlightTracks}
                setHighlightTracks={setHighlightTracks}
            />
        </Provider>
    )
})

test('show what is rendered', () => {
    screen.debug();
});

test('check if album image rendered', () => {
    const imgElement = screen.getByAltText(albumName);
    expect(imgElement).toBeInTheDocument();
});

test('check if album image source is right', () => {
    const imgElement = screen.getByAltText(albumName);
    expect(imgElement.getAttribute('src')).toBe(imageUrl);
});

test('check if track title rendered', () => {
    const trackTitleElement = screen.getByText(trackTitle);
    expect(trackTitleElement).toBeInTheDocument();
});

test('check if artist name rendered', () => {
    const artistNameElement = screen.getByText(artistName);
    expect(artistNameElement).toBeInTheDocument();
});

test('check if album name rendered', () => {
    const albumNameElement = screen.getByText(albumName);
    expect(albumNameElement).toBeInTheDocument();
});