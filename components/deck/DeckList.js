import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";
import { decksFetch } from './../../actions/decks';

import DeckListItem from './DeckListItem';
import { white } from '../../util/colors';

class DeckList extends Component {
  componentDidMount() {
    this.props.fetchDecks()
  }

  _keyExtractor = (item, index) => index.toString()

  _renderItem = ({item}) => (
    <View>
      <TouchableOpacity onPress={() =>
        this.props.navigation.navigate('DeckShow', item)}>
        <DeckListItem
          id={item.id}
          title={item.title}
          length={item.questions.length}
        />
      </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>Memorize anything</Text>
        </View>

        <FlatList
          data={Object.values(this.props.decks)}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
  },
  title: {
    fontSize: 32,
    color: '#ED4E5F',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#ED4E5F',
    paddingBottom: 10,
  }
});

const mapStateToProps = ({ decks }) => {
  return {
    decks: decks.decks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDecks: () => dispatch(decksFetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)