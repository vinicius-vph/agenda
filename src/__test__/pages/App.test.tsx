import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders initial text', () => {
  render(<App />);
  const initialText = screen.getByText(/Nenhum contato para mostrar/i);
  const createContactButton = screen.getByText(/Criar contato/i);
  expect(initialText).toBeInTheDocument();
  expect(createContactButton).toBeInTheDocument();
});

test('renders create contactbutton text', () => {
  render(<App />);
  const createContactButton = screen.getByText(/Criar contato/i);
  expect(createContactButton).toBeInTheDocument();
});
