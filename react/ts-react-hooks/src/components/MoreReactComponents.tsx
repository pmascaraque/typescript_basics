import { ReactNode, ReactElement } from "react";

export interface HeadingProps {
  title: string;
}

export const Heading = ({ title }: HeadingProps) => {
  return <h2>{title}</h2>
}

export const List: <ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) => ReactElement = ({ items, render }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

function MoreReactComponents() {
  return <div>
    <Heading title="hello" />
    <List items={["a", "b", "c"]} render={(str) => <strong>{str}</strong>}/>
  </div>
}

export default MoreReactComponents;