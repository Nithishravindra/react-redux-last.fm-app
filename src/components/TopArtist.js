import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { cardTileStyles } from "../styles/styles";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

class TopArtist extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    let topArtistURL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=a5297112b152bc2e75ee90f207e25d7b&format=json`;
    this.props.fetchData(topArtistURL, "topArtist");
  }

  renderArtistTile = (i) => {
    const { classes, topArtist } = this.props;
    let artist = topArtist.artists;
    return (
      <Link to={`/artistinfo/${artist[i].name}`}>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom component="h2" className={classes.title}>
              <strong>{artist[i].name}</strong>
            </Typography>
            <Typography component="p" className={classes.overview}>
              <strong>PLAYCOUNT</strong> - {artist[i].playcount}
              <br />
              <strong>LISTENERS</strong> - {artist[i].listeners}
            </Typography>
            <Typography component="p" className={classes.overview}>
              <strong>URL</strong> -{" "}
              <a href={artist[i].url}>Click here for more info</a>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    );
  };

  render() {
    if (this.props.hasErrored) {
      return (
        <div className="center">
          <h1> Oops! Couldn't fetch data. </h1>
        </div>
      );
    }

    if (this.props.isLoading) {
      return (
        <div className="center">
          <CircularProgress color="secondary" size={150} disableShrink />
        </div>
      );
    }

    return (
      <div className="artist">
        <h1 className="title">TOP ARTISTS</h1>
        <div className="artist-listing__blocks">
          {this.props.topArtist.artists !== undefined
            ? this.props.topArtist.artists.map((item, index) => {
                return <div key={index}>{this.renderArtistTile(index)}</div>;
              })
            : []}
        </div>
      </div>
    );
  }
}

TopArtist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(cardTileStyles)(TopArtist);
