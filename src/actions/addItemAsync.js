import { addItem } from "../hooks/addItem";

export const addItemAsync = (id, name, location) => (dispatch) => {
  console.log("addItem");
  dispatch({ type: "LOADING_START" });
  return addItem(name, location)
    .then((loadedItems) => {
      console.log("addItem");
      dispatch({ type: "ADD_ITEM", payload: loadedItems });
    })
    .finally(() => dispatch({ type: "LOADING_END" }));
};
