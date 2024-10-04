export function EditBrand({ brand, setBrandName }) {
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
            onChange={(e) => setBrandName(e.target.value)}
          />
        </label>
      </fieldset>
    </div>
  );
}
