import React from 'react';
import { TextField } from './TextField';

const App: React.FC = () => {
  return <div>
    <TextField text='What is yours?' person={{firstName: 'Bob', lastName: 'Ross'}} />
  </div>
}

export default App;
