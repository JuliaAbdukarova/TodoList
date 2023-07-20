import { useState, useContext } from "react";

import { useRequestGet } from "./hooks/useRequestGet";

import { FormAdd } from "./components/form-add";
import { Item } from "./components/item/item";

import { ItemContext } from "./context";

export const App = () => {
  const [isRefreshTask, setIsRefreshTask] = useState(false);
  const [sortAsc, setSortAsc] = useState(false);
  const [taskFilter, setTaskFilter] = useState("");
  const [isAdditionMode, setIsAdditionMode] = useState(false);

  const refreshTask = () => {
    setIsRefreshTask(!isRefreshTask);
  };

  const closeAddForm = () => {
    setIsAdditionMode(false);
  };

  const { isLoading, tasks } = useRequestGet(isRefreshTask);

  return (
    <div>
      <button
        onClick={() => {
          setIsAdditionMode(!isAdditionMode);
        }}
      >
        Добавить
      </button>
      <button
        onClick={() => {
          setSortAsc(!sortAsc);
        }}
      >
        Сортировка
      </button>
      <FormAdd
        refreshTask={refreshTask}
        isAdditionMode={isAdditionMode}
        closeAddForm={closeAddForm}
      />
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

      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : sortAsc ? (
        [...tasks]
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .filter((task) => task.name.includes(taskFilter))
          .map((task) => (
            <ItemContext.Provider value={task}>
              <Item refreshTask={refreshTask} />
            </ItemContext.Provider>
          ))
      ) : (
        tasks
          .filter((task) => task.name.includes(taskFilter))
          .map((task) => (
            <ItemContext.Provider value={task}>
              <Item refreshTask={refreshTask} />
            </ItemContext.Provider>
          ))
      )}
    </div>
  );
};

export default App;

/*
<div className="todoitem" key={id}>
              {id} - {name}
            </div>
          ))

<FormDelete refreshTask={refreshTask} />
<FormUpdate refreshTask={refreshTask} />

*/
