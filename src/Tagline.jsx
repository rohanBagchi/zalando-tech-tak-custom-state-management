export function Tagline({ tagline }) {
  console.count('tagline');

  return (
    <fieldset>
      <legend>Tag Line</legend>
      <p>{tagline}</p>
    </fieldset>
  );
}
