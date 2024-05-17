import { Text, View, StatusBar, Button, Pressable, Alert} from 'react-native';
import React, { useEffect } from 'react';
import { router } from 'expo-router';

import CompletedLevels from '../data/completed-levels.json';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRightLong } from '@fortawesome/pro-regular-svg-icons';

const RootLayout = () => {

    useEffect(() => {
        console.log(CompletedLevels);
    }, []);

    return (
        <View className="flex-1 mt-24">
            <Text 
                className="text-2xl font-bold text-center"
            >Unit 7 - Mobile Application </Text>
            <View className="px-2 py-6">
                <Pressable
                    className="bg-blue-500 absolute top-[60px] left-[15px] w-24 h-24 text-center rounded-full"
                    onPress={() => router.push("/level/1")}
                >
                    <Text className="font-bold text-xl text-center mt-8">Level 1</Text>
                </Pressable>
                <View className={(CompletedLevels.includes(1) ? "bg-blue-300" : "bg-stone-200") + " absolute top-[153px] left-[119px] w-4 h-4 rounded-full text-center"}>
                </View>
                <View className={(CompletedLevels.includes(1) ? "bg-blue-300" : "bg-stone-200") + " absolute top-[176px] left-[159px] w-4 h-4 rounded-full text-center"}>
                </View>
                <View className={
                    (CompletedLevels.includes(1) ? "bg-blue-300" : "bg-stone-200") + " absolute top-[201px] left-[194px] w-4 h-4 rounded-full text-center"}>
                </View>
                <View className={(CompletedLevels.includes(1) ? "bg-blue-300" : "bg-stone-200") +" absolute top-[225px] left-[224px] w-4 h-4 rounded-full text-center"}>
                </View>
                <Pressable 
                    className={( CompletedLevels.includes(1) ? "bg-blue-300" : "bg-gray-300") + " absolute top-[255px] right-[51] w-24 h-24 text-center rounded-full"}
                    onPress={() => {
                        if ( CompletedLevels.includes(1) ) {
                            router.push("/level/2")
                        } else {
                            Alert.alert("Please pass level one first", "You must complete the previous level first!", [
                                {
                                    text: "OK",
                                    onPress: () => console.log("OK Pressed")
                                }
                            ])
                        }
                    }}
                >
                    <Text className="font-bold text-xl text-center mt-8">Level 2</Text>
                </Pressable>
                <View className={(CompletedLevels.includes(2) ? "bg-blue-300" : "bg-stone-200") +" absolute top-[363px] right-[159px] w-4 h-4 rounded-full text-center"}>
                </View>
                <View className={(CompletedLevels.includes(2) ? "bg-blue-300" : "bg-stone-200") +" absolute top-[386px] right-[199px] w-4 h-4 rounded-full text-center"}>
                </View>
                <View className={(CompletedLevels.includes(2) ? "bg-blue-300" : "bg-stone-200") +" absolute top-[411px] right-[234px] w-4 h-4 rounded-full text-center"}>
                </View>
                <View className={(CompletedLevels.includes(2) ? "bg-blue-300" : "bg-stone-200") +" absolute top-[435px] right-[264px] w-4 h-4 rounded-full text-center"}>
                </View>
                <Pressable 
                    className={(CompletedLevels.includes(2) ? "bg-blue-500" : "bg-gray-300")+" absolute top-[460px] left-[32px] w-24 h-24 text-center rounded-full"}
                    onPress={() => {
                        if ( CompletedLevels.includes(2) ) {
                            router.push("/level/3")
                        } else {
                            Alert.alert("Please pass level two first", "You must complete the previous level first!", [
                                {
                                    text: "OK",
                                    onPress: () => console.log("OK Pressed")
                                }
                            ])
                        }
                    }}
                >
                    <Text className="font-bold text-xl text-center mt-8">Level 3</Text>
                </Pressable>
            </View>
            <Pressable onPress={() => router.push("/level/unlimitedPractice")} className="absolute bottom-16 bg-black border border-gray-200  right-6 left-6 p-2 rounded-lg">
                <Text className="text-center font-bold text-xl text-white">Unlimited Practice <FontAwesomeIcon icon={faArrowRightLong} color={"#fff"} /></Text>
            </Pressable>
            <StatusBar />
        </View>
    )
}

export default RootLayout;

