import { deleteItem } from "../hooks/deleteItem";

export const deleteItemsAsync = (id, refreshTask) => (dispatch) => {
  console.log("deleteItemsAsync");
  dispatch({ type: "LOADING_START" });
  return deleteItem(id, refreshTask)
    .then((loadedItems) => {
      console.log("deleteItem");
      dispatch({ type: "DELETE_ITEM", payload: loadedItems });
    })
    .finally(() => dispatch({ type: "LOADING_END" }));
};
