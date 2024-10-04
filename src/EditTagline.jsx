import { useSelector } from "./store";

export function EditTagline() {
  const [tagLine, setState] = useSelector(state => state.tagLine);
  console.count('EditTagline');
  return (
    <div>
      <fieldset>
        <legend>Edit Tagline</legend>

        <label>
          Tagline
          <br/>
          <input
            type="text"
            name="tagLine"
            value={tagLine}
            onChange={(e) => setState({ tagLine: e.target.value })}
          />
        </label>
      </fieldset>
    </div>
  );
}
