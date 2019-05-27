import React, { Component } from "react";
import { View } from "react-native";

import PullItem from "../containers/PullItem";
import Loading from "../containers/Loading";
import NewsItem from "../containers/NewsItem";

type Props = {};
class Main extends Component<Props> {
  render() {
    return (
      <View>
        <PullItem />
        <Loading />
        <NewsItem />
      </View>
    );
  }
}

export default Main;
