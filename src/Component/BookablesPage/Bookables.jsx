import { useState } from "react";
import data from "../../static.json";

const { bookables } = data;
console.log(bookables);

const Bookables = () => {
  const group = "Rooms";
  const bookableInGroup = bookables.filter((b) => b.group === group);
  const [bookableIndex, SetBookableIndex] = useState(1);

  return (
    <ul className="bookables items-list-nav">
      {bookableInGroup.map((b, i) => (
        <li key={b.id} className={i === bookableIndex ? "selected" : null}>
          <button onClick={() => SetBookableIndex(i)} className="btn">
            {b.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Bookables;
// import ReducerPage from "./ReducerPage";
// Remember to call the Reducer component
