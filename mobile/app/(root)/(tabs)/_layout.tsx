import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

import { icons } from '@/constants';

const TabIcon = ({ focused, icon, title }: { focused: boolean; icon: any; title: string }) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    <Image
      source={icon}
      tintColor={focused ? '#2176ff' : '#666876'}
      resizeMode="contain"
      className="size-8"
    />
    <Text
      className={`${focused ? ' text-blue font-rubik-medium' : 'text-primary font-medium'} text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          borderColor: '#0061FF1A',
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.home} focused={focused} title="Home" />,
        }}
      />
      <Tabs.Screen
        name="check-situasi"
        options={{
          title: 'Check Situasi',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.people} focused={focused} title="Check Situasi" />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.more} focused={focused} title="More" />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
