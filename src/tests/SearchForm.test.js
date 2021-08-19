import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SearchForm from '../pages/Spotify/Search/SearchForm';

const myName = "Muhammad Bagus Syahputra Tambunan";

beforeEach(() => {
    render (
        <Provider store={store}>
            <SearchForm setView="test" />
        </Provider>
    )
});

// test('show what is rendered', () => {
//     screen.debug();
// });

test('clear search input form', () => {
    const searchInput = screen.getByPlaceholderText('Type anything...');
    userEvent.clear(searchInput);
    expect(searchInput).toHaveValue('');
});

test('type my name in search input form', () => {
    const searchInput = screen.getByPlaceholderText('Type anything...');
    userEvent.clear(searchInput);
    userEvent.type(searchInput, myName);
    expect(searchInput).toHaveValue(myName);
});