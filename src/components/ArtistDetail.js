import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { cardStyles } from "../styles/styles";
import { withStyles } from "@material-ui/core/styles";

class ArtistDetail extends React.Component {
  componentDidMount() {
    // let artistName = this.props.location.state
    //   ? this.props.location.state.artistName
    //   : "";
    let artistName = "eric clapton";

    let artisitURL = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    this.props.fetchData(artisitURL, "artistDetails");
  }

  render() {
    const { classes } = this.props;
    // console.log(this.props.location.state.artistName);

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
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography gutterBottom component="h2" className={classes.title}>
            <strong>{this.props.artistDetails.name}</strong>
          </Typography>
          <Typography>
            <strong>Playcount: </strong> {playCount}
          </Typography>
          <br />
          <Typography>
            <strong>Listeners:</strong> {listeners}
          </Typography>
          <br />
          <Typography>
            <strong>Tags:</strong>
          </Typography>
          <br />
          {tags}
          <br />
          <strong>Overview :</strong> <p className={classes.overview}>{para}</p>
          <Typography>
            <a href={this.props.artistDetails.url}>
              Click here to view profile of {this.props.artistDetails.name}
            </a>
          </Typography>
          <br />
          <h2>
            <strong>Similar artists: </strong>
          </h2>
          {similarTag}
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(cardStyles)(ArtistDetail);
