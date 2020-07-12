import React from "react";

export default class ArtistDetail extends React.Component {
  render() {
    return (
      <div>
        <h1>ARTIST DETAIL PAGE = {this.props.match.params.artistName}</h1>
      </div>
    );
  }
}
