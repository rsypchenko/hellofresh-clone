import { renderHook } from '@testing-library/react-hooks';
import useRecipes from '../../hooks/useRecipes';

describe('useRecipes', () => {
  it('should return the correct initial values', () => {
    const { result } = renderHook(() => useRecipes());
    expect(result.current.recipes).toEqual([]);
    expect(result.current.summary).toEqual([]);
    expect(result.current.totalPrice).toEqual('$0.00');
  });

  it('should return not empty recipes list', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRecipes());
    await waitForNextUpdate();
    expect(result.current.recipes).not.toBe([]);
});
});
