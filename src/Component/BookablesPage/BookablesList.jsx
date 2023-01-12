import React, { useState } from "react";
import data from "../../static.json";

const BookablesList = () => {
  const { bookables } = data;
  const group = "Rooms";
  const bookablesInGroup = bookables.filter((item) => item.group === group);
  const [bookablesIndex, setBookablesIndex] = useState(1);

  return (
    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((item, i) => (
        <li
          key={item.title}
          className={i === bookablesIndex ? "selected" : null}
        >
          <button className="btn" onClick={() => setBookablesIndex(i)}>
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BookablesList;
