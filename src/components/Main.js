import React from "react";
import Artist from "./Artist";
import Header from "./Header";
import "../styles/main.css";

const Main = (props) => {
  console.log("Main ", props);
  return (
    <section>
      <Header />
      <div className="Artist-content">
        <Artist {...props} />
      </div>
    </section>
  );
};
export default Main;
