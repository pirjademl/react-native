import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
import { Image } from 'react-native'
import { FormField, CustomButton } from '../../components/'
import { Link } from 'expo-router'
import { icons } from '../../constants'
import { getCurrentUser, signIn } from '../../lib/appwrite'
import { router } from 'expo-router'
import { Alert } from 'react-native'
import { useGlobalContext } from '../../context/GlobalProvider'
const SignIn = () => {
    const { setUser, setIsLogged } = useGlobalContext();



    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [isSubmitting, setSubmitting] = useState(false)
    const submit = async () => {
        if (form.email === "" || form.password === "") {
            Alert.alert("Error", "Please fill in all fields");
        }

        setSubmitting(true);
        try {

            await signIn(form.email, form.password);
            const result = await getCurrentUser();
            console.log('this is result', result)

            setUser(result)
            setIsLogged(true)
            router.replace("/home");
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className=" w-full justify-center  px-4 min-h-[85vh] my-6 ">
                    <Image resizeMode="cover" className="w-[150px] h-[35px]" source={images.logo} />
                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Login To AORA
                    </Text>
                    <FormField
                        title="email"
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        value={form.email}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />

                    <CustomButton title="Sign In" handlePress={submit} containerStyles="mt-7" isLoading={isSubmitting} />
                    <View className="justify-center pt-5 flex-row gap-2 ">
                        <Text className="text-lg text-gray-100 font-pregular">Don't have an account</Text>
                        <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>Sign Up</Link>

                    </View>

                </View>



            </ScrollView>

        </SafeAreaView>
    )
}

export default SignIn