import { renderHook } from '@testing-library/react-hooks';
import useSelectedRecipes from 'modules/recipes/hooks/useSelectedRecipes';

const selected = [
  {
    selected: 1,
  },
  {
    selected: 1,
  },
];

const unselected = [
  {
    selected: 0,
  },
  {
    selected: 0,
  },
];

const min = 1;
const max = 1;

describe('useSelectedRecipes', () => {
  it('should return the correct selected recipes', () => {
    const { result } = renderHook(() => useSelectedRecipes({ recipes: selected, min, max }));
    expect(result.current).toEqual({ minRecipesSelected: true, maxRecipesSelected: true });
  });

  it('should return FALSY value if no selected recipes', () => {
    const { result } = renderHook(() => useSelectedRecipes({ recipes: unselected, min, max }));
    expect(result.current).toEqual({ minRecipesSelected: false, maxRecipesSelected: false });
  });
});
