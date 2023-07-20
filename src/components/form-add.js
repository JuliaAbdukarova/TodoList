import React, { useState } from "react";
import { useRequestAdd } from "../hooks/useRequestAdd";

export function FormAdd({ refreshTask, isAdditionMode, closeAddForm }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [priority, setPriority] = useState("");

  const { isCreating, requestAdd } = useRequestAdd(
    refreshTask,
    name,
    date,
    time,
    location,
    priority
  );

  const onClickHandle = () => {
    requestAdd();
    closeAddForm();
  };

  return (
    isAdditionMode && (
      <form className="add center-screen">
        <ul class="wrapper">
          <li class="form-row">
            <label for="name"> Название задачи:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </li>

          <li class="form-row">
            <label for="date"> Дата:</label>
            <input
              type="text"
              id="name"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </li>
          <li class="form-row">
            <label for="time"> Время:</label>
            <input
              type="text"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </li>
          <li class="form-row">
            <label for="location"> Локация:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </li>
          <li class="form-row">
            <label for="priority"> Приоритет:</label>
            <input
              type="text"
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            />
          </li>
          <li class="form-row">
            <button type="submit" disabled={isCreating} onClick={onClickHandle}>
              OK
            </button>
          </li>
        </ul>
      </form>
    )
  );
}
