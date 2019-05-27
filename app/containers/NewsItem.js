import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import moment from "moment";

let NewsItem = ({ item }) =>
  item ? (
    <View>
      <Text>{item.name}</Text>
      <Text>{moment.unix(item.dt).format("MM/DD/YYYY")}</Text>
      <Text>{item.main.humidity}</Text>
      <Text>{item.weather[0].description}</Text>
    </View>
  ) : null;

const mapStateToProps = state => ({
  item: state.news
});

NewsItem = connect(
  mapStateToProps,
  null
)(NewsItem);

export default NewsItem;
