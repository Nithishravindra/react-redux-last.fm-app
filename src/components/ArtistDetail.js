import React from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { cardStyles } from "../styles/styles";
import { withStyles } from "@material-ui/core/styles";

class ArtistDetail extends React.Component {
  state = {
    info: [],
  };

  async componentDidMount() {
    let artistName = "eric clapton";

    let artisitInfo = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    let a = await axios.get(artisitInfo);
    this.setState({
      info: a.data.artist,
    });
  }

  render() {
    const { classes } = this.props;
    console.log(classes);

    console.log(this.state.info);
    let playCount = this.state.info.stats
      ? this.state.info.stats.playcount
      : null;
    let listeners = this.state.info.stats
      ? this.state.info.stats.listeners
      : null;
    let para = this.state.info.bio ? this.state.info.bio.content : null;

    if (para !== null) {
      let text = para.split("<");
      para = text[0];
    }

    let tag = this.state.info.tags
      ? this.state.info.tags.tag.map((item, index) => (
          <div key={index}>
            <li>{item.name}</li>
          </div>
        ))
      : null;

    return (
      <Card>
        <CardContent>
          <Typography gutterBottom component="h2" className={classes.title}>
            <strong>{this.state.info.name}</strong>
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
