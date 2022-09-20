import React from 'react';
import { Counter } from './Counter';
import { Reducer } from './/Reducer';
import { TextField } from './TextField';

const App: React.FC = () => {
  return <div>
    <TextField person={{ firstName: 'Bob', lastName: 'Ross' }} handleChange={e => { console.log(e.target.value); }} />
    <Counter>
      {({ count, setCount }) => <div>{count}<button onClick={() => setCount(count + 1)}>+</button></div>}
    </Counter>
    <Reducer />
  </div>
}

export default App;
