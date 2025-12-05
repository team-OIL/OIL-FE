import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import MainPage from '../pages/MainPage';
import TaskPage from '../pages/TaskPage';
import MyPage from '../pages/MyPage';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 70 },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainPage}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 24 }}>{focused ? '🏠' : '🏡'}</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Task"
        component={TaskPage}
        options={{
          tabBarLabel: '과제',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 24 }}>{focused ? '📄' : '📃'}</Text>
          ),
        }}
      />

      <Tab.Screen
        name="My"
        component={MyPage}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 24 }}>{focused ? '👤' : '👥'}</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
