import React from 'react';
import { TextField } from './TextField';

const App: React.FC = () => {
  return <div>
    <TextField person={{ firstName: 'Bob', lastName: 'Ross' }} handleChange={e => { console.log(e.target.value); }} />
  </div>
}

export default App;
