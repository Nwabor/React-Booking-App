import data from "../../static.json";

const { bookables } = data;
console.log(bookables);

const Bookables = () => {
  const group = "Rooms";
  const bookableInGroup = bookables.filter((b) => b.group === group);
  console.log(bookableInGroup);
  let bookableIndex = 1;

  function changeBookable(selectedIndex) {
    bookableIndex = selectedIndex;
    console.log(selectedIndex);
  }

  return (
    <ul className="bookables items-list-nav">
      {bookableInGroup.map((b, i) => (
        <li key={b.id} className={i === bookableIndex ? "selected" : null}>
          <button onClick={() => changeBookable(i)} className="btn">
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
