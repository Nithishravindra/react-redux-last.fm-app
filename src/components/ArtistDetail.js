import React from "react";
import axios from "axios";

export default class ArtistDetail extends React.Component {
  state = {
    info: [],
  };
  async componentDidMount() {
    let artistName = "raghu dixit";

    // let topArtist = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    // let musicAlbum = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    let artisitInfo = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    let a = await axios.get(artisitInfo);
    this.setState({
      info: a.data.artist,
    });
  }
  render() {
    console.log(this.state.info);
    return (
      <div>
        <h1>ARTIST DETAIL PAGE = {this.props.match.params.artistName}</h1>
      </div>
    );
  }
}
