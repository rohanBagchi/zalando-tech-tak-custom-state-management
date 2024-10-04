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

export default App;
