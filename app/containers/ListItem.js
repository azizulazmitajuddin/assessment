import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import moment from "moment";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 5,
    paddingLeft: 10,
    paddingBottom: 10,
    color: "black",
    fontSize: 17,
    fontWeight: "600",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    flex: 1,
    flexDirection: "row"
  },
  leftContainer: {
    width: "90%"
  },
  rightContainer: {
    justifyContent: "center",
    width: "10%"
  },
  datetime: {
    fontWeight: "bold"
  },
  humidity: {
    fontWeight: "bold",
    color: "grey"
  },
  weather: {
    color: "grey"
  }
});

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

NumberList = props => {
  const listNews = props.listNews;
  const totalList = listNews.map((data, index) => (
    <TouchableOpacity key={data.datetime + "" + index}>
      <View style={styles.container} TouchableOpacity>
        <View style={styles.leftContainer}>
          <Text style={styles.datetime}>{moment.unix(data.dt).format("DD MMM YYYY, ddd")}</Text>
          <Text style={styles.humidity}>
            {data.main.humidity} - {data.clouds.all}
          </Text>
          <Text style={styles.weather}>{capitalize(data.weather[0].main)}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text>></Text>
        </View>
      </View>
    </TouchableOpacity>
  ));
  return totalList;
};

let ListItem = ({ listNews, navigate }) => (listNews ? <NumberList listNews={listNews} navigate={navigate} /> : null);

const mapStateToProps = state => ({
  listNews: state.listNews
});

ListItem = connect(
  mapStateToProps,
  null
)(ListItem);

export default ListItem;
