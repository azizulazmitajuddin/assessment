import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 36,
    backgroundColor: "red"
  },
  title: {
    marginTop: 5,
    alignItems: "center",
    color: "white",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "600"
  }
});

let Header = ({ item }) =>
  item ? (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  ) : null;

const mapStateToProps = state => ({
  item: state.news
});

Header = connect(
  mapStateToProps,
  null
)(Header);

export default Header;
