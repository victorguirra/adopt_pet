import React from 'react';

import { FiltersProvider } from './hooks/filters';

import Routes from './routes';

function App(){
  return(
    <FiltersProvider>
      <Routes />
    </FiltersProvider>
  )
}

export default App;