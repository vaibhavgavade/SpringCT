import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import AddEmployee from './src/addEmployee';
import ListEmployees from './src/ListEmployees';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import AllEmployees from './src/AllEmployees';
import {PersistGate} from 'redux-persist/es/integration/react';
import Login from './src/Login';
import SplashScreen from './src/SplashScreen';
interface AppProps {}

const App = (props: AppProps) => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen name="AddEmployee" component={AddEmployee} />
            <Stack.Screen name="ListEmployees" component={ListEmployees} />
            <Stack.Screen name="AllEmployees" component={AllEmployees} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
