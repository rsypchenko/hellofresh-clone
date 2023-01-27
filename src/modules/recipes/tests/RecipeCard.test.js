import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecipeCard from '../RecipeCard';

const baseRecipe = {
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
};

describe('RecipesList', () => {
  const handleAddRecipe = jest.fn()
  const handleRemoveRecipe = jest.fn()

  it('renders without crashing', () => {
    let recipe = {
        ...baseRecipe,
    }
    render(
      <RecipeCard
        {...recipe}
        handleAddRecipe={handleAddRecipe}
        handleRemoveRecipe={handleRemoveRecipe}
        minRecipesSelected={false}
        maxRecipesSelected={false}
      />
    );
  });

  it('has ADD button when meal is not selected yet', async () => {
    let recipe = {
        ...baseRecipe,
        selected: 0
    }
    render(
      <RecipeCard
        {...recipe}
        handleAddRecipe={handleAddRecipe}
        handleRemoveRecipe={handleRemoveRecipe}
        minRecipesSelected={false}
        maxRecipesSelected={false}
      />
    );
    await expect(screen.getByTestId('add-button')).toBeInTheDocument();
  });

  it('has minus and plus buttons when meal is selected already', async () => {
    let recipe = {
        ...baseRecipe,
        selected: 1
    }
    render(
      <RecipeCard
        {...recipe}
        handleAddRecipe={handleAddRecipe}
        handleRemoveRecipe={handleRemoveRecipe}
        minRecipesSelected={false}
        maxRecipesSelected={false}
      />
    );
    await expect(screen.getByTestId('plus-button')).toBeInTheDocument();
    await expect(screen.getByTestId('minus-button')).toBeInTheDocument();
  });

  it('has ADD EXTRA MEAL button when minimum recipes is selected', async () => {
    let recipe = {
        ...baseRecipe,
        selected: 0
    }
    render(
      <RecipeCard
        {...recipe}
        handleAddRecipe={handleAddRecipe}
        handleRemoveRecipe={handleRemoveRecipe}
        minRecipesSelected={true}
        maxRecipesSelected={false}
      />
    );
    await expect(screen.getByText(/ADD EXTRA MEAL/i)).toBeInTheDocument();
  });

  it('has disabled ADD button when maximum recipes is selected', async () => {
    let recipe = {
        ...baseRecipe,
        selected: 0,
    }
    render(
      <RecipeCard
        {...recipe}
        handleAddRecipe={handleAddRecipe}
        handleRemoveRecipe={handleRemoveRecipe}
        minRecipesSelected={true}
        maxRecipesSelected={true}
      />
    );
    await expect(screen.getByTestId('add-button')).toBeDisabled();
  });

  it('calls handleAddRecipe when ADD button is clicked', async () => {
    let recipe = {
        ...baseRecipe,
        selected: 0,
    }
    render(
      <RecipeCard
        {...recipe}
        handleAddRecipe={handleAddRecipe}
        handleRemoveRecipe={handleRemoveRecipe}
        minRecipesSelected={false}
        maxRecipesSelected={false}
      />
    );
    await fireEvent.click(screen.getByTestId('add-button'));
    await expect(handleAddRecipe).toHaveBeenCalled();
  });

  it('calls handleRemoveRecipe when minus button is clicked', async () => {
    let recipe = {
        ...baseRecipe,
        selected: 1,
    }
    render(
      <RecipeCard
        {...recipe}
        handleAddRecipe={handleAddRecipe}
        handleRemoveRecipe={handleRemoveRecipe}
        minRecipesSelected={false}
        maxRecipesSelected={false}
      />
    );
    await fireEvent.click(screen.getByTestId('minus-button'));
    await expect(handleRemoveRecipe).toHaveBeenCalled();
  });

  it('should contain recipe image', () => {
    let recipe = {
        ...baseRecipe,
    }
    render(
      <RecipeCard
        {...recipe}
        handleAddRecipe={handleAddRecipe}
        handleRemoveRecipe={handleRemoveRecipe}
        minRecipesSelected={false}
        maxRecipesSelected={false}
      />
    );
    expect(screen.getByAltText(recipe.name)).toBeInTheDocument();
  });
});
