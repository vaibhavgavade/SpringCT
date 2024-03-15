import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';

interface AllEmployeeProps {}

const AllEmployees = (props: AllEmployeeProps) => {
  const data = useSelector((state: RootState) => state.updateReducer.data);
  console.log('data........', data);
  return (
    <View style={styles.container}>
      {data ? (
        <FlatList
          data={data}
          renderItem={Item => {
            const {item} = Item;
            console.log('test items....', item);
            return (
              <View style={styles.container}>
                <Text>{item?.address}</Text>
                <Text>{item?.firstName}</Text>
                <Text>{item?.lastName}</Text>
                <Text>{item?.age}</Text>
              </View>
            );
          }}
        />
      ) : (
        <View>
          <Text>No Employee data found</Text>
        </View>
      )}
    </View>
  );
};

export default AllEmployees;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
