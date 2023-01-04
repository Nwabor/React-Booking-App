import React, { useState } from "react";
import data from "../../static.json";
import { FaArrowRight } from "react-icons/fa";

const Nextbutton = () => {
  const { bookables } = data;
  const group = "Rooms";
  const bookablesInGroup = bookables.filter((item) => item.group === group);
  const a = bookablesInGroup.length;
  console.log(a);
  const [bookablesIndex, setBookablesIndex] = useState(1);

  function nextBookable() {
    setBookablesIndex((i) => (i + 1) % bookablesInGroup.length);
  }

  return (
    <div>
      <ul className="bookables items-list-nav">
        {bookablesInGroup.map((item, i) => (
          <li
            key={item.title}
            className={i === bookablesIndex ? "selected" : null}
          >
            <button className="btn" onClick={() => setBookablesIndex(1)}>
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
