import React from 'react';
import UseStateComponent from './components/UseStateComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseContextComponent from './components/UseContextComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseRefComponent from './components/UseRefComponent';
import CustomHookComponent from './components/CustomHookComponent';
import MoreReactComponents from './components/MoreReactComponents';
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
        <h1>UseReducer</h1>
        <UseReducerComponent />
        <h1>useRef</h1>
        <UseRefComponent />
        <h1>CustomHookComponent</h1>
        <CustomHookComponent />
        <h1>MoreReactComponents</h1>
        <MoreReactComponents />
    </div>
  );
}

export default App;
