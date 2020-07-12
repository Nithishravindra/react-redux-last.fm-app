import React from "react";
// import axios from "axios";
import { Switch, Route } from "react-router-dom";
import TopArtist from "./TopArtist";
import ArtistDetail from "./ArtistDetail";

class Artist extends React.Component {
  // componentDidMount() {
  //   let artistName = "raghu dixit";
  //   let album = "kanye west";
  //   // console.log(process.env.REACT_APP_ARTISTAPI);
  //   // console.log(process.env);
  //   let topArtist = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
  //   // let musicAlbum = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
  //   // let artisitInfo = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
  //   axios.get(topArtist).then((result) => {
  //     console.log(result);
  //   });
  // }

  render() {
    console.log("hello = ", this.props);
    return (
      <main>
        {/* <pre>{JSON.stringify(this.props.artists, null, "")}</pre> */}
        <h1>Artist page</h1>
        <Switch>
          <Route
            exact
            path="/"
            render={(listProps) => (
              <TopArtist {...listProps} artists={this.props.artists} />
            )}
          />
          {/* <Route exact path="/" component={TopArtist}></Route> */}
          <Route
            path="/artistInfo/:artistName"
            render={(detailProps) => (
              <ArtistDetail {...detailProps} song={this.props.song} />
            )}
          />
          {/* <Route
            path="/artistInfo/:artistName"
            component={ArtistDetail}
          ></Route> */}
        </Switch>
      </main>
    );
  }
}

export default Artist;
