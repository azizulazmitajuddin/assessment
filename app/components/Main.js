import React, { Component } from "react";
import { connect } from "react-redux";

import AppNavigator from "./Navigator";

type Props = {};
class Main extends Component<Props> {
  render() {
    return <AppNavigator />;
  }
}

const mapStateToProps = state => ({
  item: state.news
});

Main = connect(
  mapStateToProps,
  null
)(Main);

export default Main;
