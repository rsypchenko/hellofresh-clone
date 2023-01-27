import React from 'react';
import { render, screen } from '@testing-library/react';

import PriceInfo from '../PriceInfo';

describe('PriceSummary', () => {
  it('renders without crashing', () => {
    render(<PriceInfo summary={[]} totalPrice={0} />);
  });

  it('should shows summary block after click on info icon', () => {
    render(<PriceInfo summary={[]} totalPrice={0} />);
    const button = screen.getByTestId('show-summary');
    expect(button).toBeInTheDocument();
    expect(screen.queryByText('Total')).not.toBeInTheDocument();
    button.click();
    expect(screen.getByText('Total')).toBeInTheDocument();
  });
});
