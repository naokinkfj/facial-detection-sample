export const INCREMENT_AGE = 'INCREMENT_AGE';
export const DECREMENT_AGE = 'DECREMENT_AGE';

export const incrementAge = (): IncrementAgeType => ({
  type: INCREMENT_AGE
});

export const decrementAge = (): DecrementAgeType => ({
  type: DECREMENT_AGE
});

const initialState = {
  name: 'Jane',
  age: 1,
};

export const girlReducer = (state = initialState, action) => {
  const type = action.type;
  console.log(`type --> ${type}`);
  console.log(`age --> ${state.age}`);
  if (type === INCREMENT_AGE) {
    state = { ...state, age: state.age + 1 };
  } else if (type === DECREMENT_AGE) {
    state = { ...state, age: Math.max(1, state.age - 1) };
  }
  return state;
}
