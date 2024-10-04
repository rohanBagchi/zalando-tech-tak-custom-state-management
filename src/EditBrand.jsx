import { useSelector } from "./store";

export function EditBrand() {
  const [brand, setState] = useSelector(state => state.brand);

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
            onChange={(e) => setState({ brand: e.target.value })}
          />
        </label>
      </fieldset>
    </div>
  );
}
