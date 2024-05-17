import { View, StyleSheet, Text, Appearance } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';

const RootLayout = () => {

    const ColorScheme = Appearance.getColorScheme();
    
    console.log(ColorScheme);

    return (
        <Slot />
    )
}

export default RootLayout;
