import React, { Fragment, useState } from "react";
import data from "../../static.json";

const UserList = () => {
  const { users } = data;
  const [usersIndex, setUsersIndex] = useState(0);
  const user = users[usersIndex];

  return (
    <Fragment>
      <div>
        <div className="item">
          <h2>{user.name}</h2>
        </div>
        <p>{user.notes}</p>
        <ul className="users items-list-nav">
          {users.map((item, i) => (
            <li
              key={item.name}
              className={i === usersIndex ? "selected" : null}
            >
              <button className="btn" onClick={() => setUsersIndex(i)}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default UserList;
