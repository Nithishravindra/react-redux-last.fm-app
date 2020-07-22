import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actionCreators from "./actions/actionCreator";
import Main from "./components/Main";

const mapStateToProps = (state) => {
  return {
    input: state.inputValue,
    hasErrored: state.hasErrored,
    topArtist: state.topArtist,
    isLoading: state.isLoading,
    artistDetails: state.artistDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
