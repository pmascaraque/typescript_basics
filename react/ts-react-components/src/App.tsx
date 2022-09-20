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

//Generics List
function List<ListItem>({
  items, 
  render
}: {
  items: ListItem[],
  render: (item: ListItem) => ReactNode
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}

function App() {
  return (
    <div>
      <Heading title="Hello there"></Heading>
      <Container>Children</Container>
      <UseStateCounter>{(num: number) => <div>Today's number is {num}</div>}</UseStateCounter>
      <List items={["JACK", "Sadie", "Otto"]} render={(item: string) => <div>{item.toLowerCase()}</div>}></List>
    </div>
  );
}

export default App;
