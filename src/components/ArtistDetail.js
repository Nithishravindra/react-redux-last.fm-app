import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { cardStyles } from "../styles/styles";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

class ArtistDetail extends React.Component {
  fetchArtistData(artistName) {
    let artisitURL = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=a5297112b152bc2e75ee90f207e25d7b&format=json`;
    this.props.fetchData(artisitURL, "artistDetails");
  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
    let artistName = this.props.match.params.artistName;
    if (artistName !== prevProps.match.params.artistName) {
      this.fetchArtistData(artistName);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let artistName = this.props.match.params.artistName;
    this.fetchArtistData(artistName);
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  render() {
    const { classes } = this.props;

    let backToHome = (
      <Link className={classes.backToHome} to="/">
        BackToHome
      </Link>
    );

    if (this.props.isLoading) {
      return (
        <div className="center">
          <CircularProgress color="secondary" size={150} disableShrink />
        </div>
      );
    }

    if (this.props.match.params.artistName === "undefined") {
      return (
        <div>
          {" "}
          {backToHome}
          <h1>Enter Valid Name</h1>
        </div>
      );
    }

    if (this.isEmpty(this.props.artistDetails)) {
      return (
        <div>
          {" "}
          {backToHome}
          <h1>Artist not found</h1>
        </div>
      );
    }

    let playCount = this.props.artistDetails.stats
      ? this.props.artistDetails.stats.playcount
      : null;

    let listeners = this.props.artistDetails.stats
      ? this.props.artistDetails.stats.listeners
      : null;

    let para = this.props.artistDetails.bio
      ? this.props.artistDetails.bio.content
      : null;

    if (para !== null) {
      let text = para.split("<");
      para = text[0];
    }

    let tags = this.props.artistDetails.tags
      ? this.props.artistDetails.tags.tag.map((item, index) => (
          <div key={index}>
            <li>{item.name}</li>
          </div>
        ))
      : null;

    let similarTag = this.props.artistDetails.similar
      ? this.props.artistDetails.similar.artist.map((item, index) => (
          <div key={index}>
            <li>{item.name}</li>
          </div>
        ))
      : null;

    return (
      <div>
        {backToHome}
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography gutterBottom component="h2" className={classes.title}>
              <strong>{this.props.artistDetails.name}</strong>
            </Typography>
            <Typography>
              <strong>Playcount: </strong>
              {playCount}
            </Typography>
            <br />
            <Typography>
              <strong>Listeners:</strong> {listeners}
            </Typography>
            <br />
            <Typography>
              {tags.length !== 0 ? <strong>Tags:</strong> : null}
            </Typography>
            <br />
            {tags}
            <br />
            {para.length !== 0 ? <strong>Overview :</strong> : null}
            <p className={classes.overview}>{para}</p>
            <Typography>
              <a href={this.props.artistDetails.url}>
                Click here to view profile of {this.props.artistDetails.name}
              </a>
            </Typography>
            <br />
            {similarTag.length !== 0 ? (
              <h2>
                <strong>Similar artists: </strong>
              </h2>
            ) : null}
            {similarTag}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(cardStyles)(ArtistDetail);
