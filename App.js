import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './src/Dashboard';
import Room from './src/screens/room';
import UserProFile from './src/screens/userProfile';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SplashScreen from './src/screens/splashScreen/index';
const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 1000);
  }, [showSplashScreen]);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}>
        {showSplashScreen && (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="splash"
            component={SplashScreen}
          />
        )}
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          options={({navigation}) => ({
            headerTitle: () => null,
            headerLeft: props => (
              <Icon
                name="arrow-back"
                style={{fontSize: 30}}
                onPress={() => navigation.navigate('dashboard')}
              />
            ),
          })}
          name="room"
          component={Room}
        />
        <Stack.Screen
          options={({navigation}) => ({
            headerTitle: () => null,
            headerLeft: props => (
              <Icon
                name="arrow-back"
                style={{fontSize: 30}}
                onPress={() => navigation.navigate('dashboard')}
              />
            ),
          })}
          name="userProfile"
          component={UserProFile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
