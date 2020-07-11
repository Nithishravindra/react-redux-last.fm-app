import React from "react";
import axios from "axios";

class Main extends React.Component {
  componentDidMount() {
    let artistName = "raghu dixit";
    let album = "kanye west";
    console.log(process.env.REACT_APP_ARTISTAPI);
    console.log(process.env);
    let topArtist = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    let musicAlbum = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    let artisitInfo = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    axios.get(topArtist).then((result) => {
      console.log(result);
    });
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default Main;
