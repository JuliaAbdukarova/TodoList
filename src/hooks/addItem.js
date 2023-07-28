export const addItem = (name, location) => {
  return fetch("http://localhost:3005/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      name: name,
      location: location,
    }),
  }).then((rawResponse) => rawResponse.json());
};
