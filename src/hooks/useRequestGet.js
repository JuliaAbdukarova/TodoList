import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

export const useRequestGet = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const tasksDbRef = ref(db, "tasks");
    return onValue(tasksDbRef, (snapshot) => {
      const loadedTasks = snapshot.val() || {};
      // console.log(loadedTasks);
      setTasks(loadedTasks);
      setIsLoading(false);
    });
  }, []);

  return { isLoading, tasks };
};
