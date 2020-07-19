import React, { Component } from "react";
import ArtistTile from "./ArtistTile";

export default class TopArtist extends Component {
  componentDidMount() {
    let topArtistURL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    this.props.fetchData(topArtistURL);
  }

  renderArtistTiles() {
    // console.log(this.props);
    // console.log("topArtist", this.props.topArtist.artists);

    let renderBlock = [];
    renderBlock =
      this.props.topArtist.artists !== undefined
        ? this.props.topArtist.artists.map((item, index) => {
            // console.log(this.props.topArtist.artists);
            return <ArtistTile key={index} i={index} {...this.props} />;
          })
        : [];
    return renderBlock;
  }

  render() {
    return (
      <div className="artist">
        <h1 className="title">TOP 50 ARTIST PAGE</h1>
        <div className="artist-listing__blocks">{this.renderArtistTiles()}</div>
      </div>
    );
  }
}
