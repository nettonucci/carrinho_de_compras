const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'ALTER_NUMBER') {
    const counter = [...state, action.count];
    // console.log(teste);
    return counter;
  }
  if (action.type === 'CLEAN_CART') {
    return action.count;
  }
  if (action.type === 'DEL_ITEM') {
    const estado = [...state];
    const ProductIndex = estado.findIndex(estado => estado.id === action.id);

    estado.splice(ProductIndex, 1);

    return estado;
  }
  return state;
}

export const alterNumber = count => {
  return {
    type: 'ALTER_NUMBER',
    count,
  };
};

export const CleanCart = count => {
  return {
    type: 'CLEAN_CART',
    count,
  };
};

export const DelItem = id => {
  return {
    type: 'DEL_ITEM',
    id,
  };
};
