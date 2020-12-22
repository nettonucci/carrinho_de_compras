let INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'ALTER_LIST') {
    return action.list;
  }
  return state;
}

export const alterList = list => {
  return {
    type: 'ALTER_LIST',
    list,
  };
};
