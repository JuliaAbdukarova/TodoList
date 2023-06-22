import { useState } from "react";

export const useRequestAdd = (refreshTask, name) => {
  const [isCreating, setIsCreating] = useState(false);

  const requestAdd = () => {
    setIsCreating(true);

    fetch("http://localhost:3005/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        refreshTask();
        console.log("Задача добавлена, ответ сервера: ", response);
      })
      .finally(() => setIsCreating(false));
  };
  return { isCreating, requestAdd };
};
