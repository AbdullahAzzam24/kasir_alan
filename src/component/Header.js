import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header() {
  return (
    <View style={styles.header}>
      <Icon style={styles.searchIcon} name="search" size={20} color="#133b5c" />
      <TextInput placeholder="Cari Menu" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '70%',
    paddingLeft: 35,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginTop: 10,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 10,
    left: 8,
    color: '#133b5c',
  },
});
