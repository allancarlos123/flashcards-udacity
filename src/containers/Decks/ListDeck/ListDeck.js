import _ from "lodash";
import React, { Component } from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { Sector } from "../../../config/theme";
import { decksFetch } from "./../../../actions/decks";

const ListDeckItem = styled.Text`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  height: 44px;
`;

class ListDeck extends Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  componentDidUpdate() {
    this.props.fetchDecks();
  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate("DeckShow", item)}
    >
      <ListDeckItem>
        {item.title} ({item.questions.length})
      </ListDeckItem>
    </TouchableOpacity>
  );

  render() {
    if (_.isEmpty(this.props.decks)) {
      return (
        <Sector style={{ alignItems: "center" }}>
          <Image source={require("../../../images/empty-box.png")} />
        </Sector>
      );
    }

    return (
      <FlatList
        data={Object.values(this.props.decks)}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const mapStateToProps = ({ decks }) => ({
  decks: decks.decks
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(decksFetch())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDeck);
