import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Buttons from './components/Button';
import {useNavigation} from '@react-navigation/native';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Buttons
        title="Submit"
        onGo={() => navigation.navigate('ListEmployees')}
      />
      <Buttons
        title="Go Employees"
        onGo={() => navigation.navigate('AllEmployees')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
