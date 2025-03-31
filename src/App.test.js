import { render, screen } from '@testing-library/react';
import UserPasswordPincodeForm from './UserPasswordPincodeForm';

test('renders learn react link', () => {
  render(<UserPasswordPincodeForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
