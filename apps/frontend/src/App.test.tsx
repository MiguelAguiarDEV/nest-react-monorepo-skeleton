import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra Hola Mundo', () => {
  render(<App />);
  expect(screen.getByText('Hola Mundo')).toBeInTheDocument();
});
