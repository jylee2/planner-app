import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HeaderPropsType } from '../types/types'

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: 'black',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'white'
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

const Header = memo((props:HeaderPropsType) => {
  const { title = 'To Do' } = props

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
})

export default Header
