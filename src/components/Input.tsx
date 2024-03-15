import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

interface InputProps {
  Value: string;
  onChangeText: any;
  Placeholder: string;
}

const Input = (props: InputProps) => {
  const {Value, onChangeText, Placeholder} = props;
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={Placeholder}
        style={styles.input}
        value={Value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#f0f',
  },
});
