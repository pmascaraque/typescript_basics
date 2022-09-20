import React, { ReactNode, ReactElement } from 'react';
import './App.css';

//Conventional Props
function Heading({ title }: { title: string; }) {
  return (
    <h1>{title}</h1>
  )
}

//Default Props
const defaultContainerProps = {
  heading: <strong>Default Container Props</strong>
}

type ContainerProps = {
  children: ReactNode
} & typeof defaultContainerProps;

function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  )
}
Container.defaultProps = defaultContainerProps;

//Functional Props
function UseStateCounter({ children }: { children: (num: number) => ReactNode }) {
  const [state, stateSet] = React.useState<number>(1);

  return (
    <div>
      <div>
        {children(state)}
      </div>
      <div>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>
    </div>)
}

function App() {
  return (
    <div>
      <Heading title="Hello there"></Heading>
      <Container>Children</Container>
      <UseStateCounter>{(num: number) => <div>Today's number is {num}</div>}</UseStateCounter>
    </div>
  );
}

export default App;
