import { Banner } from './Banner';
import { Tagline } from './Tagline';
import { EditBrand } from './EditBrand';
import { EditTagline } from './EditTagline';
import { createStore, StoreProvider } from './store';

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

export default App;
