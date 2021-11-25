import React from 'react';
import { render, screen } from '@testing-library/react';
import Article4 from './Article4';

describe('Article 4', () => {
  test('renders the title', () => {
    render(<Article4 />);
    expect(screen.getByText("Marinus Link project likened to Snowy 2.0 in damning new report warning of 'dead-weight loss'")).toBeInTheDocument();
  });
});
