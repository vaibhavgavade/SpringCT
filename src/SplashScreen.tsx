import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface componentNameProps {}

const SplashScreen = (props: componentNameProps) => {
  const navigation = useNavigation();
  useEffect(() => {
    LaunchScreen();
  }, []);

  const LaunchScreen = async () => {
    try {
      const value = await AsyncStorage.getItem('@deMO');
      console.log('test value..', value);
      setTimeout(() => {
        value !== null
          ? navigation.navigate('Home')
          : navigation.navigate('Login');
      }, 2000);
    } catch (error) {
      // Error retrieving data
    }
  };

  return (
    <View style={styles.container}>
      <Text>Splashscreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
