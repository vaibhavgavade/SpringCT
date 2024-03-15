import React, {useState} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import Input from './components/Input';
import Buttons from './components/Button';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginProps {}

const Login = (props: LoginProps) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const saveKey = async value1 => {
    console.log(value1);
    try {
      await AsyncStorage.setItem('@deMO', value1);
    } catch (e) {
      console.log('Error retrieving data' + error);
    }
    console.log('Done.');
  };

  const userLogin = () => {
    var data = new FormData();
    data.append('email', username);
    data.append('password', password);
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('response object:', responseJson);
        if (responseJson.token) {
          navigation.navigate('Home');
          saveKey(responseJson.token);
        } else {
          Alert.alert(responseJson.error);
        }
      })
      .catch(error => {
        console.error('error is...', error);
      });
  };

  const checkValidation = () => {
    console.log('test');
    if (username == '') {
      Alert.alert('Enter email');
      return false;
    } else if (password == '') {
      Alert.alert('Enter password');
      return false;
    }
    if (username !== '' && password !== '') {
      return true;
    }
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Input
        Value={username}
        onChangeText={text => setUserName(text)}
        Placeholder="UserName"
      />
      <Input
        Value={password}
        onChangeText={text => setPassword(text)}
        Placeholder="Password"
      />
      <Buttons
        title="Login"
        onGo={() => {
          if (checkValidation()) {
            userLogin();
          }
          //   navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {},
});
