import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface ButtonsProps {
  title: string;
  onGo: () => void;
}
const Buttons = (props: ButtonsProps) => {
  const {title, onGo} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onGo}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f0f',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {},
});
