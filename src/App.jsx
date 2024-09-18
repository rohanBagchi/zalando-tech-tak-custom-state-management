import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    brand: 'Zalando',
    tagLine: 'Be You',
  });

  return (
    <div>
      <Banner name={state.brand} />
      <Tagline tagline={state.tagLine} />

      <EditBrand
        name={state.brand}
        setName={(updatedBrand) => {
          setState((state) => ({ ...state, brand: updatedBrand }));
        }}
      />
      <EditTagline
        tagLine={state.tagLine}
        setTagline={(updatedTagLine) => {
          setState((state) => ({ ...state, tagLine: updatedTagLine }));
        }}
      />
    </div>
  );
}

function Banner({ name }) {
  console.count('banner');
  return (
    <fieldset>
      <legend>Banner</legend>
      <h1>{name}</h1>
    </fieldset>
  );
}

function Tagline({ tagline }) {
  console.count('tagline');

  return (
    <fieldset>
      <legend>Tag Line</legend>
      <p>{tagline}</p>
    </fieldset>
  );
}

function EditBrand({ name, setName }) {
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

function EditTagline({ tagLine, setTagline }) {
  return (
    <div>
      <fieldset>
        <legend>Edit Tagline</legend>

        <label>
          Tagline
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

export default App;
