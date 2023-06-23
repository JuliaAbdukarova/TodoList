import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../firebase";

export const useRequestAdd = (value) => {
  const [isCreating, setIsCreating] = useState(false);

  const requestAdd = () => {
    setIsCreating(true);

    const tasksDbRef = ref(db, "tasks");

    push(tasksDbRef, { name: value })
      .then((response) => {
        console.log("Задача добавлена, ответ сервера: ", response);
      })
      .finally(() => setIsCreating(false));
  };
  return { isCreating, requestAdd };
};
