import React, { Component } from "react";

export default class TopArtist extends Component {
  constructor(props) {
    super(props);
    console.log("In constru");
  }

  render() {
    console.log("HI");
    console.log(this.props.artists);
    return (
      <div>
        <h1>TOP ARTIST PAGE</h1>
        <pre>{JSON.stringify(this.props.artists, null, "")}</pre>
      </div>
    );
  }
}
