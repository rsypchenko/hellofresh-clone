import React from 'react';
import Box from '../../components/Box';
import Text from '../../components/Text';
import List, { ListItem } from '../../components/List';
import { parseRawPrice } from './helpers/price';

const getRecipeName = (recipe) => {
  if (recipe.selected > 1) {
    return `${recipe.name} x ${recipe.selected}`;
  }

  return recipe.name;
};

// Create PriceSummary user interface
const PriceSummary = ({ summary, totalPrice }) => (
  <Box width={['290px', '450px']} m="16px">
    <List>
      {summary.map((recipe) => (
        <ListItem key={recipe.id}>
          <Box display="flex" justifyContent="space-between" mb="8px">
            <Text lineHeight="27px">{getRecipeName(recipe)}</Text>
            <Text lineHeight="27px">{parseRawPrice(recipe.price)}</Text>
          </Box>
        </ListItem>
      ))}
    </List>
    <Box
      display="flex"
      justifyContent="space-between"
      pt="8px"
      borderTopWidth="sm"
      borderTopColor="#E4E4E4"
      borderTopStyle="solid">
      <Text lineHeight="27px" fontWeight="600">
        Total
      </Text>
      <Text lineHeight="27px" fontWeight="600">
        {totalPrice}
      </Text>
    </Box>
  </Box>
);

export default PriceSummary;
