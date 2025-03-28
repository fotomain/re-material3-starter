import { render, screen } from '@testing-library/react';
import AppForm from './AppForm';

test('renders learn react link', () => {
  render(<AppForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
