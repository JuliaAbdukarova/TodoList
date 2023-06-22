import { useState } from "react";

export const useRequestDelete = (refreshTask) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const requestDelete = (taskId) => {
    setIsDeleting(true);

    fetch(`http://localhost:3005/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        refreshTask();
        console.log("Задача удалена, ответ сервера: ", response);
      })
      .finally(() => setIsDeleting(false));
  };

  return { isDeleting, requestDelete };
};
