import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from "./UsersPage/User";
import Bookings from "./BookingPage/Bookings";
import Bookables from "./BookablesPage/Bookables";
import "../App.css";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import UserPicker from "./UsersPage/UserPicker";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/bookings" className="btn btn-header">
                  <FaCalendarAlt />
                  <span>Bookings</span>
                </Link>
              </li>
              <li>
                <Link to="/bookables" className="btn btn-header">
                  <FaDoorOpen />
                  <span>Bookables</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className="btn btn-header">
                  <FaUsers />
                  <span>Users</span>
                </Link>
              </li>
            </ul>
          </nav>
          <UserPicker />
        </header>
      </div>
      <Routes>
        <Route path="/Users" element={<User />}></Route>
        <Route path="/Bookings" element={<Bookings />}></Route>
        <Route path="/Bookables" element={<Bookables />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
