import React from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import Main from './MainPage';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    <Main/>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;