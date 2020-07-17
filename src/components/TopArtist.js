import React, { Component } from "react";
import axios from "axios";

export default class TopArtist extends Component {
  componentDidMount() {
    let artistName = "raghu dixit";
    let album = "kanye west";
    console.log(process.env.REACT_APP_ARTISTAPI);
    console.log(process.env);
    let topArtist = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    // let musicAlbum = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    // let artisitInfo = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    axios.get(topArtist).then((result) => {
      console.log(result.data);
    });
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
