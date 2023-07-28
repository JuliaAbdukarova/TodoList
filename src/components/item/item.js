import { useDispatch, useSelector } from "react-redux";

import { deleteItemsAsync } from "../../actions";

export const Item = ({ id, name, location, refreshTask }) => {
  const dispatch = useDispatch();

  const requestDelete = (id) => {
    dispatch(deleteItemsAsync(id));
    refreshTask();
  };

  return (
    <div className="todoitem">
      <label>Номер: {id} </label>
      <label>Название: {name} </label>
      <label>Локация: {location} </label>
      <button
        onClick={(event) => {
          requestDelete(id);
          event.preventDefault();
        }}
      >
        Удалить
      </button>
    </div>
  );
};
