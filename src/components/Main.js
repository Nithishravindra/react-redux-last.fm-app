import React from "react";
import Artist from "./Artist";

const Main = (props) => {
  console.log("Main ", props);
  return (
    <div>
      <h1>Hello</h1>
      <Artist {...props} />
    </div>
  );
};
export default Main;
