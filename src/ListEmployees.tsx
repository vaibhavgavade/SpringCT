import React, {useState} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import Input from './components/Input';
import Buttons from './components/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {updateData} from './redux/reducer/updateSlice';
interface listEmployeesProps {}

const ListEmployees = (props: listEmployeesProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const checkValidation = () => {
    console.log('test');
    if (firstName == '') {
      Alert.alert('Enter first Name');
      return false;
    } else if (lastName == '') {
      Alert.alert('Enter Last Name');
      return false;
    } else if (age == '') {
      Alert.alert('Enter the age');
      return false;
    } else if (address == '') {
      Alert.alert('Enter the address');
    }

    if (firstName !== '' && lastName !== '' && age !== '' && address !== '') {
      return true;
    }
  };
  return (
    <View style={styles.container}>
      <Text>ListEmployees</Text>
      <Input
        Value={firstName}
        onChangeText={text => setFirstName(text)}
        Placeholder="Enter First Name"
      />
      <Input
        Value={lastName}
        onChangeText={text => setLastName(text)}
        Placeholder="Enter Last Name"
      />
      <Input
        Value={age}
        onChangeText={text => setAge(text)}
        Placeholder="Enter age"
      />
      <Input
        Value={address}
        onChangeText={text => setAddress(text)}
        Placeholder="Enter address"
      />
      <Buttons
        title="Submit"
        onGo={() => {
          if (checkValidation()) {
            dispatch(updateData({firstName, lastName, age, address}));
            navigation.navigate('AllEmployees');
          }
        }}
      />
    </View>
  );
};

export default ListEmployees;

const styles = StyleSheet.create({
  container: {},
});
