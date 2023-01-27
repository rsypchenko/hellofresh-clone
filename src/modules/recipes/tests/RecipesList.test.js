import React from 'react';
import { render } from '@testing-library/react';

import RecipesList from '../RecipesList';

describe('RecipesList', () => {
  it('renders without crashing', () => {
    render(<RecipesList />);
  });
});
