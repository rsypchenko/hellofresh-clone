import { renderHook } from '@testing-library/react-hooks';
import useSummary from '../../hooks/useSummary';

const recipes = [
  {
    id: '1',
    name: 'Recipe 1',
    selected: 1,
    extraCharge: 1,
  },
];

const data = {
    baseRecipePrice: 1,
    shippingPrice: 1,
};

const expected = [{
    id: '1',
    name: 'Recipe 1',
    selected: 1,
    extraCharge: 1,
    price: 2,
}, {
    id: 'shipping',
    name: 'Shipping',
    price: 1
}];

describe('useSummary', () => {
  it('should return the correct summary', () => {
    const { result } = renderHook(() => useSummary({ recipes, data }));
    expect(result.current).toEqual(expected);
  });

  it('should return an empty array if no recipes are selected', () => {
    const { result } = renderHook(() => useSummary({ recipes: [], data }));
    expect(result.current).toEqual([]);
  });
});
