export const deleteItem = (id) => {
  return fetch(`http://localhost:3005/tasks/${id}`, {
    method: "DELETE",
  }).then((rawResponse) => rawResponse.json());
};
