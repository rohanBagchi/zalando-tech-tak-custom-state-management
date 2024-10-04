import { useSelector } from "./store";

export function Banner() {
  const [brand] = useSelector(state => state.brand);

  console.count('banner');
  
  return (
    <fieldset>
      <legend>Banner</legend>
      <h1>{brand}</h1>
    </fieldset>
  );
}
