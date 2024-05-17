import { View, StyleSheet, Text, Appearance } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => {

    const ColorScheme = Appearance.getColorScheme();
    
    console.log(ColorScheme);

    return (
        <Stack
            screenOptions={{
                headerBackTitle: "Go Back",
            }}
        >
            <Stack.Screen name="index" options={{
                headerShown: false,
            }}/>

            <Stack.Screen name="level/[slug]" options={{
                headerShown: true,
                headerTitle: "Unit 7 - Level",
                headerStyle: {
                    backgroundColor: ColorScheme === "dark" ? "#000" : "#fff",
                },
                headerTitleStyle: {
                    color: ColorScheme === "dark" ? "#fff" : "#000",
                },
            }}/>
        </Stack>
    )
}

export default RootLayout;
