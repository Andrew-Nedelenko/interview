import { render, screen } from '@testing-library/react';
import { Home } from './pages/Home';

test('renders without fail', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
