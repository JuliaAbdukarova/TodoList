import { useState } from "react";
import { ref, remove } from "firebase/database";
import { db } from "../firebase";

export const useRequestDelete = () => {
  const [isDeleting, setIsDeleting] = useState(false);

  const requestDelete = (taskId) => {
    setIsDeleting(true);

    const deleteRef = ref(db, `tasks/${taskId}`);

    remove(deleteRef)
      .then((response) => {
        console.log("Задача удалена, ответ сервера: ", response);
      })
      .finally(() => setIsDeleting(false));
  };

  return { isDeleting, requestDelete };
};
