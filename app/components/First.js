import React, { Component } from "react";
import { ScrollView } from "react-native";

import Header from "./Header";
import PullItem from "../containers/PullItem";
import Loading from "../containers/Loading";
import NewsItem from "../containers/NewsItem";
import ListItem from "../containers/ListItem";

type Props = {};
class FirstScreen extends Component<Props> {
  render() {
    return (
      <ScrollView>
        <Header />
        <PullItem />
        <Loading />
        <NewsItem />
        <ListItem />
      </ScrollView>
    );
  }
}

export default FirstScreen;
