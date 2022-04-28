import { render, screen } from '@testing-library/react';
import Nav from './nav';
import { BrowserRouter } from "react-router-dom";


test('renders nav', () => {
    render(<BrowserRouter><Nav/></BrowserRouter>);
  let linkElement = screen.getByText(/FAKELANDIA/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = screen.getByText(/JUSTICE/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = screen.getByText(/DEPARTMENT/i);
  expect(linkElement).toBeInTheDocument();
});