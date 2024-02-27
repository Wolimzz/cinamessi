import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';

const MainPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flexDirection:'row',justifyContent:'space-evenly'}}>
      
        <Button
          title="🎥"
          onPress={() => navigation.navigate('MovieList')}
        />
        <Button
          title="🏠"
          oonPress={() => navigation.navigate('Home')}
        />
        <Button
          title="👤"
          oonPress={() => navigation.navigate('Profile')}
        />
      
    </SafeAreaView>
  );
};

export default MainPage;
