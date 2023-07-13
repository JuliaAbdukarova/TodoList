import { useState } from "react";
import { useRequestGet } from "./hooks/useRequestGet";
import { MainPage } from "./components/mainPage";
import { FormTask } from "./components/form-task";
import { Routes, Route } from "react-router-dom";

const NotFound = () => <div>Страница не найдена!</div>;

export const App = () => {
  const [isRefreshTask, setIsRefreshTask] = useState(false);

  const refreshTask = () => {
    setIsRefreshTask(!isRefreshTask);
  };

  const { isLoading, tasks } = useRequestGet(isRefreshTask);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/formTask/:id/:name" element={<FormTask />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
