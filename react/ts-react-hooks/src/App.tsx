import React from 'react';
import UseStateComponent from './components/UseStateComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseContextComponent from './components/UseContextComponent';
import './App.css';

function App() {
  return (
    <div>
        <h1>useState</h1>
        <UseStateComponent />
        <h1>useEffect</h1>
        <UseEffectComponent />
        <h1>UseContext</h1>
        <UseContextComponent />
    </div>
  );
}

export default App;
