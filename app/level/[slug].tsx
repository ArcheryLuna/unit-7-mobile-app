import { useLocalSearchParams, Link, Redirect, Stack, router } from 'expo-router';
import { Text, View, Pressable, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Question } from '../../types';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

import LevelOneFailedRepo from '../../data/level-one/failed-questions.json';
import LevelTwoFailedRepo from '../../data/level-two/failed-questions.json';
import LevelThreeFailedRepo from '../../data/level-three/failed-questions.json'

import CompletedLevels from '../../data/completed-levels.json'

// question imports
import levelOneQuestions from '../../data/level-one/questions';
import levelTwoQuestions from '../../data/level-two/questions';
import levelThreeQuestions from '../../data/level-three/questions';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-regular-svg-icons';

const LevelSlug = () => {
    const { slug } = useLocalSearchParams();
    const [loading, setLoading] = useState(true);
    
    const [levelQuestions, setLevelQuestions] = useState<Question[]>([]);
    const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [hasTimer, setHasTimer] = useState(false);
    const [timer, setTimer] = useState(0);

    const [currentLevel, setCurrentLevel] = useState(1);

    const [selectedAnswer, setSelectedAnswer] = useState('');

    useEffect(() => {
        switch (slug) {
            case '1':
                setLevelQuestions(levelOneQuestions);
                setHasTimer(false);
                setCurrentLevel(1);
                setCorrectAnswers(0);
                break;
            case '2':
                setLevelQuestions(levelTwoQuestions);
                setHasTimer(true);
                setCurrentLevel(2);
                setCorrectAnswers(0);
                break;
            case '3':
                setLevelQuestions(levelThreeQuestions);
                setHasTimer(true);
                setCurrentLevel(3);
                setCorrectAnswers(0);
                break;
            default:
                setLevelQuestions([...levelOneQuestions, ...levelTwoQuestions, ...levelThreeQuestions]);
                setCurrentLevel(4);
                setHasTimer(false);
                setCorrectAnswers(0);
                break;
        }
        setLoading(false);
    }, [slug]);

    function Loading() {
        return (
            <View className="flex-1 items-center justify-center gap-2 text-white">
                <Text>Loading...</Text>
            </View>
        );
    }

    function handleCheckAnswer(answer: string) {
        const current = levelQuestions[currentQuestion];
        if (current.questionType === 1 || current.questionType === 2) {
            if (parseInt(answer) === current.questionAnswer) {
                setCurrentQuestion(currentQuestion + 1);
                setCorrectAnswers(correctAnswers + 1);
            } else {
                setWrongQuestions([...wrongQuestions, current]);
                setCurrentQuestion(currentQuestion + 1);
            }
        } else if (current.questionType === 3) {
            if ((answer === "True" && current.questionAnswer === 1) || (answer === "False" && current.questionAnswer === 0)) {
                setCurrentQuestion(currentQuestion + 1);
                setCorrectAnswers(correctAnswers + 1);
            } else {
                setWrongQuestions([...wrongQuestions, current]);
                setCurrentQuestion(currentQuestion + 1);
            }
        }
        setSelectedAnswer('');
    }

    function InputMethod() {
        if (currentQuestion >= levelQuestions.length) {
            if (slug === 'unlimitedPractice') {
                setCurrentQuestion(0);
            }

            if (currentLevel === 1) {
                LevelOneFailedRepo.push(...wrongQuestions);
            } else if (currentLevel === 2) {
                LevelTwoFailedRepo.push(...wrongQuestions);
            } else if (currentLevel === 3) {
                LevelThreeFailedRepo.push(...wrongQuestions);
            }

            CompletedLevels.push(currentLevel);

            return <StyledView className="flex-1  justify-center place-items-center">
                <StyledText className="text-3xl  text-center">You have completed the level!</StyledText>
                <StyledText className=" text-center">You got {correctAnswers} out of {levelQuestions.length} questions correct!</StyledText>
                <StyledView className="absolute flex-1 flex-row gap-4 bottom-24">
                    <Pressable
                        className="bg-black px-2 py-1 border border-white rounded-lg"
                        onPress={() => {
                            router.push(`/level/${currentLevel + 1}`);
                        }}
                    >
                        <Text className="text-white">Next Level <FontAwesomeIcon icon={faArrowRight} color={"#fff"} /> </Text>
                    </Pressable>
                    <Pressable
                        className="bg-black px-2 py-1 border border-white rounded-lg"
                        onPress={() => {
                            router.push(`/`);
                        }}
                    >
                        <Text className="text-white"><FontAwesomeIcon icon={faArrowLeft} color={"#fff"} /> Go Back</Text>
                    </Pressable>

                </StyledView>
            </StyledView>;
        }

        const current = levelQuestions[currentQuestion];

        if (current.questionType === 1) {
            return (
                <View className="absolute bottom-64">
                    <StyledView className="flex-1 flex-row gap-2">
                        {current.questionOptions.map((option, index) => (
                            <Pressable
                                key={index}
                                className={selectedAnswer === option ? "bg-gray-500 text-white p-2 rounded-lg" : "bg-gray-800 text-white p-2 rounded-lg"}
                                onPress={() => setSelectedAnswer(option)}
                            >
                                <Text className="text-white">{option}</Text>
                            </Pressable>
                        ))}
                    </StyledView>
                    <Pressable
                        className="bg-black mt-6 px-6 py-4 border w-full border-white rounded-lg"
                        onPress={() => handleCheckAnswer(selectedAnswer)}
                    >
                        <Text className="text-white text-center">Submit</Text>
                    </Pressable>
                </View>
            );
        } else if (current.questionType === 3) {
            return (
                <View className="absolute bottom-64">
                    <TextInput
                        value={selectedAnswer}
                        onChangeText={setSelectedAnswer}
                        className="bg-gray-800 text-white p-2 rounded-lg"
                        keyboardType="numeric"
                        placeholder='Enter your answer here...'
                        placeholderTextColor={selectedAnswer === '' ? 'gray' : 'white'}
                    />
                    <Pressable
                        className="bg-black mt-6 px-6 py-4 border w-full border-white rounded-lg"
                        onPress={() => handleCheckAnswer(selectedAnswer)}
                    >
                        <Text className="text-white text-center">Submit</Text>
                    </Pressable>
                </View>
            );
        } else {
            return (
                <View className="absolute bottom-64">
                    <StyledView className="flex flex-row gap-4">
                        <Pressable
                            className="bg-black px-2 py-1 border border-white rounded-lg"
                            onPress={() => handleCheckAnswer('True')}
                        >
                            <Text className="text-white">True</Text>
                        </Pressable>
                        <Pressable
                            className="bg-black px-2 py-1 border border-white rounded-lg"
                            onPress={() => handleCheckAnswer('False')}
                        >
                            <Text className="text-white">False</Text>
                        </Pressable>
                    </StyledView>
                </View>
            );
        }
    }

    return (
        loading ? <Loading /> :
        <View className="flex-1 items-center justify-center gap-2 text-white">
            <View className="absolute top-[140px]">
                <Text className="text-3xl font-semibold">
                    {levelQuestions[currentQuestion]?.questionName}
                </Text>
            </View>
            <InputMethod />
        </View>
    );
}

export default LevelSlug;

