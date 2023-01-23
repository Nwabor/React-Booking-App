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
        <div className="user-title">
          <h3>{user.title}</h3>
          <p>{user.notes}</p>
        </div>
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
