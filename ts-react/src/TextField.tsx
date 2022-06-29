import React from "react";

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => void;
    person: Person;
}

export const TextField: React.FC<Props> = ({text, person}) => {
    return (
        <div>
            <p>My name is {person.firstName} {person.lastName}</p>
            <input type="text" placeholder={text} />
        </div>
    )
}