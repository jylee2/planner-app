import React, { memo, useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import { AddItemPropsType } from '../types/types'

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#eee',
    color: 'white',
    padding: 8,
    marginTop: 20,
    marginLeft: 14,
    marginRight: 14,
    fontSize: 18,
  },
  button: {
    padding: 9,
    margin: 5
  },
  btnText: {
    borderWidth: 1,
    borderColor: '#eee',
    color: 'white',
    fontSize: 18,
    paddingTop: 6,
    paddingBottom: 6,
    textAlign: 'center'
  }
});

const AddItem = memo((props:AddItemPropsType) => {
  const { addItem } = props

  const [inputText, setInputText] = useState('')

  const onInputChange = useCallback((input:string) => setInputText(input), [])

  return (
    <View>
      <TextInput
        placeholder='Add an item...'
        style={styles.input}
        onChangeText={onInputChange}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={addItem
          ? () => addItem(inputText)
          : () => {}}
      >
        <Text style={styles.btnText}>
          <AntDesign name='plus' size={18} color='white' /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
})

export default AddItem
