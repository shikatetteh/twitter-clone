import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarIcon from '../components/TabBarIcon';
import InboxScreen from '../screens/InboxScreen';
import HomeScreen from '../screens/HomeScreen';
import NotifyScreen from '../screens/NotifyScreen';
import SearchScreen from '../screens/SearchScreen';
import { FontAwesome } from '@expo/vector-icons';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  )
};

HomeStack.path = '';

const InboxStack = createStackNavigator(
  {
    Inbox: InboxScreen
  },
  config
);

InboxStack.navigationOptions = {
  tabBarLabel: 'Inbox',
  tabBarIcon: ({ focused }) => (
    <FontAwesome focused={focused} size={26} name="envelope-o" />
  )
};

InboxStack.path = '';

const NotifyStack = createStackNavigator(
  {
    notify: NotifyScreen
  },
  config
);

NotifyStack.navigationOptions = {
  tabBarLabel: 'Inbox',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-notifications-outline'
          : 'md-notifications-outline'
      }
    />
  )
};

NotifyStack.path = '';

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  )
};

SearchStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  NotifyStack,
  InboxStack
});

tabNavigator.path = '';

export default tabNavigator;
