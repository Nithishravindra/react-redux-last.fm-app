import React from "react";
import axios from "axios";

export default class ArtistDetail extends React.Component {
  componentDidMount() {
    let artistName = "raghu dixit";

    // let topArtist = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    // let musicAlbum = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    let artisitInfo = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    axios.get(artisitInfo).then((result) => {
      console.log(result.data);
    });
  }
  render() {
    return (
      <div>
        <h1>ARTIST DETAIL PAGE = {this.props.match.params.artistName}</h1>
      </div>
    );
  }
}
