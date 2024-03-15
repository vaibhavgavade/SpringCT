import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';

interface AddEmployeeProps {}

const AddEmployee = (props: AddEmployeeProps) => {
  const data = useSelector((state: RootState) => state.updateReducer.data);
  console.log('data........', data);

  return (
    <View style={styles.container}>
      <Text>AddEmployee</Text>
      <Text>Hello</Text>
    </View>
  );
};

export default AddEmployee;

const styles = StyleSheet.create({
  container: {},
});
