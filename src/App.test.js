import { render, screen } from '@testing-library/react';
import Track from './components/TrackItem';

test('render track component', () => {
  render(<Track/>);
  screen.debug();
});

// test('inspect track component', () => {
//   render(<Track/>);
//   const gif_title = screen.getByTestId('gif_title');
//   expect(gif_title).toBeInTheDocument();
// });