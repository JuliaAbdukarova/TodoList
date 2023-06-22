import { useState } from "react";

export const useRequestUpdate = (refreshTask) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const requestUpdate = (taskId, taskName) => {
    setIsUpdating(true);

    fetch(`http://localhost:3005/tasks/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        name: taskName,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        refreshTask();
        console.log("Задача обновлена, ответ сервера: ", response);
      })
      .finally(() => setIsUpdating(false));
  };

  return {
    isUpdating,
    requestUpdate,
  };
};
