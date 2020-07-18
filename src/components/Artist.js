import React from "react";
import { Switch, Route } from "react-router-dom";
import TopArtist from "./TopArtist";
import ArtistDetail from "./ArtistDetail";

class Artist extends React.Component {
  render() {
    // console.log(" Artist = ", this.props);
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={(listProps) => (
              <TopArtist
              // {...listProps}
              // {...this.props}
              // artists={this.props.topArtists}
              />
            )}
          />

          <Route
            path="/artistInfo/:artistName"
            render={(detailProps) => (
              <ArtistDetail
                {...detailProps}
                {...this.props}
                artistDetails={this.props.artistDetails}
              />
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default Artist;
