let INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'PRODUCT_DETAILS') {
    return action.product;
  }
  return state;
}

export const productDetails = product => {
  return {
    type: 'PRODUCT_DETAILS',
    product,
  };
};
