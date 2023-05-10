import { useState } from "react";
import data from "../../static.json";
import { FaArrowRight } from "react-icons/fa";
const { bookables } = data;

const Bookables = () => {
  const group = "Rooms";
  const bookableInGroup = bookables.filter((b) => b.group === group);
  const [bookableIndex, SetBookableIndex] = useState(1);

  function nextBookables() {
    SetBookableIndex((bookableIndex + 1) % bookableInGroup.length);
  }

  return (
    <div>
      <ul className="bookables items-list-nav">
        {bookableInGroup.map((b, i) => (
          <li key={b.id} className={i === bookableIndex ? "selected" : null}>
            <button onClick={() => SetBookableIndex(i)} className="btn">
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

export default Bookables;
