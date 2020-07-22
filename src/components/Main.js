import React from "react";
import Artist from "./Artist";
import Header from "./Header";
import "../styles/main.css";

const Main = (props) => (
  <section>
    <Header {...props} />
    <div className="Artist-content">
      <Artist {...props} />
    </div>
  </section>
);

export default Main;
