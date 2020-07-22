import React from "react";
import { Switch, Route } from "react-router-dom";
import TopArtist from "./TopArtist";
import ArtistDetail from "./ArtistDetail";

const Artist = (props) => (
  <main>
    <Switch>
      <Route exact path="/" render={() => <TopArtist {...props} />} />
      <Route
        exact
        path="/artistInfo/:artistName"
        render={(routeProps) => (
          <ArtistDetail {...{ ...props, ...routeProps }} />
        )}
      />
    </Switch>
  </main>
);

export default Artist;
