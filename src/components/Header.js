import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { headerStyles } from "../styles/styles";

class Header extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.t}>
            <form>
              <TextField
                className={classes.textField}
                id="artist"
                label="Artist name"
                variant="outlined"
                // value={userSearched}
                // onChange={this.__handleUserChange}
                margin="normal"
                fullWidth={false}
              />
            </form>
            <Button
              variant="contained"
              color="secondary"
              // onClick={this.__fetchArtists.bind(this)}
              type="submit"
            >
              Search
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(headerStyles)(Header);
