import { useMemo } from 'react';

const calculateRecipePrice = ({ selected, extraCharge }, basePrice) => {
  return selected * (basePrice + extraCharge);
};

const useSummary = ({ recipes, data }) =>
  useMemo(() => {
    const sum = recipes.filter((recipe) => recipe.selected > 0) ?? [];
    const formattedSum = sum.map((recipe) => {
      return {
        ...recipe,
        price: calculateRecipePrice(recipe, data?.baseRecipePrice),
      };
    });
    if (formattedSum.length > 0) {
      formattedSum.push({
        id: 'shipping',
        name: 'Shipping',
        price: data?.shippingPrice,
      });
    }
    return formattedSum;
  }, [recipes, data]);

export default useSummary;
