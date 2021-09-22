import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <Image source={require('../../assets/splash.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {},
});

export default SplashScreen;
