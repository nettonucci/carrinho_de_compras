const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'ALTER_NUMBER') {
    const counter = [...state, action.count];
    // console.log(teste);
    return counter;
  }
  return state;
}

export const alterNumber = count => {
  return {
    type: 'ALTER_NUMBER',
    count,
  };
};
