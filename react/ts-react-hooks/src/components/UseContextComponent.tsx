import { useState, useContext } from "react";
import UserContext, { UserStateType } from "../store";

function ConsumerComponent() {
  const user = useContext(UserContext);

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  )
}

function UseContextComponent() {
  const [user, userSet] = useState<UserStateType>({
    first: "Pep",
    last: "Guardiola"
  });

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() => userSet({
          first: "Jose",
          last: "Maurinho"
        })}
        >Change context</button>
    </UserContext.Provider>
  )
}

export default UseContextComponent;