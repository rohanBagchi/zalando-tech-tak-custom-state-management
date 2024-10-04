import './App.css';
import { createStore, StoreProvider, useSelector } from './store';

const store = createStore({
  brand: 'Zalando',
  tagLine: 'Be You',
});

function App() {
  return (
    <div>
      <StoreProvider value={store}>
        <Banner />
        <Tagline />

        <EditBrand />
        <EditTagline />
      </StoreProvider>
    </div>
  );
}

function Banner() {
  console.count('banner');
  const [brand] = useSelector(state => state.brand);

  return (
    <fieldset>
      <legend>Banner</legend>
      <h1>{brand}</h1>
    </fieldset>
  );
}

function Tagline() {
  console.count('tagline');
  const [tagLine] = useSelector(state => state.tagLine);

  return (
    <fieldset>
      <legend>Tag Line</legend>
      <p>{tagLine}</p>
    </fieldset>
  );
}

function EditBrand() {
  console.count('EditBrand');
  // const { state, setState } = useContext(AppContext);
  const [brand, setState] = useSelector(state => state.brand);

  return (
    <div>
      <fieldset>
        <legend>Edit Name</legend>

        <label>
          Name
          <input
            type="text"
            name="name"
            value={brand}
            onChange={(e) => setState({ brand: e.target.value })}
          />
        </label>
      </fieldset>
    </div>
  );
}

function EditTagline() {
  console.count('EditTagline');
  const [tagLine, setState] = useSelector(state => state.tagLine);

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
            onChange={(e) => setState({ tagLine: e.target.value })}
          />
        </label>
      </fieldset>
    </div>
  );
}

export default App;
