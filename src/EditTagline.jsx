import { useContext } from "react";
import { AppContext } from "./AppContext";

export function EditTagline() {
  const { state, setState } = useContext(AppContext);
  const { tagLine } = state;

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
            onChange={(e) => setState(prev => ({
              ...prev,
              tagLine: e.target.value
            }))}
          />
        </label>
      </fieldset>
    </div>
  );
}
