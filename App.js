import React from 'react';
import Login from './src/screen/Login/Index';
import {SafeAreaView, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ExpenseManager from './src/screen/Expense Manager/Index';
import Dashboard from './src/screen/Dashboard/Index';
import OrderFood from './src/screen/orderFood/Index';
import WhatsApp from './src/screen/whatsApp/Index';

const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ExpenseManager" component={ExpenseManager} />
          <Stack.Screen name="OrderFood" component={OrderFood} />
          <Stack.Screen name="WhatsApp" component={WhatsApp} />
        </Stack.Navigator>

        {/*<SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
        <Login/>
        </View>
        </SafeAreaView>*/}
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
