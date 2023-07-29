import React from 'react';

import { Control, Grid } from './compontents';

import dataList from './data.json';

const TABLE_ID = 'dgpays-table';

function App() {
  let sourceProp = dataList;

  return (
    <div>
      <h1>Dgpays Case Study </h1>
      <Grid id={TABLE_ID} source={sourceProp} />
      <Control tableId={TABLE_ID} />
    </div>
  );
}

export default App;
