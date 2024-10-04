export function EditBrand({ name, setName }) {
  return (
    <div>
      <fieldset>
        <legend>Edit Name</legend>

        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </fieldset>
    </div>
  );
}
