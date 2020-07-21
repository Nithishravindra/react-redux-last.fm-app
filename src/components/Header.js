import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { headerStyles } from "../styles/styles";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.t}>
          <TextField
            className={classes.textField}
            id="artist"
            placeholder="Search artist"
            variant="outlined"
            value={props.inputValue}
            onChange={props.handleInput}
            margin="dense"
          />
          <Link
            to={{
              pathname: `/artistinfo/${props.input.inputValue}`,
            }}
          >
            <Button variant="contained" color="secondary" type="submit">
              Search
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyles)(Header);
