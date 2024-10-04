import { useState } from 'react';
import { Banner } from './Banner';
import { Tagline } from './Tagline';
import { EditBrand } from './EditBrand';
import { EditTagline } from './EditTagline';
import { AppContext } from './AppContext';

function App() {
  const [state, setState] = useState({
    brand: 'Zalando',
    tagLine: 'Be You',
  });

  return (
    <div>
      <AppContext.Provider value={{ state, setState }}>
        <Banner />
        <Tagline />

        <EditBrand />
        <EditTagline
          tagLine={state.tagLine}
          setTagline={(updatedTagLine) => {
            setState((state) => ({ ...state, tagLine: updatedTagLine }));
          }}
        />
      </AppContext.Provider>
    </div>
  );
}

export default App;
