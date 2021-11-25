import React from 'react';
import { render, screen } from '@testing-library/react';
import Article3 from './Article3';

describe('Article 3', () => {
  test('renders the title', () => {
    render(<Article3 />);
    expect(screen.getByText("Matildas and Chelsea star Sam Kerr nominated for FIFA's Best Women's Player award")).toBeInTheDocument();
  });
});
