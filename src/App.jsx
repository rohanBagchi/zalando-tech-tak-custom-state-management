import { useState, createContext, useContext, memo } from 'react';
import './App.css';

const AppContext = createContext();

function App() {
  const [state, setState] = useState({
    brand: 'Zalando',
    tagLine: 'Be You',
  });

  return (
    <div>
      <AppContext.Provider value={{ state, setState }}>
        <MemoBanner name={state.brand} />
        <MemoTagLine tagline={state.tagLine} />

        <MemoEditBrand
          name={state.brand}
          setName={(updatedBrand) => {
            setState((state) => ({ ...state, brand: updatedBrand }));
          }}
        />
        <MemoEditTagline
          tagLine={state.tagLine}
          setTagline={(updatedTagLine) => {
            setState((state) => ({ ...state, tagLine: updatedTagLine }));
          }}
        />
      </AppContext.Provider>
    </div>
  );
}

const MemoBanner = memo(Banner);
const MemoTagLine = memo(Tagline);
const MemoEditBrand = memo(EditBrand);
const MemoEditTagline = memo(EditTagline);

function Banner() {
  console.count('banner');
  const { state } = useContext(AppContext);

  return (
    <fieldset>
      <legend>Banner</legend>
      <h1>{state.brand}</h1>
    </fieldset>
  );
}

function Tagline() {
  console.count('tagline');
  const { state } = useContext(AppContext);

  return (
    <fieldset>
      <legend>Tag Line</legend>
      <p>{state.tagLine}</p>
    </fieldset>
  );
}

function EditBrand() {
  console.count('EditBrand');
  const { state, setState } = useContext(AppContext);

  return (
    <div>
      <fieldset>
        <legend>Edit Name</legend>

        <label>
          Name
          <input
            type="text"
            name="name"
            value={state.brand}
            onChange={(e) => setState(s => ({ ...s, brand: e.target.value }))}
          />
        </label>
      </fieldset>
    </div>
  );
}

function EditTagline() {
  console.count('EditTagline');
  const { state, setState } = useContext(AppContext);

  return (
    <div>
      <fieldset>
        <legend>Edit Tagline</legend>

        <label>
          Tagline
          <input
            type="text"
            name="tagLine"
            value={state.tagLine}
            onChange={(e) => setState(s => ({ ...s, tagLine: e.target.value }))}
          />
        </label>
      </fieldset>
    </div>
  );
}

export default App;
