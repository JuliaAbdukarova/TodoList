import {
  ItemGeneralInfo,
  ItemDateTimeInfo,
  ItemLocationInfo,
} from "./components";

import { useRequestDelete } from "../../hooks/useRequestDelete";

import { useContext } from "react";
import { ItemContext } from "../../context";

export const Item = (props) => {
  const { isDeleting, requestDelete } = useRequestDelete(props.refreshTask);
  const { id } = useContext(ItemContext);
  return (
    <li className="todoitem">
      <ItemGeneralInfo />
      <ItemDateTimeInfo />
      <ItemLocationInfo />
      <button
        onClick={(event) => {
          requestDelete(id);
          event.preventDefault();
        }}
      >
        Удалить
      </button>
    </li>
  );
};
