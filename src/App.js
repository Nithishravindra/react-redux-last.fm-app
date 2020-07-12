import Main from "./components/Main";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreator from "./actions/actionCreator";

function mapStateToProps(state) {
  console.log("state = ", state);
  return {
    topArtists: state.topArtists,
    artistDetails: state.artistDetails,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreator, dispatch);
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
