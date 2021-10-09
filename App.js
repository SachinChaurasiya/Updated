import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Drawercreate from './Drawer/DrawerCreate';
import Check from './Screens/Check'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <NavigationContainer>
      <Drawercreate/>
      </NavigationContainer> */}
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Drawercreate}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Check" component={Check}/>
      </Stack.Navigator>
    </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
