import React, { useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text?: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => void;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ person, handleChange }) => {
  const [yourName, setYourName] = useState<TextNode>({ text: 'hello' });
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <p>My name is {person.firstName} {person.lastName}</p>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  )
}