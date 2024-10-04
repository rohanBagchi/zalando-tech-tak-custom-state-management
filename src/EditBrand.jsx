export function EditBrand({ brand, setBrandName }) {
  console.count('EditBrand');
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
