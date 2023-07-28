import React, { useState } from "react";
//import { useRequestAdd } from "../hooks/addItem";

import { useDispatch, useSelector } from "react-redux";
import { addItemAsync } from "../actions/addItemAsync";
import { selectItemName, selectItemLocation } from "../selectors";

export function FormAdd({ refreshTask, isAdditionMode, closeAddForm }) {
  let name = useSelector(selectItemName);
  let location = useSelector(selectItemLocation);
  let isCreating = false;

  const dispatch = useDispatch();

  const onClickHandle = () => {
    dispatch(addItemAsync(name, location));
    closeAddForm();
    refreshTask();
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
              onChange={(e) => (name = e.target.value)}
            />
          </li>

          <li class="form-row">
            <label for="location"> Локация:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => (location = e.target.value)}
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
