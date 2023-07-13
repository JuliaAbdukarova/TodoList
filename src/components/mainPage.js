import React, { useState } from "react";
import { FormAdd } from "./form-add";
import { useRequestGet } from "../hooks/useRequestGet";

export function MainPage() {
  const [isRefreshTask, setIsRefreshTask] = useState(false);
  const [sortAsc, setSortAsc] = useState(false);
  const [taskFilter, setTaskFilter] = useState("");
  const { isLoading, tasks } = useRequestGet(isRefreshTask);

  const refreshTask = () => {
    setIsRefreshTask(!isRefreshTask);
  };

  return (
    <div>
      <FormAdd refreshTask={refreshTask} />
      <div>
        <label>
          Фильтр задач:
          <input
            type="text"
            value={taskFilter}
            onChange={(e) => setTaskFilter(e.target.value)}
          />
        </label>
      </div>
      <button
        onClick={() => {
          setSortAsc(!sortAsc);
        }}
      >
        Сортировка
      </button>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : sortAsc ? (
        [...tasks]
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .filter((task) => task.name.includes(taskFilter))
          .map(({ id, name }) => (
            <div className="todoitem" key={id}>
              {id} - {name}
            </div>
          ))
      ) : (
        tasks
          .filter((task) => task.name.includes(taskFilter))
          .map(({ id, name }) => (
            <div className="todoitem" key={id}>
              {id} - {name}
            </div>
          ))
      )}
    </div>
  );
}