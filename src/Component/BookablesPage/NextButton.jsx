import React, { useState } from "react";
import data from "../../static.json";
import { FaArrowRight } from "react-icons/fa";

const Nextbutton = () => {
  console.log(data);
  const { bookables, sessions, days } = data;
  const [group, setGroup] = useState("Kit");
  const bookablesInGroup = bookables.filter((item) => item.group === group);
  const [bookablesIndex, setBookablesIndex] = useState(0);

  const groups = [...new Set(bookables.map((b) => b.group))];

  // this is what will happen when the next button is clicked
  function nextBookable() {
    setBookablesIndex((i) => (i + 1) % bookablesInGroup.length);
  }

  return (
    <div>
      <select value={group} onChange={(e) => setGroup(e.target.value)}>
        {groups.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

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
      <p>
        <button className="btn" onClick={nextBookable} autoFocus>
          <FaArrowRight />
          <span>Next</span>
        </button>
      </p>
    </div>
  );
};

export default Nextbutton;
