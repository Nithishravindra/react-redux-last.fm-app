import React, { Component } from "react";
import axios from "axios";
import ArtistTile from "./ArtistTile";

export default class TopArtist extends Component {
  state = {
    artists: [],
  };

  async componentDidMount() {
    let topArtist = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    let a = await axios.get(topArtist);
    this.setState({
      artists: a.data.artists,
    });
  }

  renderArtistTiles() {
    let renderBlock = [];
    renderBlock =
      this.state.artists.artist !== undefined
        ? this.state.artists.artist.map((item, index) => (
            <ArtistTile
              key={index}
              i={index}
              artist={this.state.artists.artist}
            />
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
