import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import data from "../../static.json";

const { users } = data;

export default function UserList_1() {
  const [userIndex, SetUserIndex] = useState(0);

  function changeUser() {
    SetUserIndex((userIndex + 1) % users.length);
  }
  return (
    <div>
      <ul className="users items-list-nav">
        {users.map((b, i) => (
          <li key={b.id} className={i === userIndex ? "selected" : null}>
            <button onClick={() => SetUserIndex(i)} className="btn">
              {b.name}
            </button>
          </li>
        ))}
      </ul>

      <p>
        <button className="btn" onClick={changeUser}>
          <FaArrowRight />
          <span>Next</span>
        </button>
      </p>
    </div>
  );
}
