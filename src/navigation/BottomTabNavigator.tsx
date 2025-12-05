import React from 'react';
import { Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from '../pages/MainPage';
import TaskPage from '../pages/TaskPage';
import MyPage from '../pages/MyPage';
import { IMAGES } from '../assets';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const focusedFontStyle = {
    fontSize: 12,
    fontWeight: 'bold' as const,
    color: '#000',
  };
  const unFocusedFontStyle = {
    fontSize: 12,
    fontWeight: 'normal' as const,
    color: '#888',
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 70 },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: '#000', // 선택된 탭 글자색
        tabBarInactiveTintColor: '#888', // 선택 안 된 탭 글자색
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainPage}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? focusedFontStyle : unFocusedFontStyle}>
              홈
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? IMAGES.homeBlack : IMAGES.home} />
          ),
        }}
      />

      <Tab.Screen
        name="Task"
        component={TaskPage}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? focusedFontStyle : unFocusedFontStyle}>
              과제
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? IMAGES.TaskBlack : IMAGES.Task} />
          ),
        }}
      />

      <Tab.Screen
        name="My"
        component={MyPage}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? focusedFontStyle : unFocusedFontStyle}>
              마이페이지
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? IMAGES.MyPageBlack : IMAGES.MyPage} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
