import React, { Fragment, useState } from "react";
import data from "../../static.json";
import { FaArrowRight } from "react-icons/fa";

const Nextbutton = () => {
  const { bookables, sessions, days } = data;
  const [group, setGroup] = useState("Kit");
  const bookablesInGroup = bookables.filter((item) => item.group === group);
  const [bookablesIndex, setBookablesIndex] = useState(0);
  const groups = [...new Set(bookables.map((b) => b.group))];

  const bookable = bookablesInGroup[bookablesIndex];
  const [hasDetails, setHasDetails] = useState(false);

  function changeGroup(event) {
    setGroup(event.target.value);
    setBookablesIndex(0);
  }

  function nextBookable() {
    setBookablesIndex((i) => (i + 1) % bookablesInGroup.length);
  }

  return (
    <Fragment>
      {bookable && (
        <div className="bookable-details">
          <div className="item">
            <h2>{bookable.title}</h2>
            <span className="controls">
              <label>
                <input
                  type="checkbox"
                  checked={hasDetails}
                  onChange={() => setHasDetails((has) => !has)}
                />
                Show Details
              </label>
            </span>
          </div>
          <p>{bookable.notes}</p>
          {hasDetails && (
            <div className="item-details">
              <h3>Availability</h3>
              <div className="bookable-availability">
                <ul>
                  {bookable.days.sort().map((d) => (
                    <li key={d}>{days[d]}</li>
                  ))}
                </ul>
                <ul>
                  {bookable.sessions.map((s) => (
                    <li key={s}>{sessions[s]}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
      <div>
        <select value={group} onChange={changeGroup}>
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
    </Fragment>
  );
};

export default Nextbutton;
