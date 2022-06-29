import React from 'react';
import { TextField } from './TextField';
import { Reducer } from './/Reducer';

const App: React.FC = () => {
  return <div>
    <TextField person={{ firstName: 'Bob', lastName: 'Ross' }} handleChange={e => { console.log(e.target.value); }} />
    <Reducer />
  </div>
}

export default App;
