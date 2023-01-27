import { useMemo } from 'react';

const useCalculatedTotalPrice = ({ summary }) =>
  useMemo(() => {
    return summary.reduce((acc, { price }) => {
      return acc + price;
    }, 0);
  }, [summary]);

export default useCalculatedTotalPrice;
