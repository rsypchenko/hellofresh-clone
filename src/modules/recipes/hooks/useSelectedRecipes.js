import { useMemo } from 'react';

const useSelectedRecipes = ({ recipes, min, max }) =>
  useMemo(() => {
    const selected = recipes.reduce((acc, curr) => {
      return acc + curr.selected;
    }, 0);

    const minRecipesSelected = selected >= min;
    const maxRecipesSelected = selected >= max;

    return { minRecipesSelected, maxRecipesSelected };
  }, [recipes, min, max]);

export default useSelectedRecipes;
