export const getItems = () => {
  return fetch("http://localhost:3005/tasks").then((jsonData) =>
    jsonData.json()
  );
};
