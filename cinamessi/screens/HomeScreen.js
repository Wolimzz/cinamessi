import React from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import Main from './MainPage';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text>Welcome to CinemaApp!</Text>
      </View>
    <Main/>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;