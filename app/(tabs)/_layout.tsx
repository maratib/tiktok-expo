import Ionicons from "@expo/vector-icons/Ionicons";
import { PlatformPressable } from "@react-navigation/elements";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function TabLayout() {
  const iconSize = 28;
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: "#000",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: (props) => (
          <PlatformPressable
            {...props}
            android_ripple={{ color: "transparent" }}
          />
        ),

        tabBarItemStyle: {
          paddingTop: 4,

          // backgroundColor: "red",
        },

        // tabBarButton: HapticTab,
        //tabBarBackground: TabBarBackground,
        // tabBarStyle:  Platform.select({
        //   ios: {
        //     // Use a transparent background on iOS to show the blur effect
        //     position: "absolute",
        //   },
        //   default: {

        //   },
        // }),
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 90,

          borderTopWidth: 0,
          elevation: 0,
          shadowColor: "transparent",
          backgroundColor: "rgba(255, 255, 255, 0.75)", // Semi-transparent white
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={iconSize}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "people-sharp" : "people-outline"}
              size={iconSize}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          tabBarItemStyle: {
            // width: 75,

            top: -14,

            // backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
            backgroundColor: "transparent", // Semi-transparent white
          },
          tabBarIcon: ({ focused }) => (
            <View className="relative items-center justify-center w-20 h-20 top-4 bg-white opacity-80 rounded-full">
              <Ionicons
                name={focused ? "add-circle-sharp" : "add-circle-outline"}
                size={66}
                color="black"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused ? "chatbox-ellipses-sharp" : "chatbox-ellipses-outline"
              }
              size={iconSize}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person-sharp" : "person-outline"}
              size={iconSize}
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  );
}
