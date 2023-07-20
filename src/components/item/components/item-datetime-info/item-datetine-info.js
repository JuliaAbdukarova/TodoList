import { useContext } from "react";
import { ItemContext } from "../../../../context";

export const ItemDateTimeInfo = () => {
  const { id, date, time } = useContext(ItemContext);

  return (
    <div key={id}>
      <div> Дата: {date}</div>
      <div> Время: {time}</div>
    </div>
  );
};
