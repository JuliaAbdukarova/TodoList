import { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase";

export const useRequestUpdate = (refreshTask) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const requestUpdate = (taskId, taskName) => {
    setIsUpdating(true);

    const updateRef = ref(db, `tasks/${taskId}`);

    set(updateRef, { name: taskName })
      .then((response) => {
        console.log("Задача обновлена, ответ сервера: ", response);
      })
      .finally(() => setIsUpdating(false));
  };

  return {
    isUpdating,
    requestUpdate,
  };
};
