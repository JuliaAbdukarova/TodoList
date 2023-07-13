import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRequestUpdate } from "../hooks/useRequestUpdate";
import { useRequestDelete } from "../hooks/useRequestDelete";

export function FormTask() {
  const navigate = useNavigate();

  const params = useParams();
  const [taskName, setTaskName] = useState(params.name);
  const { isUpdating, requestUpdate } = useRequestUpdate();

  const { isDeleting, requestDelete } = useRequestDelete(/*refreshTask*/);

  const handleDelete = () => {
    requestDelete(params.id);
    navigate("/");
  };

  const handleUpdate = () => {
    requestUpdate(params.id, taskName);
    alert("Задача обновлена!");
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleBack}>Назад</button>
      <div>
        <label>
          Номер задачи:
          <input type="text" readOnly value={params.id} />
        </label>
      </div>
      <div>
        <label>
          Название
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </label>
      </div>
      <button disabled={isUpdating} onClick={handleUpdate}>
        Обновить
      </button>
      <button disabled={isDeleting} onClick={handleDelete}>
        Удалить
      </button>
    </div>
  );
}
