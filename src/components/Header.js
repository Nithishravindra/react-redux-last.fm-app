import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { headerStyles } from "../styles/styles";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { classes } = this.props;
    console.log("header", this.props);
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.t}>
            <form>
              <TextField
                className={classes.textField}
                id="artist"
                placeholder="Search artist"
                variant="outlined"
                value={this.props.inputValue}
                onChange={this.props.handleinput}
                margin="dense"
              />
            </form>

            {this.props.inputValue}

            <Link
              className="link-header"
              to={{
                pathname: `/artistinfo/s`,
                state: { artistName: "eric clapton" },
              }}
            >
              {" "}
              Search{" "}
            </Link>

            <Button variant="contained" color="secondary" type="submit">
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
