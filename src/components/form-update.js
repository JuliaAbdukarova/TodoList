import React, { useState } from "react";
import { useRequestUpdate } from "../hooks/useRequestUpdate";

export function FormUpdate({ refreshTask }) {
  const [taskId, setTaskId] = useState("");
  const [taskName, setTaskName] = useState("");

  const { isUpdating, requestUpdate } = useRequestUpdate(refreshTask);

  const handleUpdate = () => {
    requestUpdate(taskId, taskName);
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
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>

      <button disabled={isUpdating} onClick={handleUpdate}>
        Обновить
      </button>
    </div>
  );
}
