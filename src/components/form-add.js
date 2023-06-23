import React, { useState } from "react";
import { useRequestAdd } from "../hooks/useRequestAdd";

export function FormAdd() {
  const [name, setName] = useState("");

  const { isCreating, requestAdd } = useRequestAdd(name);

  return (
    <form>
      <label>
        Название задачи:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button disabled={isCreating} onClick={requestAdd}>
        Добавить
      </button>
    </form>
  );
}
