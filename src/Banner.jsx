export function Banner({ name }) {
  console.count('banner');
  return (
    <fieldset>
      <legend>Banner</legend>
      <h1>{name}</h1>
    </fieldset>
  );
}
