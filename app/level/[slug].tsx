import { useLocalSearchParams, Link } from 'expo-router';
import { Text, View } from 'react-native';
import React from 'react';

const LevelSlug = () => {
    const { slug } = useLocalSearchParams();

    return (
        <View className="flex-1 items-center justify-center gap-2 text-white">
            <Text>Slug: {slug}</Text>
            <Link href="/">
                <Text>Go home</Text>
            </Link>
        </View>
    )
}

export default LevelSlug;
