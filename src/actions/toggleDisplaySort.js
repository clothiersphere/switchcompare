import * as actionTypes from '../constants/actionTypes';

export function toggleDisplaySort(sortMethod) {
  switch (sortMethod) {
    case 'release':
      return {
        type: actionTypes.SORT_BY_RELEASE,
      };
    case 'price':
      return {
        type: actionTypes.SORT_BY_PRICE,
      };
    case 'score':
      return {
        type: actionTypes.SORT_BY_SCORE,
      };
    case 'sale':
      return {
        type: actionTypes.SORT_BY_SALE_PERCENTAGE,
      };
  }
}
