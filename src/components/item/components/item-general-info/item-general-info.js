import { useContext } from "react";
import { ItemContext } from "../../../../context";

export const ItemGeneralInfo = () => {
  const { id, name } = useContext(ItemContext);
  return (
    <div key={id}>
      <div>Номер: {id}</div>
      <div>Название: {name}</div>
    </div>
  );
};
