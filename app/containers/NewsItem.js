import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import moment from "moment";

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    alignItems: "center",
    color: "black",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "600"
  },
  datetime: {
    fontWeight: "bold"
  },
  humidity: {
    fontSize: 31,
    fontWeight: "bold"
  },
  weather: {
    color: "grey"
  }
});

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

let NewsItem = ({ item }) =>
  item ? (
    <View style={styles.container}>
      <Text style={styles.datetime}>{moment.unix(item.dt).format("ddd, DD MMM YYYY h:hh A")}</Text>
      <Text style={styles.humidity}>{item.main.humidity}</Text>
      <Text style={styles.weather}>{capitalize(item.weather[0].description)}</Text>
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
