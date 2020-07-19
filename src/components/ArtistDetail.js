import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { cardStyles } from "../styles/styles";
import { withStyles } from "@material-ui/core/styles";

class ArtistDetail extends React.Component {
  componentDidMount() {
    let artistName = "raghu dixit";
    let artisitURL = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    this.props.fetchData(artisitURL, "artistDetails");
  }

  render() {
    const { classes } = this.props;
    console.log(this.props.artistDetails);

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

    let tag = this.props.artistDetails.tags
      ? this.props.artistDetails.tags.tag.map((item, index) => (
          <div key={index}>
            <li>{item.name}</li>
          </div>
        ))
      : null;

    return (
      <Card>
        <CardContent>
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
          {tag}
          <br />
          <strong>Overview :</strong> <p className={classes.overview}>{para}</p>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(cardStyles)(ArtistDetail);
