import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { cardTileStyles } from "../styles/styles";

const ArtistTile = (props) => {
  const { classes, i } = props;
  console.log(props);
  let artist = props.artist.artist;
  return (
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
  );
};

ArtistTile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(cardTileStyles)(ArtistTile);
