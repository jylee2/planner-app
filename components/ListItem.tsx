import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import { ListItemPropsType } from '../types/types'

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
});

const ListItem = memo((props:ListItemPropsType) => {
  const { item, deleteItem } = props

  const onDeleteItem = useCallback(() => {
    if (deleteItem) {
      deleteItem(item?.id || '')
    }
  }, [])

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.text}>{item?.text}</Text>
        <AntDesign
          name='check'
          size={24}
          color='white'
          onPress={onDeleteItem}
        />
      </View>
    </TouchableOpacity>
  );
})

export default ListItem
