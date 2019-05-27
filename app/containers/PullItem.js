import React from "react";
import { connect } from "react-redux";
import { View, Button } from "react-native";

import { getNews, getListNews } from "../actions";

class PullItem extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getNews();
    this.props.getListNews();
  }
  render() {
    return <View />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNews: () => {
      dispatch(getNews());
    },
    getListNews: () => {
      dispatch(getListNews());
    }
  };
};

PullItem = connect(
  null,
  mapDispatchToProps
)(PullItem);

export default PullItem;
