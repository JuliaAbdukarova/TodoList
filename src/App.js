import { useState } from "react";

import { useRequestGet } from "./hooks/useRequestGet";

import { FormAdd } from "./components/form-add";
import { FormDelete } from "./components/form-delete";
import { FormUpdate } from "./components/form-update";

export const App = () => {
  const [isRefreshTask, setIsRefreshTask] = useState(false);
  const [sortAsc, setSortAsc] = useState(false);
  const [taskFilter, setTaskFilter] = useState("");

  const refreshTask = () => {
    setIsRefreshTask(!isRefreshTask);
  };

  const { isLoading, tasks } = useRequestGet();

  return (
    <div>
      <FormAdd />
      <FormDelete />
      <FormUpdate />

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
        [...Object.entries(tasks)]
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .filter(([id, { name }]) => name.includes(taskFilter))
          .map(([id, { name }]) => (
            <div className="todoitem" key={id}>
              {id} - {name}
            </div>
          ))
      ) : (
        Object.entries(tasks)
          .filter(([id, { name }]) => name.includes(taskFilter))
          .map(([id, { name }]) => (
            <div className="todoitem" key={id}>
              {id} - {name}
            </div>
          ))
      )}
    </div>
  );
};

export default App;

/*  
products.map(({ id, name }) => (
          <div className="todoitem" key={id}>
            {id} - {name}
          </div>
        ))

        
      <button onClick={sortAscending}>Сортировка</button>
*/
