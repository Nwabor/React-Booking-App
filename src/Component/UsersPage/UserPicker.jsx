import React from "react";
import data from "../../static.json";

const UserPicker = () => {
  const { users } = data;
  return (
    <select>
      {users.map((a) => (
        <option key={a.id}>{a.name}</option>
      ))}
    </select>
  );
};

export default UserPicker;
