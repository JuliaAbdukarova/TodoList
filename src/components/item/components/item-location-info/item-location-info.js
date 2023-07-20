import { useContext } from "react";
import { ItemContext } from "../../../../context";

export const ItemLocationInfo = () => {
  const { id, location } = useContext(ItemContext);

  return (
    <div key={id}>
      <div> Локация: {location}</div>
    </div>
  );
};
