import { View, StyleSheet, Text, Appearance } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => {

    const ColorScheme = Appearance.getColorScheme();
    
    console.log(ColorScheme);

    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="level/[slug]" />
        </Stack>
    )
}

export default RootLayout;
