import React from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { cardTileStyles } from "../styles/styles";
import { withStyles } from "@material-ui/core/styles";

class ArtistDetail extends React.Component {
  state = {
    info: [],
  };

  async componentDidMount() {
    let artistName = "raghu dixit";

    let artisitInfo = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${process.env.REACT_APP_ARTISTAPI}&format=json`;
    let a = await axios.get(artisitInfo);
    this.setState({
      info: a.data.artist,
    });
  }

  render() {
    const { classes } = this.props;
    console.log(this.state.info);
    let x = this.state.info.stats ? this.state.info.stats.playcount : null;
    let y = this.state.info.stats ? this.state.info.stats.listeners : null;
    let para = this.state.info.bio ? this.state.info.bio.content : null;
    let tag = this.state.info.tags
      ? this.state.info.tags.tag.map((item, index) => (
          <div key={index}>
            <li>{item.name}</li>
          </div>
        ))
      : null;

    return (
      <Card>
        <h2>{this.state.info.name}</h2>
        <CardContent>
          <Typography>
            <p>Playcount: {x}</p>
            <p>Listeners: {y}</p>
            <p>Tags: {tag}</p>
            <p>
              <strong>overview :</strong> {para}
            </p>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(cardTileStyles)(ArtistDetail);
