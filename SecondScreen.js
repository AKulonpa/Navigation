import React, { useEffect } from 'react';
import { StyleSheet, View, Text, BackHandler } from 'react-native';

export default function SecondScreen({ route, navigation }) {
  useEffect(() => {
    const handleBackPress = () => {
      navigation.goBack(null);
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Second screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });