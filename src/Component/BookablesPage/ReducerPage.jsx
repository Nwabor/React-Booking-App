import React, { useReducer, Fragment } from "react";
import data from "../../static.json";
import { FaArrowRight } from "react-icons/fa";
import Reducer from "./Reducer";

const { bookables, sessions, days } = data;

const initialState = {
  group: "Rooms",
  bookableIndex: 0,
  hasDetails: true,
  bookables,
};

const ReducerPage = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const { group, bookableIndex, bookables, hasDetails } = state;
  const bookableInGroup = bookables.filter((b) => b.group === group);
  const bookable = bookableInGroup[bookableIndex];
  const groups = [...new Set(bookables.map((b) => b.group))]; // this shows the group as an array of 2 values

  function changeGroup(e) {
    dispatch({
      type: "SET_GROUP",
      payload: e.target.value,
    });
  }

  function changeBookable(selectedIndex) {
    dispatch({
      type: "SET_BOOKABLE",
      payload: selectedIndex,
    });
  }

  function nextBookable() {
    dispatch({
      type: "NEXT_BOOKABLE",
    });
  }

  function toggledetails() {
    dispatch({
      type: "TOGGLE_HAS_DETAILS",
    });
  }
  return (
    <Fragment>
      <div>
        {/* group picker */}
        {/* <ul>
          {bookableInGroup.map((element, index) => (
            <li
              key={element.title}
              className={index === bookableIndex ? "selected" : null}
            >
              <button className="btn" onClick={() => changeBookable(index)}>
                {element.title}
              </button>
            </li>
          ))}
        </ul> */}

        {/* NEXt Botton */}
        {bookable && (
          <div className="bookable-details">
            <div className="item">
              <h2>{bookable.title}</h2>
              <span className="controls">
                <label>
                  <input
                    type="checkbox"
                    checked={hasDetails}
                    onChange={toggledetails}
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
                    {bookable.sessions.sort().map((b) => (
                      <li key={b}>{sessions[b]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {/* here to select the group */}
      <div>
        <select value={group} onChange={changeGroup}>
          {groups.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        {/* to select the bookables */}
        <ul className="bookables items-list-nav">
          {bookableInGroup.map((item, i) => (
            <li
              key={item.title}
              className={i === bookableIndex ? "selected" : null}
            >
              <button className="btn" onClick={() => changeBookable(i)}>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        {/* next button */}
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

export default ReducerPage;
