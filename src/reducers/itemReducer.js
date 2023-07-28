const initialState = [];

export function itemReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ITEMS":
      return payload;
    case "ADD_ITEM":
      console.log("ADD_ITEM !!");
      return [...state];
    default:
      return state;
  }
}
