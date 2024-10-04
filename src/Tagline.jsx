import { useContext } from "react";
import { AppContext } from "./AppContext";

export function Tagline() {
  const { state } = useContext(AppContext);
  const { tagLine } = state;

  console.count('tagline');

  return (
    <fieldset>
      <legend>Tag Line</legend>
      <p>{tagLine}</p>
    </fieldset>
  );
}
