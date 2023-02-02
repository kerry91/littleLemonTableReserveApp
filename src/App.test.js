import { render, screen } from '@testing-library/react';
import Hero from '../src/components/Hero'

test ('rendeers the hero title', () => {
  render (<Hero/>);
  const headingElement = screen.getByText("Little Lemon");
  expect (headingElement).toBeInTheDocument();
})
