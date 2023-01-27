import React from 'react';
import { render, screen } from '@testing-library/react';

import PriceSummary from '../PriceSummary';
import { parseRawPrice } from '../helpers/price';

const summary = [
  {
    id: '5f4d4a7e62fb0224951e7ec4',
    name: 'Chicken Sausage & Spinach Ravioli',
    slug: 'chicken-sausage-spinach-ravioli',
    headline: 'with Tomato & Lemon',
    image:
      'https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/5f4d4a7e62fb0224951e7ec4-2fe03fc2.jpg',
    selected: 1,
    selectionLimit: 1,
    extraCharge: 0,
    yields: 2,
    price: 1798
  },
];

const formattedPrice = parseRawPrice(summary[0].price);
const totalPrice = '$100.00';

describe('PriceSummary', () => {
  it('renders without crashing', () => {
    render(
      <PriceSummary summary={summary} totalPrice={totalPrice} />
    );
  });

  it('should contain Total Price', () => {
    render(
      <PriceSummary summary={summary} totalPrice={totalPrice} />
    );
    expect(screen.getByText(`${totalPrice}`)).toBeInTheDocument();
  });

  it('should contain recipe name', () => {
    render(
      <PriceSummary summary={summary} totalPrice={totalPrice} />
    );
    expect(screen.getByText(`${summary[0].name}`)).toBeInTheDocument();
  });

  it('should contain recipe price', () => {
    render(
      <PriceSummary summary={summary} totalPrice={totalPrice} />
    );
    expect(screen.getByText(`${formattedPrice}`)).toBeInTheDocument();
  });
});
