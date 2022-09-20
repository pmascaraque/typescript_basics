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
function App() {
  return (
    <div>
      <Heading title="Hello there"></Heading>
      <Container>Children</Container>
    </div>
  );
}

export default App;
