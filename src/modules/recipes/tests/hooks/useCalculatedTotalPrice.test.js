import { renderHook } from '@testing-library/react-hooks';
import useCalculatedTotalPrice from 'modules/recipes/hooks/useCalculatedTotalPrice';

const summary = [
  {
    id: '1',
    name: 'Recipe 1',
    selected: 1,
    extraCharge: 1,
    price: 2,
  },
  {
    id: 'shipping',
    name: 'Shipping',
    price: 1,
  },
];

const expectedTotal = 3;
const zeroExpected = 0;

describe('useCalculatedTotalPrice', () => {
  it('should return the correct total price', () => {
    const { result } = renderHook(() => useCalculatedTotalPrice({ summary }));
    expect(result.current).toEqual(expectedTotal);
  });

  it('should return 0 if no summary is provided', () => {
    const { result } = renderHook(() => useCalculatedTotalPrice({ summary: [] }));
    expect(result.current).toEqual(zeroExpected);
  });
});
