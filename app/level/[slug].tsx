import { useLocalSearchParams, router } from 'expo-router';
import { Text, View, Pressable, TextInput } from 'react-native';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Question } from '../../types';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

import LevelOneFailedRepo from '../../data/level-one/failed-questions.json';
import LevelTwoFailedRepo from '../../data/level-two/failed-questions.json';
import LevelThreeFailedRepo from '../../data/level-three/failed-questions.json';

import CompletedLevels from '../../data/completed-levels.json';

import levelOneQuestions from '../../data/level-one/questions';
import levelTwoQuestions from '../../data/level-two/questions';
import levelThreeQuestions from '../../data/level-three/questions';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faRightLongToLine } from '@fortawesome/pro-regular-svg-icons';

const LevelSlug = () => {
    const { slug } = useLocalSearchParams();
    const [loading, setLoading] = useState(true);

    const [levelQuestions, setLevelQuestions] = useState<Question[]>([]);
    const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [hasTimer, setHasTimer] = useState(false);

    const questionTimerRef = useRef(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [currentLevel, setCurrentLevel] = useState(1);

    const [selectedAnswer, setSelectedAnswer] = useState('');

    const [dummyState, setDummyState] = useState(0); // Dummy state to force re-render for the timer display

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

    const handleTimeout = useCallback(() => {
        setWrongQuestions((prev) => [...prev, levelQuestions[currentQuestion]]);
        setCurrentQuestion((prev) => prev + 1);
    }, [currentQuestion, levelQuestions]);

    useEffect(() => {
        if (hasTimer && currentQuestion < levelQuestions.length) {
            questionTimerRef.current = 0;
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
            timerRef.current = setInterval(() => {
                questionTimerRef.current += 1;
                setDummyState((prev) => prev + 1); // Trigger re-render for the timer display
                if (questionTimerRef.current >= (slug === '2' ? 20 : 10)) {
                    handleTimeout();
                    questionTimerRef.current = 0;
                }
            }, 1000);

            return () => {
                if (timerRef.current) {
                    clearInterval(timerRef.current);
                }
            };
        }
    }, [hasTimer, slug, currentQuestion, handleTimeout]);

    const HasTimer = useCallback(() => {
        if (hasTimer && currentQuestion < levelQuestions.length) {
            return (
                <StyledText className="text-center">
                    Time Remaining: {(slug === '2' ? 20 : 10) - questionTimerRef.current}
                </StyledText>
            );
        }
        return null;
    }, [hasTimer, currentQuestion, slug]);

    const InputMethod = useCallback(() => {
        if (currentQuestion >= levelQuestions.length) {
            if (slug === 'unlimitedPractice') {
                setCurrentQuestion(0);
            }

            if (currentLevel === 1) {
                LevelOneFailedRepo.push(...wrongQuestions);
            } else if (currentLevel === 2) {
                LevelTwoFailedRepo.push(...wrongQuestions);
            } else if (currentLevel === 3) {
                
            }

            CompletedLevels.push(currentLevel);

            return (
                <StyledView className="flex-1 justify-center place-items-center">
                    <StyledText className="text-3xl text-center">You have completed the level!</StyledText>
                    <StyledText className="text-center">You got {correctAnswers} out of {levelQuestions.length} questions correct!</StyledText>
                    <StyledView className="absolute flex-1 flex-row gap-4 right-12 left-12 bottom-24">
                        {currentLevel >= 3 ? null : (
                            <Pressable
                                className="bg-black px-2 py-1 border border-white rounded-lg"
                                onPress={() => {
                                    router.push(`/level/${currentLevel + 1}`);
                                }}
                            >
                                <Text className="text-white">Next Level <FontAwesomeIcon icon={faArrowRight} color={"#fff"} /></Text>
                            </Pressable>
                        )}
                        <Pressable
                            className="bg-black px-2 py-1 border border-white rounded-lg"
                            onPress={() => {
                                router.push(`/`);
                            }}
                        >
                            <Text className="text-white"><FontAwesomeIcon icon={faArrowLeft} color={"#fff"} /> Go Back</Text>
                        </Pressable>
                    </StyledView>
                </StyledView>
            );
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
                <View className="absolute ios:bottom-80 android:bottom-64 flex-1 flex-row gap-1">
                    <TextInput
                        value={selectedAnswer}
                        onChangeText={(text) => setSelectedAnswer(text)}
                        className="bg-gray-800 text-white p-2 rounded-lg w-48"
                        keyboardType="numeric"
                        placeholder='Enter your answer here...'
                        placeholderTextColor={selectedAnswer === '' ? 'gray' : 'white'}
                    />
                    <Pressable
                        className="bg-black mt-6 px-6 py-4 border w-4 border-white rounded-lg"
                        onPress={() => handleCheckAnswer(selectedAnswer)}
                    >
                        <Text className="text-white text-center ios:-ml-2 ios:mt-1"><FontAwesomeIcon icon={faRightLongToLine} color="#fff" /></Text>
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
    }, [currentQuestion, levelQuestions, selectedAnswer, correctAnswers, wrongQuestions, currentLevel]);

    function handleCheckAnswer(answer: string) {
        const current = levelQuestions[currentQuestion];
        if (current.questionType === 1 || current.questionType === 3) {
            if (answer == current.questionAnswer.toString()) {
                setCorrectAnswers((prev) => prev + 1);
            } else {
                setWrongQuestions((prev) => [...prev, current]);
            }
            setCurrentQuestion((prev) => prev + 1);
        } else if (current.questionType === 2) {
            if ((answer.toLowerCase() == "True".toLowerCase() && current.questionAnswer == 1) || (answer.toLowerCase() == "False".toLowerCase() && current.questionAnswer === 0)) {
                setCorrectAnswers((prev) => prev + 1);
            } else {
                setWrongQuestions((prev) => [...prev, current]);
            }
            setCurrentQuestion((prev) => prev + 1);
        }
        setSelectedAnswer('');
    }

    function Loading() {
            return (
                <StyledView className="flex-1 items-center justify-center">
                    <StyledText>Loading...</StyledText>
                </StyledView>
            );
    }

    return (
        loading ? <Loading /> :
        <View className="flex-1 items-center justify-center gap-2 text-white">
            <Pressable onPress={() => router.push("/")} className="absolute px-4 py-2 bg-black rounded-lg border border-gray-200 top-12 left-6">
                <Text className="text-white"><FontAwesomeIcon icon={faArrowLeft} color="#fff" /> Go Back</Text>
            </Pressable>
            <HasTimer />
            <StyledText className="text-3xl text-center absolute top-[120px]">Level {slug}</StyledText>
            <StyledText className="text-right absolute top-[95px] right-[25px]">Question {Math.min(currentQuestion + 1, levelQuestions.length)} of {levelQuestions.length}</StyledText>
            <StyledText className="text-left absolute top-[95px] left-[25px]">Correct Answers: {correctAnswers}</StyledText>
            <View className="absolute top-[180px]">
                <Text className="text-2xl px-6 font-semibold">
                    {levelQuestions[currentQuestion]?.questionName}
                </Text>
            </View>
            {InputMethod()}
        </View>
    );
}

export default LevelSlug;

