import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState('Testing');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#f0f0f0',
      },
      headerRight: () => (
        <AntDesign
          style={styles.navButton}
          name="arrowright"
          size={24}
          onPress={() => navigation.navigate('Second')}
        />
      ),
    });
  }, [message]);

  return (
    <View style={styles.container}>
      <Text>Home screen: {message}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setMessage(text)}
        value={message}
        placeholder="Type message here"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  navButton: {
    marginRight: 5,
    padding: 4,
  },
  input: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});