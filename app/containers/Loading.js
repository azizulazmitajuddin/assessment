import React from "react";
import { View, Image, Text } from "react-native";
import { connect } from "react-redux";

let Laoading = ({ loading }) =>
  loading ? (
    <View style={{ width: "100%", textAlign: "center", alignItems: "center" }}>
      <Image source={require("../images/loading_spinner.gif")} />
      <Text>LOADING</Text>
    </View>
  ) : null;

const mapStateToProps = state => ({
  loading: state.loading
});

Laoading = connect(
  mapStateToProps,
  null
)(Laoading);

export default Laoading;
