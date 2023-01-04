import React from "react";
import BookablesList from "./BookablesList";
import Nextbutton from "./NextButton";

const Bookables = () => {
  return (
    <main className="bookables-page">
      <BookablesList />
      <Nextbutton />
    </main>
  );
};
export default Bookables;
