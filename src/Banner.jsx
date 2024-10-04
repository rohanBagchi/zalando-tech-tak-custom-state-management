export function Banner({ brand }) {
  console.count('banner');
  return (
    <fieldset>
      <legend>Banner</legend>
      <h1>{brand}</h1>
    </fieldset>
  );
}
