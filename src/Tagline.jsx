import { useSelector } from "./store";

export function Tagline() {
  const [tagLine] = useSelector(state => state.tagLine);

  console.count('tagline');

  return (
    <fieldset>
      <legend>Tag Line</legend>
      <p>{tagLine}</p>
    </fieldset>
  );
}
