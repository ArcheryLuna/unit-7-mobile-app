import { View, Text, Appearance } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';

const Layout = () => {

    const ColorScheme = Appearance.getColorScheme();

    return (
        <Slot />
    )
}

export default Layout;
