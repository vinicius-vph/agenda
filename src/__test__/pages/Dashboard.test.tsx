import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard';

test('renders initial text', () => {
  render(<Dashboard />);
  const initialText = screen.getByText(/Nenhum contato para mostrar/i);
  const createContactButton = screen.getByText(/Criar contato/i);
  expect(initialText).toBeInTheDocument();
  expect(createContactButton).toBeInTheDocument();
});

// test('renders create contact button text', () => {
//   render(<App />);
//   const createContactButton = screen.getByText(/Criar contato/i);
//   expect(createContactButton).toBeInTheDocument();
// });
