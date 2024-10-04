export function EditTagline({ tagLine, setTagline }) {
  return (
    <div>
      <fieldset>
        <legend>Edit Tagline</legend>

        <label>
          Tagline
          <br />
          <input
            type="text"
            name="tagLine"
            value={tagLine}
            onChange={(e) => setTagline(e.target.value)}
          />
        </label>
      </fieldset>
    </div>
  );
}
