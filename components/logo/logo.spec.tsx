import React from 'react';
import { Logo } from './logo';
import {cleanup, fireEvent, render} from '@testing-library/react';

afterEach(cleanup);

describe('Logo', () => {
  it('should do something cool', () => {
    const { queryByText } = render(<Logo text="Harmony" />);
    expect(queryByText('Harmony')).toBeTruthy();
  });
});