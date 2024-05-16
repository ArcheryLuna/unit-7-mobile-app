import { Text, View, StatusBar, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

console.log("Hello, World!");

const RootLayout = () => {

    return (
        <View className="flex-1 items-center justify-center gap-2 text-white">
            <Text>Root Layout</Text>
            <Link href="/level/1">
                <Text>Level 1</Text>
            </Link>
            <Link href="/level/2">
                <Text>Level 2</Text>
            </Link>
            <Link href="/level/3">
                <Text>Level 3</Text>
            </Link>
            <Link href="/level/4">
                <Text>Level 4</Text>
            </Link>
            <Link href="/level/5">
                <Text>Level 5</Text>
            </Link>
            <StatusBar />
        </View>
    )
}

export default RootLayout;

