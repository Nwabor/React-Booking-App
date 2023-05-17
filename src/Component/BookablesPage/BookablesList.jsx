import { useState } from "react";
import data from "../../static.json";
import { FaArrowRight } from "react-icons/fa";
const { bookables } = data;

const BookablesList = () => {
  const [group, setGroup] = useState("Kit");
  const bookableInGroup = bookables.filter((b) => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(0);
  const groups = [...new Set(bookables.map((b) => b.group))];

  function changeGroup(event) {
    setGroup(event.target.value);
    setBookableIndex(0);
  }

  function nextBookables() {
    setBookableIndex((bookableIndex + 1) % bookableInGroup.length);
  }

  return (
    <div>
      <select value={groups} multiple={true} onChange={changeGroup}>
        {groups.map((g) => (
          <option value={g} key={g}>
            {g}
          </option>
        ))}
      </select>

      <ul className="bookables items-list-nav">
        {bookableInGroup.map((b, i) => (
          <li key={b.id} className={i === bookableIndex ? "selected" : null}>
            <button onClick={() => setBookableIndex(i)} className="btn">
              {b.title}
            </button>
          </li>
        ))}
      </ul>

      <p>
        <button onClick={nextBookables} autoFocus className="btn">
          <FaArrowRight />
          <span>Next</span>
        </button>
      </p>
    </div>
  );
};

export default BookablesList;
