import { getItems } from "../hooks/getItems";

export const readItemsAsync = () => (dispatch) => {
  dispatch({ type: "LOADING_START" });
  return getItems()
    .then((loadedItems) => {
      //console.log("useRequestGet");
      dispatch({ type: "GET_ITEMS", payload: loadedItems });
    })
    .finally(() => dispatch({ type: "LOADING_END" }));
};
