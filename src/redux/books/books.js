// Actions
const LOAD = 'bookstore/books/LOAD';

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case (LOAD):
      return action.state;
    default: return state;
  }
}
