import React, { useState } from "react";
import data from "../../static.json"

const UserList = () => {
   const {users} = data;
   const [usersIndex, setUsersIndex] = useState(1);
    
    return (
        <ul className="users items-list-nav">
            {users.map((item , i) => (
                <li key={item.name} className={i===usersIndex? "selected":null}><button className="btn" onClick={() =>setUsersIndex(i)}>{item.name}</button></li>
            ))}

        </ul>
    )
}


export default UserList