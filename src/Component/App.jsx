import React from "react";
import { ReactDOM } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import User from "./UsersPage/User";
import Bookings from "./BookingPage/Bookings";
import Bookables from "./BookablesPage/Bookables";
import {FaCalendarAlt, FaDoorOpen, FaUsers} from "react-icons/fa";

const App = () => {
    return (<div className="container">
        <User/>
        <Bookings/>
        <Bookables/>
    </div>)
}

export default App