import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator, NavigationActions, TabBarBottom } from 'react-navigation';

import WelcomeScreen from '../screens/Welcome';
import Login from '../screens/Login';

export const resetAction = function(navigationIndex, routeNames){
  const actionStack = routeNames.map( (name) => {
    if (Array.isArray(name)){
      return NavigationActions.navigate({ routeName: name[0], params: name[1]})
    }
    return NavigationActions.navigate({ routeName: name})
  } );

  return NavigationActions.reset({
    index: navigationIndex,
    actions: actionStack
  });
}

export const AppNavigator = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Login: { screen: Login },
});