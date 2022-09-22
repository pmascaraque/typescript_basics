import { createContext } from "react";

const initialState = {
  first: "Bob",
  last: "Ross"
};

export type UserStateType = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;