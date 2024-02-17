// Screen1.js
import React from 'react';
import { View } from 'react-native';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { TopTabs } from '../TopTaps';

const data = [
  { id: '1', title: 'Elemento 1' },
  { id: '2', title: 'Elemento 2' },
  { id: '3', title: 'Elemento 3' },
 
];

export const Screen1 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , margin: 25, padding:5 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => TopTabs.navigate('Datos')}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};




