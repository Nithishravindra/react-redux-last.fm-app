import React, { Component } from "react";
import axios from "axios";
import ArtistTile from "./ArtistTile";

export default class TopArtist extends Component {
  state = {
    artists: [],
  };

  componentDidMount() {
    console.log("top artist ", this.props);
    let topArtistURL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    this.props.fetchData(topArtistURL);
  }

  renderArtistTiles() {
    console.log(this.props.topArtist.artist);
    console.log("topArtist", this.props.topArtist.artists);

    let renderBlock = [];
    renderBlock =
      this.props.topArtist.artist !== undefined
        ? this.props.topArtist.artist.map((item, index) => (
            <ArtistTile key={index} i={index} artist={this.props.topArtist} />
          ))
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
