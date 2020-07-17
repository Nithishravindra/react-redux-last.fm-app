import React from "react";
import Artist from "./Artist";
import Header from "./Header";

const Main = (props) => {
  console.log("Main ", props);
  return (
    <section>
      <Header />
      <h1>Hello</h1>
      <Artist {...props} />
    </section>
  );
};
export default Main;
