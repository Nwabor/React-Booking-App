import { useState } from "react";
import data from "../../static.json";

const { users } = data;
console.log(users);

export default function UserList_1() {
  const [userIndex, SetUserIndex] = useState(0);
  return (
    <ul className="users items-list-nav">
      {users.map((b, i) => (
        <li key={b.id} className={i === userIndex ? "selected" : null}>
          <button onClick={() => SetUserIndex(i)} className="btn">
            {b.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
