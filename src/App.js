import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { readItemsAsync } from "./actions";
import { selectItems, selectLoading } from "./selectors";

import { FormAdd } from "./components/form-add";
import { Item } from "./components/item/item";

export const App = () => {
  const [isRefreshTask, setIsRefreshTask] = useState(false);
  const [sortAsc, setSortAsc] = useState(false);
  const [taskFilter, setTaskFilter] = useState("");
  const [isAdditionMode, setIsAdditionMode] = useState(false);

  const dispatch = useDispatch();

  let tasks = useSelector(selectItems);
  let isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(readItemsAsync(isRefreshTask));
  }, [sortAsc, taskFilter, isRefreshTask]);

  const refreshTask = () => {
    setIsRefreshTask(!isRefreshTask);
  };

  const closeAddForm = () => {
    setIsAdditionMode(false);
  };

  readItemsAsync(isRefreshTask);

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
            <Item
              id={task.id}
              name={task.name}
              location={task.location}
              refreshTask={refreshTask}
            />
          ))
      ) : (
        tasks
          .filter((task) => task.name.includes(taskFilter))
          .map((task) => (
            <Item
              id={task.id}
              name={task.name}
              location={task.location}
              refreshTask={refreshTask}
            />
          ))
      )}
    </div>
  );
};

export default App;

{
  /*
  {isLoading ? (
        <div className="loader">Loading...</div>
      ) : sortAsc ? (
        [...tasks]
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .filter((task) => task.name.includes(taskFilter))
          .map((task) => (
            <Item id={task.id} name={task.name} refreshTask={refreshTask} />
          ))
      ) : (
        tasks
          .filter((task) => task.name.includes(taskFilter))
          .map((task) => (
            <Item id={task.id} name={task.name} refreshTask={refreshTask} />
          ))
      )}
*/
}
