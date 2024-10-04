import { useContext } from "react";
import { AppContext } from "./AppContext";

export function Banner() {
  const { state } = useContext(AppContext);
  const { brand } = state;

  console.count('banner');
  
  return (
    <fieldset>
      <legend>Banner</legend>
      <h1>{brand}</h1>
    </fieldset>
  );
}
