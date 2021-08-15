import { StatusBar } from 'expo-status-bar';
import React, { memo, useState, useCallback } from 'react';
import { StyleSheet, FlatList, View, Alert } from 'react-native';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

import { ItemsType } from './types/types'
import Header from './components/Header'
import AddItem from './components/AddItem'
import ListItem from './components/ListItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});

const App = memo(() => {
  const [items, setItems] = useState<Array<ItemsType>>([
    { id: uuidv4(), text: 'Relax' },
    { id: uuidv4(), text: 'Eat' },
    { id: uuidv4(), text: 'Sleep' }
  ])

  const addItem = useCallback((inputText:string) => {
    if (!inputText?.length) {
      return Alert.alert(
        'Error',
        'Please enter text',
        // @ts-ignore
        { text: 'Ok' }
      )
    }

    setItems((prevItems:Array<ItemsType>) => {
      return [
        ...prevItems,
        { id: uuidv4(), text: inputText },
      ]
    })
  }, [])

  const deleteItem = useCallback((id:string) => (
    setItems((prevItems:Array<ItemsType>) => {
      return prevItems.filter((item:ItemsType) => item.id !== id)
    })
  ), [])

  const renderItems = useCallback(({item}) => (
    <ListItem item={item} deleteItem={deleteItem} />
  ), [])

  return (
    <View style={styles.container}>
      <Header title='To Do' />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={renderItems}
      />
      <StatusBar style='auto' />
    </View>
  );
})

export default App
