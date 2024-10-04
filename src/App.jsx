import { useState } from 'react';
import { Banner } from './Banner';
import { Tagline } from './Tagline';
import { EditBrand } from './EditBrand';
import { EditTagline } from './EditTagline';

function App() {
  const [state, setState] = useState({
    brand: 'Zalando',
    tagLine: 'Be You',
  });

  return (
    <div>
      <Banner brand={state.brand} />
      <Tagline tagline={state.tagLine} />

      <EditBrand
        brand={state.brand}
        setBrandName={(updatedBrand) => {
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

export default App;
