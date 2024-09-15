import { StatusBar } from "expo-status-bar";
import "react-native-url-polyfill/auto";
import { useContext, useEffect, useState } from "react";
import { Link, Redirect, router } from "expo-router";
import { Button, ScrollView } from "react-native";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormField, CustomButton } from "../components";
import { View } from "react-native";
import { Image } from "react-native";
import { images } from '../constants'
import { Text } from "react-native";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn, user } = useGlobalContext();
  console.log('this is fucking user', user)
  if (!isLoading && isLoggedIn) {
    return <Redirect href="/home" />

  }
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 ">
          <Image resizeMode="contain" source={images.logo} className="w-[130px] h-[84px] " />
          <Image resizeMode="contain" source={images.cards} className="max-w-[380px] h-[300px]" />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover endless possiblities with{''} <Text className="text-secondary-200">Aora</Text></Text>
            <Image resizeMode="contain" source={images.path} className="w-[136px] h-[15px] absolute -bottom-2 -right-8" />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation embark on journey of limitless exploration with Aora</Text>
          <CustomButton
            title="continue with email"
            containerStyles="w-full mt-7"
            text=""
            textStyle=""
            handlePress={() => router.push('/sign-in')}
          />
        </View>
        <StatusBar backgroundColor="#161622" style="light" />

      </ScrollView>

    </SafeAreaView >
  );
}
