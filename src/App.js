import { useState } from "react";
import { useRequestGet } from "./hooks/useRequestGet";
import { MainPage } from "./components/mainPage";
//import { FormTask } from "./components/form-task";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  const [isRefreshTask, setIsRefreshTask] = useState(false);
  const [sortAsc, setSortAsc] = useState(false);
  const [taskFilter, setTaskFilter] = useState("");

  const refreshTask = () => {
    setIsRefreshTask(!isRefreshTask);
  };

  const { isLoading, tasks } = useRequestGet(isRefreshTask);

  //const MainPage = () => <div> Я роутниг!</div>;
  const Contacts = () => <div>Контент контактов</div>;

  return (
    <>
      {/*
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
      */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
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
//import { FormDelete } from "./components/form-delete";
//import { FormUpdate } from "./components/form-update";
