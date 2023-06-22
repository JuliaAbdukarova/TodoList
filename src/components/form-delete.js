import React, { useState } from "react";
import { useRequestDelete } from "../hooks/useRequestDelete";

export function FormDelete({ refreshTask }) {
  const [taskId, setTaskId] = useState("");

  const { isDeleting, requestDelete } = useRequestDelete(refreshTask);

  const handleDelete = () => {
    requestDelete(taskId);
  };

  return (
    <div>
      <label>
        Номер задачи:
        <input
          type="text"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
        />
      </label>

      <button disabled={isDeleting} onClick={handleDelete}>
        Удалить
      </button>
    </div>
  );
}
