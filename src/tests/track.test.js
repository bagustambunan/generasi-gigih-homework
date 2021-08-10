import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import store from '../redux/store';

import Track from '../components/TrackItem';

test('render track component', () => {
  render(
    <Provider store={store}>
      <Track/>
    </Provider>
  );
  screen.debug();
});

test('test track component: album image', () => {
  render(
    <Provider store={store}>
      <Track/>
    </Provider>
  );
  const album_img = screen.getByAltText("Album image")
  expect(album_img).toBeInTheDocument();
});

test('test track component: duration text', () => {
  render(
    <Provider store={store}>
      <Track/>
    </Provider>
  );
  const duration_text = screen.getByText(/:/i)
  expect(duration_text).toBeInTheDocument();
});