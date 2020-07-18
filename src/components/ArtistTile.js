import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { cardTileStyles } from "../styles/styles";

const ArtistTile = (props) => {
  console.log(props);
  const { classes, artist, i } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          gutterBottom
          variant="headline"
          component="h2"
          className={classes.title}
        >
          {artist[i].name}
        </Typography>
        <Typography component="p" className={classes.overview}>
          PLAYCOUNT - {artist[i].playcount}
          <br />
          LISTENERS - {artist[i].listeners}
          <br />
        </Typography>
        <Typography component="p" className={classes.overview}>
          URL - <a href={artist[i].url}>{artist[i].url}</a>
        </Typography>
      </CardContent>
    </Card>
  );
};
ArtistTile.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(cardTileStyles)(ArtistTile);
