import React from "react";
import { connect } from "react-redux";
import { View, Button } from "react-native";

import { getNews } from "../actions";

class PullItem extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getNews();
  }
  render() {
    return <View />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNews: () => {
      dispatch(getNews());
    }
  };
};

PullItem = connect(
  null,
  mapDispatchToProps
)(PullItem);

export default PullItem;
