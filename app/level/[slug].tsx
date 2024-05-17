import { useLocalSearchParams, Link, Redirect } from 'expo-router';
import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Question } from '../../types';

// question imports

import levelOneQuestions from '../../data/level-one/questions';
import levelTwoQuestions from '../../data/level-two/questions';
import levelThreeQuestions from '../../data/level-three/questions';
import levelFourQuestions from '../../data/level-four/questions';
import levelFiveQuestions from '../../data/level-five/questions';

const LevelSlug = () => {
    const { slug } = useLocalSearchParams();
    const [ loading, setLoading ] = useState(true);
    
    const levelQuestions: Question[] = [];
    const wrongQuestions: Question[] = [];

    useEffect(() => {
        switch (slug) {
            case '1':
                levelOneQuestions.forEach((question) => {
                    levelQuestions.push(question);
                    console.log(question.questionName);
                });
                break;
            case '2':
                levelTwoQuestions.forEach((question) => {
                    levelQuestions.push(question);
                });
                break;
            case '3':
                levelThreeQuestions.forEach((question) => {
                    levelQuestions.push(question);
                });
                break;
            case '4':
                levelFourQuestions.forEach((question) => {
                    levelQuestions.push(question);
                });
                break;
            case '5':
                levelFiveQuestions.forEach((question) => {
                    levelQuestions.push(question);
                });
                break;
            default:
                break;
        }

        setLoading(false);
    }, []);

    function Loading() {
        return (
            <View className="flex-1 items-center justify-center gap-2 text-white">
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        loading ? <Loading /> :
        <View className="flex-1 items-center justify-center gap-2 text-white">
            <Text>Slug: {levelQuestions[1].questionName}</Text>
            <Link href="/">
                <Text>Go home</Text>
            </Link>
        </View>
    )
}

export default LevelSlug;
