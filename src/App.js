import Main from "./components/Main";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreator from "./actions/actionCreator";

function mapStateToProps(state) {
  return {
    artists: state.artist,
    songs: state.song,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreator, dispatch);
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
