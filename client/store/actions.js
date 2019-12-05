const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const doIncrement = () => ({
  type: INCREMENT,
});

const doDecrement = () => ({
  type: DECREMENT,
});

export {
  INCREMENT,
  DECREMENT,
  doDecrement,
  doIncrement,
};
