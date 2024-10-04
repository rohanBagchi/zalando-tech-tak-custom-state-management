import { useContext } from "react";
import { AppContext } from "./AppContext";

export function EditBrand() {
  const { state, setState } = useContext(AppContext);
  const { brand } = state;

  return (
    <div>
      <fieldset>
        <legend>Edit Brand</legend>

        <label>
          Brand Name
          <br />
          <input
            type="text"
            name="brand"
            value={brand}
            onChange={(e) => 
              setState(prev => ({
                ...prev,
                brand: e.target.value
              }))
            }
          />
        </label>
      </fieldset>
    </div>
  );
}
