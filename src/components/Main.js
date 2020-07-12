import React from "react";
import Artist from "./Artist";
import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <div>
      <h1>Hello</h1>
      <Artist {...props} />
    </div>
  );
};
export default Main;
