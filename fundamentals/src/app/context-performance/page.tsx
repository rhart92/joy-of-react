'use client'
import React from 'react';

import FavoriteColorProvider from './FavoriteColorProvider';
import Counter from './Counter';
import ColorPicker from './ColorPicker';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <FavoriteColorProvider>
        <Counter count={count} setCount={setCount} />
        <ColorPicker />
      </FavoriteColorProvider>
      
      <p>
        Current count: {count}
      </p>
    </>
  );
}

export default App;
